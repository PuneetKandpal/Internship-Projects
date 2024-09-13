import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PriceChart from "./PriceChart"; // Import the PriceChart component
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HomePriceChart = () => {
  useEffect(() => {
    gsap.from(".hero-uranium-info", {
      scrollTrigger: {
        trigger: ".uranium-section",
        start: "top 80%", // Adjust start point
        toggleActions: "play none none none",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".uranium-heading", {
      scrollTrigger: {
        trigger: ".uranium-section",
        start: "top 90%", // Adjust start point
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2,
    });
  }, []);

  return (
    <div className="pb-32 pt-10 flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 uranium-section overflow-hidden">
      {/* Uranium Prices Section */}
      <PriceChart /> {/* Include PriceChart Component */}
      {/* Uranium Info Section */}
      <div className="w-full mt-4 lg:mt-0 lg:w-[45%] hero-uranium-info">
        <h1 className="mt-[-6px] w-full lg:w-[80%] text-bg frank leading-[45px] sm:leading-[57px] text-[2rem] sm:text-[3rem] text-white font-medium mb-7 uranium-heading">
          Invest in the energy of the future
        </h1>
        <p className="text-white/70 font-light text-[15px] sm:text-[17.5px] lato mb-11">
          Uranium is at the heart of the clean energy transition. With rising
          global demand and constrained supply, it's a unique opportunity to
          invest in a resource that will power the planet for generations to
          come! As countries around the world commit to reducing carbon
          emissions and transitioning away from fossil fuels, nuclear energy,
          powered by uranium, is emerging as a key player in the global energy
          mix.
        </p>
        <NavLink
          to="/investments"
          className="bg-lime1 text-black text-[14px] sm:text-[15px] px-4 sm:px-7 py-2 sm:py-3 lato font-semibold hover:bg-lime2 transition-all"
        >
          Know More
        </NavLink>
      </div>
    </div>
  );
};

export default HomePriceChart;
