import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Marquee from "react-fast-marquee";
import python from "../assets/images/marqueeImgs/PythonLogo.png";
import django from "../assets/images/marqueeImgs/djangoLogo2.png";
import flask from "../assets/images/marqueeImgs/FlaskLogo.png";
import gemini from "../assets/images/marqueeImgs/GeminiLogo.png";
import langchain from "../assets/images/marqueeImgs/LangChainLogo.png";
import mistral from "../assets/images/marqueeImgs/MistralLogo.png";
import selenium from "../assets/images/marqueeImgs/seleniumLogo.png";
import chatgpt from "../assets/images/marqueeImgs/СhatGPTLogo.png";

const MarqueeLogo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`pt-20 py-36 select-none ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Marquee
        speed={100}
        gradient={true}
        gradientColor={`${theme === "light" ? "white" : "black"}`}
        className="flex space-x-0 overflow-y-hidden"
      >
        <div className="h-[6rem] w-auto  px-12">
          <img className="w-full h-full " src={python} alt="" />
        </div>

        <div className="h-[8.7rem] w-auto px-12">
          <img className="w-full h-full " src={django} alt="" />
        </div>

        <div className="h-[9.8rem] w-auto px-12">
          <img className="w-full h-full" src={flask} alt="" />
        </div>

        <div className="h-[9rem] mt-[-20px] w-auto px-12">
          <img className="w-full h-full" src={gemini} alt="" />
        </div>

        <div className="h-[10rem] w-auto px-8">
          <img className="w-full h-full" src={langchain} alt="" />
        </div>

        <div className="h-20 w-auto px-12">
          <img className="w-full h-full" src={mistral} alt="" />
        </div>

        <div className="h-[4.9rem] w-auto ml-5 px-12">
          <img className="w-full h-full" src={selenium} alt="" />
        </div>

        <div className="h-[5.3rem] w-auto px-16">
          <img className="w-full h-full" src={chatgpt} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeLogo;
