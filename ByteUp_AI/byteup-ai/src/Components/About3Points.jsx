import { useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About3Points = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    gsap.from(".about-section", {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      //   stagger: 0.3,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        end: "bottom top",
        // markers: true,
        // scrub: 1,
      },
    });
  }, []);

  return (
    <div className="w-full px-[5.5rem] py-40 flex justify-between items-center">
      <div className={`w-[28%] about-section`}>
        <h2
          className={`animate-heading mb-1 text-[13px] uppercase font-Syne leading-4 font-normal tracking-[.20em] ${
            theme === "light" ? "text-gradient-css opacity-90" : "text-white/30"
          }`}
        >
          Our Vision
        </h2>
        <p
          className={`text-[26px] mb-4 font-semibold font-Syne transition ease-in duration-200`}
        >
          Empowering Future Growth
        </p>
        <p
          className={`text-[14px] mt-2 font-light tracking-[0.7px] font-Heebo ${
            theme === "light" ? "text-black/70 " : "text-white/30 "
          }`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          eveniet reprehenderit eligendi autem repellat impedit fugiat sit amet
          consectetur adipisicing elit. sit amet consectetur
        </p>
      </div>

      <div className={`w-[28%] about-section`}>
        <h2
          className={`animate-heading mb-1 text-[13px] uppercase font-Syne leading-4 font-normal tracking-[.20em] ${
            theme === "light" ? "text-gradient-css opacity-90" : "text-white/30"
          }`}
        >
          Our Values
        </h2>
        <p
          className={`text-[26px] mb-4 font-semibold font-Syne transition ease-in duration-200`}
        >
          Integrity, Innovation, Impact
        </p>
        <p
          className={`text-[14px] mt-2 font-light tracking-[0.7px] font-Heebo ${
            theme === "light" ? "text-black/70 " : "text-white/30 "
          }`}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          eveniet reprehenderit eli impedit fugiat , sit amet consectetur
          adipisicing elit. sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className={`w-[28%] about-section`}>
        <h2
          className={`animate-heading mb-1 text-[13px] uppercase font-Syne leading-4 font-normal tracking-[.20em] ${
            theme === "light" ? "text-gradient-css opacity-90" : "text-white/30"
          }`}
        >
          Our Commitment
        </h2>
        <p
          className={`text-[26px] mb-4 font-semibold font-Syne transition ease-in duration-200`}
        >
          Dedicated to Excellence
        </p>
        <p
          className={`text-[14px] mt-2 font-light tracking-[0.7px] font-Heebo ${
            theme === "light" ? "text-black/70 " : "text-white/30 "
          }`}
        >
          Lorem ipsum dolor, adipisicing elit. Aperiam dipisicing elit. Aperia
          eveniet reprehenderit eligendi autem repellat impedit fugiat sit amet
          consectetur adipisicing elit. asto diffey wueying
        </p>
      </div>
    </div>
  );
};

export default About3Points;
