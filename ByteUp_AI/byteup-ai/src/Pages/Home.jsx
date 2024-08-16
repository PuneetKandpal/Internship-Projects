import Hero from "../Components/Hero";
// import MarqueeDiv from "../Components/Marquee";
import Navbar from "../Components/Navbar";
import HomeWork from "../Components/HomeWork";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <HomeWork />

      {/* <Marquee /> */}
    </div>
  );
};

export default Home;
