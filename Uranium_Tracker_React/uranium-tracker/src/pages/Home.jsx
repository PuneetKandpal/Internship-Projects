import Footer from "../components/Footer";
import DidYouKnow from "../components/HomeDidYouKnow";
import HomeFeaturedNewsTweets from "../components/HomeFeaturedNewsTweets";
import HomeHero from "../components/HomeHero";
import HomeLosarsTableSec from "../components/HomeLosersTableSec";
import HomePriceChart from "../components/HomePriceChart";
import HomeTableNews from "../components/HomeTableNews";
import HomeUraniumBlogs from "../components/HomeUraniumBlogs";
import UraniumElementOfOpp from "../components/HomeUrElmOfOpportunity";
import HomeVideoSec from "../components/HomeVideoSec";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "../store/slices/apiSlice";
import Loader from "../components/Loader"; // Import your loader component
import { useEffect, useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.api.home);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state

  // Ensure "status" is checked for all possible states
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchHomeData());
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
          <HomeHero homeData={homeData} />
          <Marquee homeData={homeData} />
          <HomePriceChart homeData={homeData} />
          <HomeTableNews homeData={homeData} />
          <HomeLosarsTableSec homeData={homeData} />
          <UraniumElementOfOpp />
          <DidYouKnow />
          <HomeFeaturedNewsTweets homeData={homeData} />
          {/* <HomeUraniumBlogs /> */}
          {/* <HomeVideoSec /> */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;

// import { useDispatch, useSelector } from "react-redux";
// import { fetchHomeData } from "../store/slices/apiSlice";
// import Loader from "../components/Loader";
// import { useEffect } from "react";

// const Home = () => {
//   const dispatch = useDispatch();
//   const homeData = useSelector((state) => state.api.home);
//   const status = useSelector((state) => state.api.status);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchHomeData());
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
//       <HomeHero homeData={homeData} />

//       <Marquee homeData={homeData} />
//       <HomePriceChart homeData={homeData} />
//       <HomeTableNews homeData={homeData} />
//       <HomeLosarsTableSec homeData={homeData} />
//       <UraniumElementOfOpp />
//       <DidYouKnow />
//       <HomeFeaturedNewsTweets homeData={homeData} />
//       <HomeUraniumBlogs />
//       <HomeVideoSec />
//       <Footer />
//     </div>
//   );
// };

// export default Home;
