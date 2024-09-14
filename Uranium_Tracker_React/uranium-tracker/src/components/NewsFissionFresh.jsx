import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "../store/slices/apiSlice";
import Loader from "./Loader";

gsap.registerPlugin(ScrollTrigger);

const NewsFissionFresh = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.api.news);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNewsData());
    }

    if (status === "succeeded") {
      setIsLoading(false);
    }
  }, [status, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  // Helper function to calculate the "time ago" format
  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;

    if (diffInSeconds < secondsInHour) {
      const minutes = Math.floor(diffInSeconds / secondsInMinute);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < secondsInDay) {
      const hours = Math.floor(diffInSeconds / secondsInHour);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / secondsInDay);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  };

  const firstNews = newsData.stock_news[0];
  const fourNews = newsData.stock_news.slice(1, 5);
  const remainingNews = newsData.stock_news.slice(5);

  return (
    <div className="py-16 px-6 md:px-20 md:pb-32 md:pt-10 ">
      <h2 className="uranium-news-headline flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Fission Fresh Uranium News
      </h2>

      <div className="flex flex-wrap md:flex-nowrap md:justify-between">
        {/* First News Item */}
        <div className="uranium-news-background relative w-full md:w-[58%] h-[400px] md:h-auto overflow-hidden group">
          {firstNews && (
            <a href={firstNews.link}>
              <img
                src={firstNews.image_url}
                alt="Background"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent"></div>
              <div className="uranium-news-overlay absolute bottom-2 left-3 text-start w-full text-white p-4">
                <span className="bg-lime1 text-black font-semibold text-xs px-2 py-1 uppercase">
                  {firstNews.ticker}
                </span>
                <h2 className="text-2xl text-white/90 font-semibold pr-6 mt-4 leading-[35px] truncate-2-lines hover:text-lime2 transition-all duration-200">
                  {firstNews.title}
                </h2>
                <p className="text-[13.5px] lato text-white/80 mt-5 flex items-center">
                  <i className="ri-time-line mr-1 text-white/80"></i>
                  {timeAgo(firstNews.published_date)} &nbsp;|&nbsp;{" "}
                  {firstNews.publisher}
                </p>
              </div>
            </a>
          )}
        </div>

        {/* Right Side News Items */}
        <div className="w-full md:w-[38%] mt-8 md:mt-0">
          <div className="text-black">
            <div className="max-w-4xl mx-auto">
              {fourNews.map((news) => (
                <div
                  key={news.id}
                  className="news-card flex flex-col sm:flex-row border-b border-white/5 mb-4"
                >
                  <div className="flex-shrink-0 w-full md:w-44 h-28">
                    <img
                      src={news.image_url}
                      alt={news.title}
                      className="w-full h-full object-cover hover:opacity-80 transition-all duration-200"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
                        {news.ticker}
                      </span>
                      <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2 className="text-lg md:text-[17px] font-semibold mt-2 leading-[23px] truncate-2-lines hover:text-lime1 text-white/90 transition-all duration-200">
                          {news.title}
                        </h2>
                      </a>
                    </div>
                    <p className="text-xs mt-4 md:mb-[18px] md:text-[12px] roboto font-medium text-white/50 pb-3 md:pb-0">
                      <i className="ri-time-line mr-1"></i>
                      <span>{timeAgo(news.published_date)}</span>
                      &nbsp; | &nbsp; <span>{news.publisher}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Remaining News Items in a Single Row */}
      <div className="mt-12">
        <div className="flex flex-col md:justify-between sm:flex-row sm:flex-wrap gap-8">
          {remainingNews.map((news) => (
            <div
              key={news.id}
              className="news-card flex flex-col w-full sm:w-72 h-auto border-b border-white/5 md:border-none mb-4"
            >
              <div className="flex-shrink-0 w-full h-32">
                <img
                  src={news.image_url}
                  alt={news.title}
                  className="w-full h-full object-cover hover:opacity-80 transition-all duration-200"
                />
              </div>{" "}
              <div className="mt-5">
                <span className="text-[10.5px] font-extrabold lato bg-lime1  pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
                  {news.ticker}
                </span>
                <a href={news.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-lg font-semibold mt-1 leading-[25px] truncate-2-lines hover:text-lime1 text-white/90 transition-all duration-200">
                    {news.title}
                  </h2>
                </a>
                <p className="text-xs mt-2 roboto font-medium text-white/50 mb-5 md:mb-0">
                  <i className="ri-time-line mr-1"></i>
                  {timeAgo(news.published_date)} &nbsp;|&nbsp; {news.publisher}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFissionFresh;
