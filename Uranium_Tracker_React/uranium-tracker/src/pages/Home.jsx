import HomeHero from "../components/HomeHero";
import HomePriceChart from "../components/HomePriceChart";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <Marquee />
      <HomePriceChart />
    </div>
  );
};

export default Home;
