import Navbar from "../Components/Navbar";
import ServiceHero from "../Components/ServiceHero";
import Marquee from "../Components/Marquee";

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServiceHero />
      <div className="mt-[-40px]">
      <Marquee />
      </div>
    </div>
  );
};

export default Services;
