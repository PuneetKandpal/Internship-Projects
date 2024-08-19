import React, { useEffect, useRef, useContext } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ReachOutSection = () => {
  const { theme } = useContext(ThemeContext);

  // Refs for animation targets
  const emailRef = useRef(null);
  const locationRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    // Ensure the refs are not null
    if (emailRef.current && locationRef.current && phoneRef.current) {
      const tl = gsap.timeline({
        defaults: { duration: 1.2, opacity: 0, y: 20, ease: "power3.out" },
        scrollTrigger: {
          trigger: ".reach-out-section",
          start: "top 80%",
          end: "bottom top",
          // markers: true, // Uncomment for debugging
          // scrub: 1,
        },
      });

      tl.from(emailRef.current, { opacity: 0, y: 20 })
        .from(locationRef.current, { opacity: 0, y: 20 }, "-=0.8")
        .from(phoneRef.current, { opacity: 0, y: 20 }, "-=0.8");
    }
  }, []);

  return (
    <div
      className={`p-8 px-[5.5rem] ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } reach-out-section`}
    >
      <h2
        className={`font-semibold text-md mb-2 pb-2 inline-block font-Archivo ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Reach Out To Us
      </h2>
      <h3 className="text-left text-2xl font-bold mb-4 font-Syne">
        We’d Love to Hear From You.
      </h3>
      <p
        className={`text-left mb-8 font-Archivo ${
          theme === "light" ? "text-gray-600" : "text-gray-300"
        }`}
      >
        Or just reach out manually to{" "}
        <a href="mailto:hello@slothui.com" className="text-[#9f7cbe]">
          info@byteupai.com
        </a>
        .
      </p>
      <div className="flex flex-col md:flex-row gap-8 items-start font-Archivo mt-14">
        <div ref={emailRef} className="text-left md:mb-0 flex-1">
          <div
            className={`bg-gradient-to-r from-[#a270c9] to-[#637eb2] p-2 rounded-full inline-block mb-2 hover:opacity-80 transition-all duration-200`}
          >
            <MdEmail className="text-white text-xl" />
          </div>
          <h4 className="font-semibold mb-2">Email Support</h4>
          <p
            className={`mb-3 ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Our team can respond in real time.
          </p>
          <a href="mailto:hello@slothui.com" className="text-[#9f7cbe]">
            info@byteupai.com
          </a>
        </div>
        <div ref={locationRef} className="text-left md:mb-0 flex-1">
          <div
            className={`bg-gradient-to-r from-[#a270c9] to-[#637eb2] p-2 rounded-full inline-block mb-2 hover:opacity-80 transition-all duration-200`}
          >
            <MdLocationOn className="text-white text-xl" />
          </div>
          <h4 className="font-semibold mb-2">Visit Our Office</h4>
          <p
            className={`mb-3 ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Visit our location in real life.
          </p>
          <a href="#" className="text-[#9f7cbe]">
            221b Elementary Avenue, NY
          </a>
        </div>
        <div ref={phoneRef} className="text-left flex-1">
          <div
            className={`bg-gradient-to-r from-[#a270c9] to-[#637eb2] p-2 rounded-full inline-block mb-2 hover:opacity-80 transition-all duration-200`}
          >
            <MdPhone className="text-white text-xl" />
          </div>
          <h4 className="font-semibold mb-2">Call Us Directly</h4>
          <p
            className={`mb-3 ${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Available during working hours.
          </p>
          <a href="tel:+1234-567-789" className="text-[#9f7cbe]">
            (888) 919 349 829
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReachOutSection;
