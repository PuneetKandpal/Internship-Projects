import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full py-6 px-8 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } flex justify-between`}
    >
      <h1 className="font-Syne text-2xl font-bold">ByteUp AI</h1>
      <ul className="flex items-center space-x-6 uppercase font-Heebo text-sm">
        <li className="hover:text-red-700">Home</li>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/work">Work</NavLink>
        <li>Blogs</li>
        <li>About</li>
        <li>Contact</li>
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
