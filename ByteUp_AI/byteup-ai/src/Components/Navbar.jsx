import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link, NavLink } from "react-router-dom";
import logoLight from '../assets/logo-light.svg';
import logoDark from '../assets/logo-dark.svg';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setScrolled(scrollPosition > viewportHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavStyles = () => {
    if (scrolled) {
      return theme === 'light' 
        ? "bg-white text-black py-3" 
        : "bg-black text-white py-3";
    } else {
      return "bg-gradient-to-b from-black/80 to-transparent text-white py-8";
    }
  };

  const getLinkStyles = () => {
    if (scrolled) {
      return theme === 'light'
        ? "text-black hover:text-gray-600"
        : "text-white hover:text-gray-300";
    } else {
      return "text-white hover:text-gray-300";
    }
  };

  return (
    <div
      className={`w-full px-12 fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-300 ${getNavStyles()}`}
    >
      <div className="font-Syne h-[55px] w-[210px] flex justify-center items-center object-cover">
        <img 
          className="object-cover h-[100%] w-[100%] mt-[-2px]" 
          src={scrolled ? (theme === 'light' ? logoDark : logoLight) : logoLight} 
          alt="Logo" 
        />
      </div>
      <ul className="flex items-center space-x-8 uppercase tracking-[2px] font-Archivo text-[13px] font-normal">
        <NavLink
          to="/"
          className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}
        >
          Services
        </NavLink>
        <NavLink
          to="/work"
          className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}
        >
          Work
        </NavLink>
        <NavLink
          to="/blogs"
          className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}
        >
          Blogs
        </NavLink>
        <Link className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}>
          About
        </Link>
        <Link className={`hover:opacity-70 transition-all duration-200 ${getLinkStyles()}`}>
          Contact
        </Link>
        <input
          onClick={toggleTheme}
          type="checkbox"
          className="theme-checkbox"
          checked={theme === 'dark'}
        />
      </ul>
    </div>
  );
};

export default Navbar;