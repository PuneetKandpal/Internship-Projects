import { useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom", // animation starts when the top of the footer hits the bottom of the viewport
          end: "bottom bottom", // animation ends when the bottom of the footer hits the bottom of the viewport
          toggleActions: "play none none reverse", // play animation on enter, reverse on leave
        },
      }
    );
  }, []);

  return (
    <div
      ref={footerRef}
      className={`w-full px-20 py-14 mt-[20rem] ${
        theme === "light" ? "bg-black text-white/90" : "bg-white text-black/90"
      }`}
    >
      <div className="flex justify-between items-center ">
        <div className="w-[30%] h-full">
          <div className="w-1/2 h-[3rem] ml-[-35px]">
            <img
              className="w-full h-full object-cover"
              src={`${theme === "light" ? logoLight : logoDark}`}
              alt=""
            />
          </div>
          <div className="pl-0 mt-2">
            <p className="text-[15px] opacity-80">
              123 Fake Street Anytown, CA 12345 <br /> United States
            </p>
            <p
              className={`flex items-center text-[15.5px] mt-14 font-normal ${
                theme === "light" ? "text-white/60" : "text-black/60"
              }`}
            >
              <MdEmail /> <span className="ml-3">info@byteupai.com</span>
            </p>
            <p
              className={`flex items-center text-[15.5px] mt-2 font-normal ${
                theme === "light" ? "text-white/60" : "text-black/60"
              }`}
            >
              <FaPhone className="text-[12.5px] ml-[1.5px]" />{" "}
              <span className="ml-3">(888) 919 349 829</span>
            </p>
          </div>
        </div>

        <div className="w-[46%] h-full flex flex-wrap justify-between items-start">
          <div className="w-[25%] h-full ">
            <h3 className="font-Syne uppercase">Company</h3>
            <ul
              className={`mt-6 flex flex-col gap-y-[5px] text-[15.5px] font-normal list-none ${
                theme === "light" ? "text-white/45" : "text-black/55"
              }`}
            >
              <NavLink
                className={`hover:text-white/70 transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/work"
              >
                Work
              </NavLink>
              <NavLink
                className={`hover:text-white/70 transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className={`hover:text-white/70 transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/blogs"
              >
                Blog
              </NavLink>
              <NavLink
                className={`hover:text-white/70 transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                className={`hover:text-white/70 transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/contact"
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <div className="w-[28%] h-full ">
            <h3 className="font-Syne uppercase">Services</h3>
            <ul
              className={`mt-6 flex flex-col gap-y-[5px] text-[15.5px] font-normal list-none ${
                theme === "light" ? "text-white/45" : "text-black/55"
              }`}
            >
              <NavLink
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Generative AI
              </NavLink>
              <NavLink
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Web Scrapping
              </NavLink>
              <NavLink
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Automation
              </NavLink>
              <NavLink
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Python API development
              </NavLink>
              <NavLink
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                SaaS Development
              </NavLink>
            </ul>
          </div>
          <div className="w-[20%] h-full ">
            <h3 className="font-Syne uppercase">Get in touch</h3>
            <ul
              className={`mt-6 flex flex-col gap-y-[5px] text-[15.5px] font-normal list-none ${
                theme === "light" ? "text-white/45" : "text-black/55"
              }`}
            >
              <a
                className={`transition ease-linear duration-200 w-fit flex items-center space-x-3 ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                href="#"
              >
                <FaLinkedin
                  className={`text-[19px] ml-[1px] ${
                    theme === "light" ? "text-white/70" : "text-black/80"
                  } `}
                />{" "}
                <span>LinkedIn</span>
              </a>{" "}
              <a
                className={`transition ease-linear duration-200 w-fit flex items-center space-x-3 ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                } mt-[5px]`}
                href="#"
              >
                <FaTwitter
                  className={`text-[18px] ml-[1px]] ${
                    theme === "light" ? "text-white/70" : "text-black/80"
                  }`}
                />{" "}
                <span>Twitter</span>
              </a>{" "}
              <a
                className={`transition ease-linear duration-200 w-fit flex items-center space-x-3 ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                } mt-[5px]`}
                href="#"
              >
                <AiFillInstagram
                  className={`text-[20px] ml-[1px]] ${
                    theme === "light" ? "text-white/70" : "text-black/80"
                  }`}
                />{" "}
                <span>Instagram</span>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-10">
        <div className="opacity-80 text-[15px]">
          Copyright © 2024 - ByteUpAI
        </div>
      </div>
    </div>
  );
};

export default Footer;
