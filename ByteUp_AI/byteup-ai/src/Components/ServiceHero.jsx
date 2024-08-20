import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import PrimaryBtn from "../Components/PrimaryBtn";

const ServiceHero = () => {
  const { theme } = useContext(ThemeContext);
  const backgroundUrl =
    "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjBjb21wYW55fGVufDB8fDB8fHww";

  return (
    <div
      className={`relative min-h-[72vh] w-full py-20 px-[5.5rem] flex flex-col justify-center text-left bg-cover bg-center ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 w-[60%]">
        <h1 className="text-5xl font-bold leading-10 mb-6">
          <span className="text-white font-Syne text-5xl">
            Elevate Your Business with Our Expert Services
          </span>
        </h1>
        <p
          className={`mb-9 font-normal text-[17px] leading-6 text-white/65 font-Archivo`}
        >
          From innovative solutions to hands-on support, we provide the
          expertise and tools you need to succeed in today's competitive market.
        </p>

        <Link>
          <PrimaryBtn btn="View Our Work" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceHero;
