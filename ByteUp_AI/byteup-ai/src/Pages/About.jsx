import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AboutHero from "../Components/AboutHero";
import About3Points from "../Components/About3Points";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Navbar withHeroSection={false} />
      <AboutHero />
      <About3Points/>
    </div>
  );
};

export default About;
