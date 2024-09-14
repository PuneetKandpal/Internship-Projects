import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "../store/slices/apiSlice";
import Loader from "./Loader"; // Import your loader component

const NewsHero = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.api.home);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNewsData());
    }

    if (status === "succeeded") {
      setIsLoading(false); // Set loading to false when data is fetched
    }

    gsap.registerPlugin(ScrollTrigger);

    // Animate the large image section
    gsap.from(".animate-large-img", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".animate-large-img",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate the smaller image sections
    gsap.from(".animate-small-imgs > *", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".animate-small-imgs",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [status, dispatch, isLoading]);

  // Show the loader while loading is true
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-16 px-0 md:px-0 md:py-20">
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px] h-full">
          {/* Left Section - Large Image */}
          <div className="lg:col-span-2 h-full">
            {newsData.featured_news && newsData.featured_news.length > 0 && (
              <Link
                to={`/news/${newsData.featured_news[0].id}`}
                className="block h-full"
              >
                <div className="relative h-[559px] group overflow-hidden animate-large-img">
                  <img
                    src={newsData.featured_news[0].image_url}
                    alt={newsData.featured_news[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 object-bottom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>

                  <div className="absolute bottom-6 left-5 text-white z-10">
                    <span className="bg-lime1 text-black font-semibold text-xs px-2 py-1 uppercase">
                      {newsData.featured_news[0].publisher}
                    </span>
                    <h2 className="text-2xl font-semibold pr-6 mt-4 leading-[35px]">
                      {newsData.featured_news[0].title}
                    </h2>
                    <div className="flex gap-x-3 mt-5">
                      <p className="text-[13.5px] lato text-white/80">
                        {newsData.featured_news[0].author === "N/A"
                          ? "No Author"
                          : newsData.featured_news[0].author}{" "}
                        -{" "}
                      </p>

                      <p className="text-[13.5px] lato text-white/80">
                        {new Date(
                          newsData.featured_news[0].published_date
                            .split("-")
                            .reverse()
                            .join("-")
                        ).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Right Section - Stacked Smaller Images */}
          <div className="flex flex-col space-y-1 animate-small-imgs">
            {newsData.featured_news &&
              newsData.featured_news.slice(1, 3).map((newsItem) => (
                <Link to={`/news/${newsItem.id}`} key={newsItem.id}>
                  <div className="relative w-full h-[277px] group overflow-hidden">
                    <img
                      src={newsItem.image_url}
                      alt={newsItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-5 text-white z-10">
                      <span className="bg-lime1 text-black font-semibold text-[11px] px-2 py-1 uppercase">
                        {newsItem.publisher}
                      </span>
                      <h3 className="text-[20px] leading-[25px] font-semibold mt-2 pr-4">
                        {newsItem.title}
                      </h3>
                      <div className="flex gap-x-3 mt-5">
                        <p className="text-[13.5px] lato text-white/80">
                          {newsItem.author === "N/A"
                            ? "No Author"
                            : newsData.featured_news[0].author}{" "}
                          -{" "}
                        </p>

                        <p className="text-[13.5px] lato text-white/80">
                          {new Date(
                            newsItem.published_date
                              .split("-")
                              .reverse()
                              .join("-")
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
