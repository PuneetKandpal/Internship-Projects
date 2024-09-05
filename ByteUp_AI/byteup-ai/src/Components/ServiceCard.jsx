import { useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { services } from "../servicesData";
import { Link } from "react-router-dom";
import SecondaryBtn from "./SecondaryBtn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    // Animate the cards when they scroll into view
    gsap.utils.toArray(".service-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div>
      {services.map((s, i) => (
        <div
          key={i}
          className={`service-card w-full h-[50vh] mt-10 mb-36 px-[5.5rem] mx-auto flex justify-between flex-col md:flex-row items-center overflow-hidden ${
            theme === "light" ? "bg-white text-black" : "bg-black text-white"
          } ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
        >
          {/* Left Div - Service Info */}
          <div className="w-full md:w-[42%] p-6">
            <h3 className="text-[26px] font-Syne font-semibold mb-4">
              {s.name}
            </h3>
            <p
              className={`mb-4 text-[17px] font-normal leading-6 ${
                theme === "light" ? " text-black/50" : " text-white/40"
              } font-Archivo`}
            >
              {s.description}
            </p>
            <ul className="mb-5 space-y-2">
              <li className="flex flex-col items-start">
                <h2
                  className={`animate-heading text-[12px] uppercase font-Syne leading-4 ml-1 tracking-[.03em] ${
                    theme === "light"
                      ? "text-gradient-css opacity-90 font-normal"
                      : "text-gradient-css font-medium"
                  }`}
                >
                  Worked on
                </h2>{" "}
                <p
                  className={`ml-0 text-2xl font-bold ${
                    theme === "light" ? "text-black/45" : "text-white/45"
                  }`}
                >
                  {s.estimatedTime} mins
                </p>
              </li>
            </ul>
            <Link to="/book">
              <SecondaryBtn btn="Book a Call" />
            </Link>
          </div>

          {/* Right Div - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={s.image}
              alt={s.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
