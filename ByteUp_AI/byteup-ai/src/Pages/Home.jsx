import Hero from "../Components/Hero";
import MarqueeDiv from "../Components/Marquee";
import Navbar from "../Components/Navbar";
import HomeWork from "../Components/HomeWork";
import AnimatedCursor from "../Components/AnimatedCursor";
import HomeServices from "../Components/HomeServices";

const Home = () => {
  return (
    <div>
      <AnimatedCursor />
      <Navbar />
      <Hero />
      <MarqueeDiv />
      <HomeWork />
      <HomeServices />
    </div>
  );
};

export default Home;
