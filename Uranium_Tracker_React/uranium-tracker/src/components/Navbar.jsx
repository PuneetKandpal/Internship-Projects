import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);

  // GSAP animation for navbar on page load
  useEffect(() => {
    gsap.from("nav", { opacity: 0, duration: 1, ease: "power2.out" });
  }, []);

  // Function to toggle the menu
  const toggleMenu = () => {
    const menu = menuRef.current;
    const isHidden = menu.classList.contains("hidden");

    if (isHidden) {
      gsap.fromTo(
        menu,
        { height: 0 },
        { height: "100vh", duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.fromTo(
        menu,
        { height: "100vh" },
        {
          height: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => menu.classList.add("hidden"),
        }
      );
    }

    menu.classList.toggle("hidden", !isHidden);
    setIsMenuOpen(!isHidden);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuToggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        menuRef.current.classList.add("hidden");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Handle window resize to adjust menu visibility
  useEffect(() => {
    const handleResize = () => {
      const menu = menuRef.current;
      if (window.innerWidth >= 768) {
        menu.classList.remove("hidden");
        setIsMenuOpen(false);
      } else if (!isMenuOpen) {
        menu.classList.add("hidden");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] bg-black1 py-6 px-4 md:px-12 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <a href="home.html">
        <h1 className="play font-semibold text-white frank text-[22px] md:text-2xl flex items-center">
          <i className="ri-compass-fill text-[15px] md:text-[19px] text-black1 bg-lime1 flex justify-center items-center pt-[2px] w-6 h-6 md:w-7 md:h-7 rounded-full mr-2"></i>
          UraniumTracker
        </h1>
      </a>

      {/* Hamburger menu for mobile */}
      <button
        id="menu-toggle"
        ref={menuToggleRef}
        className="md:hidden text-white text-2xl"
        onClick={toggleMenu}
      >
        <i className={isMenuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
      </button>

      {/* Links */}
      <div
        id="menu"
        ref={menuRef}
        className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-7 absolute md:relative top-full left-0 right-0 bg-black1 md:bg-transparent pb-4 md:pb-0 shadow-md md:shadow-none w-full md:w-auto"
      >
        <ul className="lato text-white tracking-wide capitalize text-[16.2px] pl-10 md:pl-0 mb-4 md:mb-0 font-light flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-5 w-full md:w-auto">
          <NavLink
            to="/"
            className="hover:text-lime2 transition-all duration-300 block py-2 px-4 md:p-0"
          >
            Home
          </NavLink>
          <NavLink
            to="/news"
            className="hover:text-lime2 transition-all duration-300 block py-2 px-4 md:p-0"
          >
            News
          </NavLink>

          <NavLink
            to="/investments"
            className="hover:text-lime2 transition-all duration-300 block py-2 px-4 md:p-0"
          >
            Uranium Investments
          </NavLink>
          <NavLink
            to="/essentials"
            className="hover:text-lime2 transition-all duration-300 block py-2 px-4 md:p-0"
          >
            Uranium Essentials
          </NavLink>
          <NavLink
            to="/forum"
            className="hover:text-lime2 transition-all duration-300 block py-2 px-4 md:p-0"
          >
            Forum
          </NavLink>
          <NavLink
            to="/nuclear"
            className="hover:text-lime2 transition-all duration-300 block py-2 px-4 md:p-0"
          >
            Nuclear
          </NavLink>
          <NavLink
            to="/calender"
            className="hover:text-lime2 transition-all duration-300 block py-2 px-4 md:p-0"
          >
            Calender
          </NavLink>
        </ul>

        <NavLink
          to="/signup"
          className="bg-lime1 text-[15px] text-black font-semibold ml-14 md:ml-0 px-3 py-1 hover:bg-lime2 hover:text-black1 transition-all duration-300 w-full md:w-auto text-center"
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
