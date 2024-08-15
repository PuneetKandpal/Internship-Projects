import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full py-6 px-8 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } flex justify-between`}
    >
      <h1 className="font-Syne text-2xl font-bold">ByteUp AI</h1>
      <ul className="flex items-center space-x-6 uppercase font-Heebo text-sm font-medium">
        <NavLink
          to="/"
          className={`${
            theme === "light" ? ` hover:text-black/70` : " hover:text-white/70"
          } hover:transition-all duration-200`}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={`${
            theme === "light" ? ` hover:text-black/70` : " hover:text-white/70"
          } hover:transition-all duration-200`}
        >
          Services
        </NavLink>
        <NavLink
          to="/work"
          className={`${
            theme === "light" ? ` hover:text-black/70` : " hover:text-white/70"
          } hover:transition-all duration-200`}
        >
          Work
        </NavLink>
        <NavLink
          to="/blogs"
          className={`${
            theme === "light" ? ` hover:text-black/70` : " hover:text-white/70"
          } hover:transition-all duration-200`}
        >
          Blogs
        </NavLink>
        <Link
          className={`${
            theme === "light" ? ` hover:text-black/70` : " hover:text-white/70"
          } hover:transition-all duration-200`}
        >
          About
        </Link>
        <Link
          className={`${
            theme === "light" ? ` hover:text-black/70` : " hover:text-white/70"
          } hover:transition-all duration-200`}
        >
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
