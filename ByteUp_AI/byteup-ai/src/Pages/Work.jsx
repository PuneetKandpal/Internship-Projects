import Navbar from "../Components/Navbar";
import WorkHero from "../Components/workHero";
import Marquee from "../Components/Marquee";

const Work = () => {
  return (
    <div>
      <Navbar />
      <WorkHero />
      <div className="mt-[-40px]">
        <Marquee />
      </div>
    </div>
  );
};

export default Work;
