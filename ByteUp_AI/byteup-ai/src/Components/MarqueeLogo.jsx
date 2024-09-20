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
        {/* Logo 1 */}
        <div className="w-auto px-6 md:px-12 md:h-[4.5rem] h-[3.5rem] flex-shrink-0">
          <img
            className="w-full h-full object-contain max-w-full max-h-full"
            src={python}
            alt="Python Logo"
          />
        </div>

        {/* Logo 2 */}
        <div className="w-auto px-6 md:px-12 md:h-[6.5rem] h-[5rem] flex-shrink-0">
          <img
            className="w-full h-full object-contain max-w-full max-h-full"
            src={django}
            alt="Django Logo"
          />
        </div>

        {/* Logo 3 */}
        <div className="w-auto px-6 md:px-12 md:h-[7rem] h-[6rem] flex-shrink-0">
          <img
            className="w-full h-full object-contain max-w-full max-h-full"
            src={flask}
            alt="Flask Logo"
          />
        </div>

        {/* Logo 4 */}
        <div className="mt-[-20px] w-auto px-6 md:px-12 md:h-[7rem] h-[6rem] flex-shrink-0">
          <img
            className="w-full h-full object-contain max-w-full max-h-full"
            src={gemini}
            alt="Gemini Logo"
          />
        </div>

        {/* Logo 5 */}
        <div className="w-auto px-8 md:h-[7.5rem] h-[6rem] flex-shrink-0">
          <img
            className="w-full h-full object-contain max-w-full max-h-full"
            src={langchain}
            alt="LangChain Logo"
          />
        </div>

        {/* Logo 6 */}
        <div className="w-auto px-6 md:px-12 md:h-16 h-14 flex-shrink-0">
          <img
            className="w-full h-full object-contain max-w-full max-h-full"
            src={mistral}
            alt="Mistral Logo"
          />
        </div>

        {/* Logo 7 */}
        <div className="w-auto ml-5 px-6 md:px-12 md:h-[3.8rem] h-[3rem] flex-shrink-0">
          <img
            className="w-full h-full object-contain max-w-full max-h-full"
            src={selenium}
            alt="Selenium Logo"
          />
        </div>

        {/* Logo 8 */}
        <div className="w-auto px-8 md:px-16 md:h-[4.2rem] h-[3.5rem] flex-shrink-0">
          <img
            className="w-full h-full object-contain max-w-full max-h-full"
            src={chatgpt}
            alt="ChatGPT Logo"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeLogo;
