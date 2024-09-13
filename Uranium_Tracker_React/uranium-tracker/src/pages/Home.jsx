import Footer from "../components/Footer";
import DidYouKnow from "../components/HomeDidYouKnow";
import HomeFeaturedNewsTweets from "../components/HomeFeaturedNewsTweets";
import HomeHero from "../components/HomeHero";
import HomePriceChart from "../components/HomePriceChart";
import HomeTableNews from "../components/HomeTableNews";
import HomeUraniumBlogs from "../components/HomeUraniumBlogs";
import UraniumElementOfOpp from "../components/HomeUrElmOfOpportunity";
import HomeVideoSec from "../components/HomeVideoSec";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <Marquee />
      <HomePriceChart />
      <HomeTableNews />
      <UraniumElementOfOpp />
      <DidYouKnow />
      <HomeFeaturedNewsTweets />
      <HomeUraniumBlogs />
      <HomeVideoSec />
      <Footer />
    </div>
  );
};

export default Home;
