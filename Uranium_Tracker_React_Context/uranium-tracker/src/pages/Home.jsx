import { useContext } from "react";
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
import { HomeContext } from "../context/HomeContext";
import Loader from "../components/Loader";

const Home = () => {
  const { data, loading, error } = useContext(HomeContext); // Changed homeData to data

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <HomeHero homeData={data} />
      <Marquee homeData={data} />
      <HomePriceChart homeData={data} />
      <HomeTableNews homeData={data} />
      <HomeLosarsTableSec homeData={data} />
      <UraniumElementOfOpp />
      <DidYouKnow />
      <HomeFeaturedNewsTweets homeData={data} />
      <HomeUraniumBlogs />
      <HomeVideoSec />
      <Footer />
    </div>
  );
};

export default Home;
