import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Marquee from "react-fast-marquee";

const MarqueeDiv = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div className={`py-24 select-none ${theme=== 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <Marquee speed={100} gradient={true} gradientColor={`${theme === 'light' ? 'white' : 'black'}`} className="flex space-x-0 overflow-y-hidden">
        <h1 className={`text-6xl font-bold font-Syne pr-16`}>Generative AI</h1>
        <h1 className={`text-6xl font-bold font-Syne pr-16`}>Web scrapping</h1>
        <h1 className={`text-6xl font-bold font-Syne pr-16`}>Automation</h1>
        <h1 className={`text-6xl font-bold font-Syne pr-16`}>Python API Development</h1>
        <h1 className={`text-6xl font-bold font-Syne pr-16`}>SaaS Development</h1>
      </Marquee>
    </div>
  );
};

export default MarqueeDiv;

{
  /* <h1>Generative AI</h1>
        <h1>Web scrapping</h1>
        <h1>Automation</h1>
        <h1>Python API Development</h1>
        <h1>SaaS Development</h1> */
}
