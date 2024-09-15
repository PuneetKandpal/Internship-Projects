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

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchHomeData());
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
          <HomeHero homeData={homeData} />
          <Marquee homeData={homeData} />
          <HomePriceChart />
          <HomeTableNews homeData={homeData} />
          <HomeLosarsTableSec homeData={homeData} />
          <UraniumElementOfOpp />
          <DidYouKnow />
          <HomeFeaturedNewsTweets homeData={homeData} />
          <HomeUraniumBlogs />
          {/* <HomeVideoSec /> */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
