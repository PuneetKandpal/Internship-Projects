import HomeHero from "../components/HomeHero";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <Marquee />
    </div>
  );
};

export default Home;
