import { useEffect } from "react";
import gsap from "gsap";

const LatestUraniumCompNews = ({ homeData }) => {
  useEffect(() => {
    gsap.from("#uranium-news-section", {
      scrollTrigger: {
        trigger: "#uranium-news-section",
        start: "top 80%",
        end: "bottom 20%",
      },
      opacity: 0,
      x: 50,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  const { stock_news = [] } = homeData; // Destructure stock_news from homeData

  const timeAgo = (dateString) => {
    const publishedDate = new Date(dateString);
    const currentDate = new Date();
    const timeDiffInMs = currentDate - publishedDate;
    const timeDiffInMinutes = Math.floor(timeDiffInMs / (1000 * 60));

    if (timeDiffInMinutes < 60) {
      return `${timeDiffInMinutes} mins ago`;
    } else if (timeDiffInMinutes < 1440) {
      // less than 24 hours
      const timeDiffInHours = Math.floor(timeDiffInMinutes / 60);
      return `${timeDiffInHours} ${
        timeDiffInHours === 1 ? "hour" : "hours"
      } ago`;
    } else {
      const timeDiffInDays = Math.floor(timeDiffInMinutes / 1440);
      return `${timeDiffInDays} ${timeDiffInDays === 1 ? "day" : "days"} ago`;
    }
  };

  return (
    <div className="w-full mt-8 lg:mt-0 lg:w-[30%]" id="uranium-news-section">
      <h2 className="flex items-center text-[1rem] md:text-[1.4rem] ml-[-7px] frank mb-6 lg:mb-12 font-medium text-white capitalize">
        <i className="ri-menu-4-fill text-lime1 text-bold text-xl mr-2"></i>
        Latest uranium company news
      </h2>

      {/* Dynamically render each news item */}
      {stock_news.length > 0 ? (
        stock_news.map((news) => (
          <div key={news.id} className="border-b border-white/10 pb-5">
            <p className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
              {news.ticker}
            </p>
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              <h2 className="mt-3 text-[15px] md:text-[17px] font-semibold leading-5 md:leading-6 text-white/70 hover:text-lime1">
                {news.title}
              </h2>
            </a>
            <p className="text-[11px] md:text-[12px] roboto mt-2 font-normal text-white/35">
              <span>
                <i className="ri-time-line mr-1"></i>{" "}
                {timeAgo(news.published_date)}
              </span>{" "}
              &nbsp; | &nbsp; <span>{news.publisher}</span>
            </p>
          </div>
        ))
      ) : (
        <p className="text-white">No news available</p>
      )}
    </div>
  );
};

export default LatestUraniumCompNews;
