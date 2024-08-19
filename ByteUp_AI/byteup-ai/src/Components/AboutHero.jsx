import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import SecondaryBtn from "./SecondaryBtn";
import AnimatedCursor from "./AnimatedCursor";

const AboutHero = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full h-[85vh] flex flex-col md:flex-row justify-between items-center px-[5.5rem] py-20 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <AnimatedCursor isHovered={isHovered} />
      <div className="md:w-[47%] w-full h-full ">
        <img
          src="https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
          alt="Calendar Planning"
          className="w-[100%] h-[100%] "
        />
      </div>
      <div className="md:w-[45%] w-full mt-8 md:mt-0 md:ml-8 text-center md:text-left ">
        <h2
          className={`animate-heading text-[13px] uppercase mb-1 font-Syne leading-4 font-normal ml-1 tracking-[.20em] ${
            theme === "light" ? "text-gradient-css opacity-70" : "text-white/40"
          }`}
        >
          Our Story
        </h2>
        <h1
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="text-5xl font-semibold mb-6 leading-[3rem] font-Syne"
        >
          We Help You Accelerate Growth with Social Media
        </h1>
        <p
          className={`mb-2 text-[17px] font-normal leading-6 ${
            theme === "light" ? " text-black/50" : " text-white/40"
          } font-Archivo`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          tenetur tempore placeat repellendus repudiandae nesciunt et, sequi
          atque, sint qui expedita eligendi veritatis officiis cum nam
          exercitationem! Maxime, labore soluta. Praesentium quasi laudantium
          ea, veritatis omnis as
        </p>
        <p
          className={`mb-6 text-[17px] font-normal leading-6 ${
            theme === "light" ? " text-black/50" : " text-white/40"
          } font-Archivo`}
        >
          Our team of experienced social media experts understands the
          ever-evolving landscape of social media and stays up-to-date with the
          latest trends, algorithms, and best practices. the latest trends,
          algorithms, and best practices.
        </p>
        <Link to="/blogs">
          <SecondaryBtn btn="Learn more" />
        </Link>
      </div>
    </div>
  );
};

export default AboutHero;
