import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AboutHero from "../Components/AboutHero";

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
    </div>
  );
};

export default About;
