import Navbar from "../components/Navbar";
import NewsHero from "../components/NewsHero";
import NewsTrending from "../components/NewsTrending";
import NewsFissionFresh from "../components/NewsFissionFresh";
import NewsChainReaction from "../components/NewsChainReaction";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "../store/slices/apiSlice";
import Loader from "../components/Loader"; // Import your loader component
import { useEffect, useState } from "react";
const News = () => {
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.api.news);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNewsData());
    }
  }, [status, dispatch]); // Removed isLoading from dependency array

  useEffect(() => {
    if (status === "succeeded") {
      setIsLoading(false); // Set loading to false when data is fetched
    }
  }, [status]); // Separate useEffect to handle loading state

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <NewsHero />
          <NewsTrending />
          <NewsFissionFresh />
          <NewsChainReaction />
          <Footer />
        </div>
      )}
    </>
  );
};

export default News;
