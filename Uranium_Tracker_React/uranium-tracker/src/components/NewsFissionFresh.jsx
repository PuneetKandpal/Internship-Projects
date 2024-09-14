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

  // Separate the first news item, the first 4 news items, and the remaining news items
  const firstNews = newsData.stock_news[0];
  const fourNews = newsData.stock_news.slice(1, 5);
  const remainingNews = newsData.stock_news.slice(5);

  return (
    <div className="py-16 px-6 md:px-20 md:pb-32 md:pt-10 mb-32">
      <h2 className="uranium-news-headline flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Fission Fresh Uranium News
      </h2>

      <div className="flex flex-wrap md:flex-nowrap md:justify-between">
        {/* First News Item */}
        <div className="uranium-news-background relative w-full md:w-[58%] h-[400px] md:h-auto overflow-hidden group">
          {firstNews && (
            <>
              <img
                src={firstNews.image_url}
                alt="Background"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent"></div>
              <a href={firstNews.link}>
                <div className="uranium-news-overlay absolute bottom-2 left-3 text-start w-full text-white p-4">
                  <span className="bg-lime1 text-black font-semibold text-xs px-2 py-1 uppercase">
                    {firstNews.ticker}
                  </span>
                  <h2 className="text-2xl text-white/90 font-semibold pr-6 mt-4 leading-[35px] truncate-2-lines hover:text-lime2 transition-all duration-200">
                    {firstNews.title}
                  </h2>
                  <p className="text-[13.5px] lato text-white/80 mt-5">
                    Globe Newswire –{" "}
                    {new Date(firstNews.published_date).toLocaleDateString()}
                  </p>
                </div>
              </a>
            </>
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
                  <div className="flex-shrink-0 w-44 h-28">
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
                      <span>
                        <i className="ri-time-line mr-1"></i>{" "}
                        {new Date(news.published_date).toLocaleTimeString()}
                      </span>
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
        <div className="flex  justify-between ">
          {remainingNews.map((news) => (
            <div
              key={news.id}
              className="news-card flex-none w-full sm:w-72 h-32 border-b border-white/5 mb-4"
            >
              <div className="flex-shrink-0 w-full h-full">
                <img
                  src={news.image_url}
                  alt={news.title}
                  className="w-full h-full object-cover hover:opacity-80 transition-all duration-200"
                />
              </div>
              <div className="p-2">
                <span className="text-[10.5px] font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
                  {news.ticker}
                </span>
                <a href={news.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-lg font-semibold mt-1 leading-[25px] truncate-2-lines hover:text-lime1 text-white/90 transition-all duration-200">
                    {news.title}
                  </h2>
                </a>
                <p className="text-xs mt-2 roboto font-medium text-white/50">
                  <span>
                    <i className="ri-time-line mr-1"></i>{" "}
                    {new Date(news.published_date).toLocaleTimeString()}
                  </span>
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
