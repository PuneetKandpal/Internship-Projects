import Hero from "../Components/Hero";
import MarqueeDiv from "../Components/Marquee";
import Navbar from "../Components/Navbar";
// import HomeWork from "../Components/HomeWork";
import AnimatedCursor from "../Components/AnimatedCursor";

const Home = () => {
  return (
    <div>
      <AnimatedCursor/>
      <Navbar />
      <Hero />

      {/* <HomeWork /> */}

      <MarqueeDiv />
    </div>
  );
};

export default Home;
