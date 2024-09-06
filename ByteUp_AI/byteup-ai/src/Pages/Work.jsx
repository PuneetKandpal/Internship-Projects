import MarqueeLogo from "../Components/MarqueeLogo";
import Navbar from "../Components/Navbar";
import WorkHero from "../Components/workHero";

const Work = () => {
  return (
    <div>
      <Navbar />
      <WorkHero />
      <div className="mt-[-10px]">
        <MarqueeLogo />
      </div>
    </div>
  );
};

export default Work;
