import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { services } from "../servicesData";
import { Link } from "react-router-dom";
import SecondaryBtn from "./SecondaryBtn";

const ServiceCard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {services.map((s, i) => (
        <div
          key={i}
          className={`w-full h-[50vh] mt-10 mb-36 px-[5.5rem] mx-auto flex justify-between flex-col md:flex-row items-center overflow-hidden ${
            theme === "light" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {/* Left Div - Service Info */}
          <div className="w-full md:w-[42%] p-6">
            <h3 className="text-[26px] font-Syne font-semibold mb-4">
              {s.name}
            </h3>
            <p
              className={`mb-6 text-[17px] font-normal leading-6 ${
                theme === "light" ? " text-black/50" : " text-white/40"
              } font-Archivo`}
            >
              {s.description}
            </p>
            <ul className="mb-6 space-y-2">
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
                    theme === "light" ? "text-black/50" : "text-white/45"
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
