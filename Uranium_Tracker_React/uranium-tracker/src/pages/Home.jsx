import HomeHero from "../components/HomeHero";
import HomePriceChart from "../components/HomePriceChart";
import HomeTableNews from "../components/HomeTableNews";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <Marquee />
      <HomePriceChart />
      <HomeTableNews/>
    </div>
  );
};

export default Home;
