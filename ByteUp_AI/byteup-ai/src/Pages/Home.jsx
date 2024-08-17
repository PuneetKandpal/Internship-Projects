import Hero from "../Components/Hero";
import MarqueeDiv from "../Components/Marquee";
import Navbar from "../Components/Navbar";
import HomeWork from "../Components/HomeWork";
import AnimatedCursor from "../Components/AnimatedCursor";
import HomeServices from "../Components/HomeServices";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import Team from "../Components/Team";

const Home = () => {
  return (
    <div>
      <AnimatedCursor />
      <Navbar />
      <Hero />
      <MarqueeDiv />
      <HomeWork />
      <HomeServices />
      <Testimonials/>
      <Team/>
      <Footer/>
    </div>
  );
};

export default Home;
