// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./Loader"; // Import your loader component

// gsap.registerPlugin(ScrollTrigger);

const NewsTrending = ({ newsData }) => {
  // useEffect(() => {
  //   gsap.from(".trending-block", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     stagger: 0.3,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".py-16",
  //       start: "top 80%",
  //       end: "bottom 60%",
  //       toggleActions: "play none none reverse",
  //       // markers:true
  //     },
  //   });
  // }, [newsData]);

  // Show the loader while loading is true
  if (!newsData) {
    return <Loader />;
  }

  return (
    <div className="py-16 px-6 md:px-20 md:py-28 mt-5">
      <h2 className="flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Trending News
      </h2>

      <div className="flex justify-between flex-wrap">
        {newsData.latest_news.map((newsItem) => (
          <div
            key={newsItem.id}
            className="trending-block w-full sm:w-[48%] lg:w-[31%] mb-6"
          >
            <div className="w-full h-[210px] overflow-hidden">
              <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-full object-cover hover:scale-105 hover:opacity-95 transition-all duration-300"
                  src={newsItem.image_url}
                  alt={newsItem.title}
                />
              </a>
            </div>

            <div className="py-2">
              <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
                <h1 className="text-[16px] md:text-xl leading-[25px] capitalize text-white/90 font-semibold frank hover:text-white">
                  {newsItem.title}
                </h1>
              </a>
              <p className="text-[11px] md:text-[12px] lato font-medium text-white/40 mt-2">
                <span>
                  {new Date(newsItem.published_date).toLocaleDateString(
                    "en-US",
                    { month: "short", day: "numeric", year: "numeric" }
                  )}
                </span>
                &nbsp; | &nbsp;<span>{newsItem.publisher}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTrending;
