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

  // Ensure "status" is checked for all possible states
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNewsData());
    }
  }, [status, dispatch]);

  // Update "isLoading" based on status
  useEffect(() => {
    if (status === "succeeded" || status === "failed") {
      setIsLoading(false); // Stop loader when data is fetched or on failure
    } else if (status === "loading") {
      setIsLoading(true); // Show loader while data is fetching
    }
  }, [status]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <NewsHero newsData={newsData} />
          <NewsTrending newsData={newsData} />
          <NewsFissionFresh newsData={newsData} />
          <NewsChainReaction newsData={newsData}/>
          <Footer />
        </div>
      )}
    </>
  );
};

export default News;

// import { useDispatch, useSelector } from "react-redux";
// import { fetchNewsData } from "../store/slices/apiSlice";
// import Loader from "../components/Loader";
// import { useEffect } from "react";

// const News = () => {
//   const dispatch = useDispatch();
//   const newsData = useSelector((state) => state.api.news);
//   const status = useSelector((state) => state.api.status);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchNewsData());
//     }
//   }, [status, dispatch]);

//   if (status === "loading") {
//     return <Loader />; // Display loader when status is "loading"
//   }

//   if (status === "failed") {
//     return <div>Error fetching data.</div>; // Handle errors
//   }

//   return (
//     <div>
//       <Navbar />
//       <NewsHero />
//       <NewsTrending />
//       <NewsFissionFresh />
//       <NewsChainReaction />
//       <Footer />
//     </div>
//   );
// };

// export default News;
