import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full py-8 px-12 fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent text-white flex justify-between items-center`}
    >
      <div className="font-Syne h-[55px] w-[210px]  flex justify-center items-center object-cover"><img className="object-cover h-[100%] w-[100%] mt-[-2px]" src={logo} alt="" /></div>
      <ul className="flex items-center space-x-8 uppercase tracking-[2px] font-Archivo text-[13px] font-normal">
        <NavLink
          to="/"
          className="hover:text-white/70 hover:transition-all duration-200"
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className="hover:text-white/70 hover:transition-all duration-200"
        >
          Services
        </NavLink>
        <NavLink
          to="/work"
          className="hover:text-white/70 hover:transition-all duration-200"
        >
          Work
        </NavLink>
        <NavLink
          to="/blogs"
          className="hover:text-white/70 hover:transition-all duration-200"
        >
          Blogs
        </NavLink>
        <Link className="hover:text-white/70 hover:transition-all duration-200">
          About
        </Link>
        <Link className="hover:text-white/70 hover:transition-all duration-200">
          Contact
        </Link>
        <input
          onClick={toggleTheme}
          type="checkbox"
          className="theme-checkbox"
        />
      </ul>
    </div>
  );
};

export default Navbar;
