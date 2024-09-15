// import { useEffect } from "react";
// import { gsap, ScrollTrigger } from "gsap";

// gsap.registerPlugin(ScrollTrigger);

const HomeFeaturedNews = ({ homeData }) => {
  return (
    <div className="w-full lg:w-[50%] h-full mb-10 featured-news overflow-x-hidden">
      <h2 className="flex items-center text-[1rem] md:text-[1.4rem] font-medium text-white capitalize mb-6 lg:mb-12">
        <i className="ri-menu-4-fill text-lime1 text-xl mr-2"></i>
        Featured News
      </h2>

      <div className="text-white">
        <div className="max-w-4xl mx-auto">
          {homeData.featured_news.map((newsItem) => (
            <div
              key={newsItem.id}
              className="flex flex-col sm:flex-row py-7 border-b border-white/10 news-card"
            >
              <img
                src={newsItem.image_url}
                alt={newsItem.title}
                className="w-52 h-32 md:h-[140px] object-cover hover:opacity-80 transition-all duration-200"
                style={{ minWidth: "13rem" }} // You can use a fixed width here
              />
              <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
                <div>
                  <span className="text-lime1 uppercase text-xs font-bold">
                    {newsItem.publisher}
                  </span>
                  <a
                    href={newsItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-white/90 mt-2 tracking-[0.5px] hover:text-lime1 transition-all duration-200">
                      {newsItem.title}
                    </h2>
                  </a>
                </div>
                <p className="text-xs mt-4 md:mb-[7px] md:text-[12px] font-medium text-white/25">
                  <span>
                    <i className="ri-time-line mr-1"></i>{" "}
                    {newsItem.published_date}
                  </span>{" "}
                  &nbsp; | &nbsp; <span>{newsItem.author}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedNews;
