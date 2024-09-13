import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../assets/essentials.jpg";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const EssentialsHero = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const bgImageRef = useRef(null); // Reference for the background image

  useEffect(() => {
    // Scroll animation for the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Animation starts when the top of the container hits the center of the viewport
        toggleActions: "play none none reverse", // Play the animation forward on enter, and reverse it on leave
      },
    });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        paragraphRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.5"
      ) // Overlap the animations slightly
      .from(
        bgImageRef.current,
        {
          scale: 1.2, // Start slightly scaled up
          duration: 1,
          ease: "power3.out",
        },
        "-=1"
      ); // Background image scale animation overlapping with content

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-fit py-10 overflow-hidden mt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          ref={bgImageRef} // Add the reference here for GSAP to target
          className="w-full h-full object-cover opacity-90"
          src={bg}
          alt="Essentials background"
          style={{ transition: "none" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black1/80 via-black1/90 to-black1/45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex justify-between flex-wrap h-full lg:p-[5.8rem] md:p-[4rem] sm:p-[2.7rem] p-[2rem]">
        <div className="lg:w-[70%] md:w-[90%] w-[90%]">
          <h2
            ref={headingRef}
            className="custom-heading frank text-[0.6rem] sm:text-[0.8rem] md:text-[0.9rem] font-semibold bg-lime2 text-black inline-block px-3 py-[2px] uppercase"
          >
            Understanding Uranium
          </h2>
          <p
            ref={paragraphRef}
            className="custom-paragraph frank leading-[40px] sm:leading-[57px] md:text-[2rem] text-[1.4rem] sm:text-[1.7rem] lg:text-[45px] text-white font-medium mt-3"
          >
            Explore the Latest Insights, Market Data, and Key Information on
            Uranium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EssentialsHero;
