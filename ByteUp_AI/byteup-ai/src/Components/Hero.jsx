import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import "../../src/index.css";
import PrimaryBtn from "./PrimaryBtn";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScaled, setIsScaled] = useState(false);

  const slides = [
    {
      image:
        "url('https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      text: "New Generation of Technology and Design",
    },
    {
      image:
        "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      text: "Software & Tech Development for the Future",
    },
  ];

  const handleNext = () => {
    setIsScaled(false); // Reset scale before changing slide
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 200); // Adjust timing if necessary
  };

  const handlePrev = () => {
    setIsScaled(false); // Reset scale before changing slide
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, 200); // Adjust timing if necessary
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    setIsScaled(false);
    setTimeout(() => {
      setIsScaled(true);
    }, 50); // Small delay to ensure the transition is visible
  }, [currentSlide]);

  return (
    <div
      className={`relative w-full h-[100vh] overflow-hidden transition-opacity duration-1000 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } ${isScaled ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center transform transition-transform duration-[60s] ease-out ${
          isScaled ? "scale-150" : "scale-100"
        }`}
        style={{
          backgroundImage: slides[currentSlide].image,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-transparent"></div>

      <div className="absolute inset-0 w-[45%] ml-56 flex flex-col items-start justify-center">
        <h1 className="text-[2rem]  font-Syne text-white md:text-6xl font-bold text-start">
          {slides[currentSlide].text}
        </h1>
        <div className="mt-10">
          <Link to="/services">
            <PrimaryBtn btn="Get Started" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 flex space-x-4">
        <button
          onClick={handlePrev}
          className="bg-white/15 text-white w-10 h-10 rounded-full hover:bg-gradient-to-r from-purple to-sky transition duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="bg-white/15 text-white w-10 h-10 rounded-full hover:bg-gradient-to-r from-purple to-sky transition duration-300"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Hero;
