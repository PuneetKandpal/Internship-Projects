import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full px-20 py-14 mt-[10rem]   ${
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
              <Link
                className={`transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/work"
              >
                Work
              </Link>
              <Link
                className={` transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Services
              </Link>
              <Link
                className={` transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/blogs"
              >
                Blog
              </Link>
              <Link
                className={` transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/about"
              >
                About Us
              </Link>
              <Link
                className={` transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/contact"
              >
                Contact Us
              </Link>
            </ul>
          </div>
          <div className="w-[28%] h-full ">
            <h3 className="font-Syne uppercase">Services</h3>
            <ul
              className={`mt-6 flex flex-col gap-y-[5px] text-[15.5px] font-normal list-none ${
                theme === "light" ? "text-white/45" : "text-black/55"
              }`}
            >
              <Link
                className={` transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Generative AI
              </Link>
              <Link
                className={` transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Web Scrapping
              </Link>
              <Link
                className={` transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Automation
              </Link>
              <Link
                className={` transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                Python API development
              </Link>
              <Link
                className={` transition ease-linear duration-200 w-fit ${
                  theme === "light"
                    ? "hover:text-white/70"
                    : "hover:text-black/90"
                }`}
                to="/services"
              >
                SaaS Development
              </Link>
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
              </a>{" "}
            </ul>
          </div>
        </div>
      </div>

      {/* line---------  */}
      <div
        className={`mt-16 h-[0.5px] ${
          theme === "light" ? "bg-white/25" : "bg-black/20"
        }`}
      ></div>

      <div className=" mt-5 w-full py-1 flex justify-between">
        <p
          className={`text-[14px] font-medium ${
            theme === "light" ? "text-white/40" : "text-black/40"
          }`}
        >
          2024 © ByteUp AI | All Rights Reserved
        </p>
        <p
          className={`text-[14px] font-medium ${
            theme === "light" ? "text-white/40" : "text-black/40"
          }`}
        >
          Terms Conditions & Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
