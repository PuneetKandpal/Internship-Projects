import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import shivProfile from "../assets/images/teamImages/shiv-profile.png";
import ankitProfile from "../assets/images/teamImages/ankit-profile.jpg";
import akshayProfile from "../assets/images/teamImages/akshay-profile.jpg";
// import akshayProfile2 from "../assets/images/teamImages/akshay-profile2.png";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const teamMembers = [
    {
      name: "Akshay Vayak",
      position: "Founder",
      linkedin: "https://in.linkedin.com/in/akshay-vayak",
      twitter: "#",
      image: akshayProfile,
    },
    {
      name: "Shivam Rishinarayan",
      position: "Co-founder",
      linkedin: "https://www.linkedin.com/in/srs0518/",
      twitter: "https://x.com/S_RISHINARAYAN",
      image: shivProfile,
    },
    {
      name: "Archit Mittal",
      position: "Co-founder",
      linkedin: "https://www.linkedin.com/in/archit-mittal-analyst/",
      twitter: "#",
      image: ankitProfile,
    },
  ];

  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    gsap.fromTo(
      sectionEl.querySelectorAll(".team-member"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full py-10 px-6 md:px-[5.4rem] mt-20 md:mt-52 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <AnimatedCursor isHovered={isHovered} />
      <h1
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className="font-Syne w-fit text-3xl md:text-[40px] font-bold text-start"
      >
        Our Team
      </h1>

      {/* Responsive Flexbox Adjustment */}
      <div className="flex flex-wrap justify-between mt-10 gap-6">
        {teamMembers.map((person, i) => (
          <div
            key={i}
            className="team-member w-full sm:w-[45%] md:w-[30%] h-[400px] md:h-[560px] relative opacity-0"
          >
            <div className="w-full h-[80%] relative overflow-hidden group">
              <img
                src={person.image}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                alt={person.name}
              />
              <div
                className={`absolute inset-0 ${
                  theme === "light" ? "bg-white" : "bg-black"
                } bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex space-x-5 justify-center items-center`}
              >
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[14px] font-Archivo font-normal uppercase tracking-[1.9px] transition-transform duration-500 ease-in-out transform translate-y-8 group-hover:translate-y-0 ${
                    theme === "light"
                      ? "hover:text-black/60 text-black"
                      : "hover:text-white/60 text-white"
                  }`}
                >
                  LinkedIn
                </a>
                {/* <a
                  href={person.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[14px] font-Archivo font-normal uppercase tracking-[1.9px] transition-transform duration-500 ease-in-out transform translate-y-8 group-hover:translate-y-0 ${
                    theme === "light"
                      ? "hover:text-black/60 text-black"
                      : "hover:text-white/60 text-white"
                  }`}
                >
                  Twitter
                </a> */}
              </div>
            </div>
            <h1 className="text-center font-Syne text-[24px] md:text-[26px] font-semibold mt-4">
              {person.name}
            </h1>
            <p
              className={`text-center font-Archivo text-sm font-semibold uppercase mt-0 tracking-[1.4px] ${
                theme === "light" ? "text-black/40" : "text-white/40"
              }`}
            >
              {person.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
