import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedAtom from "./AnimatedAtom";

const EssentialSubHero = ({ heading, subheading }) => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for the heading and subheading
    gsap.from(".hero-heading", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
        end: "top 60%",
      },
    });

    gsap.from(".hero-subheading", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      delay: 0.3, // Delay the subheading animation slightly
      scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
        end: "top 60%",
      },
    });

    // Optionally, animate the AnimatedAtom component
    gsap.from(".animated-atom", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
        end: "top 60%",
      },
    });
  }, []);

  return (
    <div className="hero px-6 md:px-20 py-10 md:pt-20 flex flex-col md:flex-row justify-between items-center mt-10">
      <div className="w-full md:w-[57%]">
        <h1 className="frank text-2xl md:text-5xl font-bold text-lime2 hero-heading">
          {heading}
        </h1>
        <p className="mt-5 font-normal text-white/60 text-[16px] md:text-[17px] hero-subheading">
          {subheading}
        </p>
      </div>

      {/* Apply a class to AnimatedAtom for GSAP targeting */}
      <div className="animated-atom">
        <AnimatedAtom />
      </div>
    </div>
  );
};

export default EssentialSubHero;
