import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";
import { Link } from "react-router-dom";
import SecondaryBtn from "./SecondaryBtn";

const AboutClients = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full px-[5.5rem] py-10  flex justify-between flex-wrap items-center">
      <AnimatedCursor isHovered={isHovered} />
      <div className="w-[35%]  py-10">
        <h2
          className={`animate-heading text-[13px] uppercase mb-1 font-Syne leading-4 font-normal ml-1 tracking-[.20em] ${
            theme === "light" ? "text-gradient-css opacity-90" : "text-white/30"
          }`}
        >
          Brands
        </h2>
        <h1
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-5xl font-semibold mb-6 leading-[3rem] font-Syne"
        >
          Trusted by Leading Brands
        </h1>

        <p
          className={`mb-6 text-[17px] font-normal leading-6 ${
            theme === "light" ? " text-black/50" : " text-white/40"
          } font-Archivo`}
        >
          We proudly partner with top industry leaders, delivering exceptional
          service and achieving outstanding results together
        </p>
        <Link to="/services">
          <SecondaryBtn btn="view more" />
        </Link>
      </div>

      <div className="w-[50%]  py-10 flex gap-10 justify-center items-center flex-wrap">
        <div className="w-auto h-[70px]">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wqpSLAWFF5R26T_-89JGwcHhDpJhOHSJJQ&s"
            alt=""
          />
        </div>

        <div className="w-auto h-[70px]">
          <img
            className="w-full h-full scale-150 object-cover"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>

        <div className="w-auto h-[70px]">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7cylGuLw5nojRz2XTaSufIPqbxJyDi8yiA&s"
            alt=""
          />
        </div>

        <div className="w-auto h-[70px]">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffrihfFruJ2vW6P3IaGQXRMIqSbng8ZXajg&s"
            alt=""
          />
        </div>

        <div className="w-auto h-[70px]">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklOmZHav7AlrsUcT1SUvYxaVTmucE_mlEXg&s"
            alt=""
          />
        </div>

        <div className="w-auto h-[70px]">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGd1EUfsLW_2cVV1MGbetwkXawbnnfFO5lzg&s"
            alt=""
          />
        </div>

        <div className="w-auto h-[70px]">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOfiIm-_efhRPMly_MWfsDlNgtzPtNDY34g&s"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutClients;
