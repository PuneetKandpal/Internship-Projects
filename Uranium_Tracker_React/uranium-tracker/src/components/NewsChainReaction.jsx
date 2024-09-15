import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "../store/slices/apiSlice";
import Loader from "./Loader"; // Import your loader component

gsap.registerPlugin(ScrollTrigger);

// Function to format dates consistently
const formatDate = (dateString) => {
  // Handle date strings with day and without day
  const datePartsWithDay = dateString.split(", ");
  const dateParts = datePartsWithDay[datePartsWithDay.length - 1].split(" ");

  let day = dateParts[0];
  let month = dateParts[1];
  let year = dateParts[2];

  // Handle dates in the format "dd-mm-yyyy" or "d Month yyyy"
  if (dateString.includes("-")) {
    [day, month, year] = dateString.split("-");
    month = parseInt(month, 10) - 1; // JavaScript months are 0-based
    return new Date(year, month, day).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } else {
    // Handle "Day, d Month yyyy" format
    return new Date(`${month} ${day}, ${year}`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
};

const NewsChainReaction = () => {
  const dispatch = useDispatch();
  const NewsData = useSelector((state) => state.api.news); // Fetch your news data
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

  return (
    <div className="py-16 px-6 md:px-20 md:pb-28 md:pt-7">
      <h2 className="uranium-news-headline flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Global Uranium Chain Reaction
      </h2>

      <div className="flex justify-between flex-wrap">
        {NewsData.global_uranium_news?.map((newsItem) => (
          <div
            key={newsItem.id}
            className="trending-block w-full sm:w-[48%] lg:w-[22%] mb-6"
          >
            <div className="w-full h-[170px] overflow-hidden">
              <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-full object-cover hover:scale-105 hover:opacity-95 transition-all duration-300"
                  src={newsItem.image_url}
                  alt={newsItem.title}
                />
              </a>
            </div>

            <div className="py-2">
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <h1 className="text-[15px] md:text-lg leading-[20px] text-white/90 font-semibold truncate-2-lines group-hover:text-lime1">
                  {newsItem.title}
                </h1>
                <span className="text-[11px] md:text-[12px] lato font-medium text-white/40 mt-1">
                  <span>{formatDate(newsItem.published_date)}</span>
                  &nbsp; | &nbsp; <span>{newsItem.publisher}</span>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsChainReaction;
