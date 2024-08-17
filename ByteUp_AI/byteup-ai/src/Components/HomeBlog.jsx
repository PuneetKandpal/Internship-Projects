import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";

const HomeBlog = () => {
  const { theme } = useContext(ThemeContext);
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);

  const containerStyles =
    theme === "light" ? "bg-white text-gray-800" : "bg-black text-gray-100";

  const imageContainerStyles =
    theme === "light" ? "bg-white shadow-lg" : "bg-gray-800 shadow-xl";

  const buttonStyles =
    theme === "light"
      ? "border border-transparent bg-white text-black hover:text-white"
      : "border border-white text-white bg-black hover:bg-white hover:text-black";

  const descriptionColor =
    theme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.3)";

  return (
    <div>
      {/* Internal CSS */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Define width and height for image containers */
        .image-container {
          width: 710px;
          height: 380px;
          left: 11rem;
          bottom: 5rem;
        }

        .secondary-image-container {
          width: 600px;
          height: 350px;
          left: 1rem;
          top: 5rem;
        }

        /* Gradient border and background for button in light mode */
        .light-button-gradient {
          border-image: linear-gradient(to right, #a270c9, #637eb2) 1;
        }

        .light-button-gradient:hover {
          background: linear-gradient(to right, #a270c9, #637eb2);
        }
      `}</style>

      <div
        className={`min-h-screen p-8 md:p-16 flex items-center ${containerStyles}`}
      >
        <AnimatedCursor isHovered={isHeadingHovered} />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
          {/* Text Section */}
          <div className="w-full md:w-2/5 flex flex-col justify-center items-start pr-8 ">
            <h2
              className="text-sm uppercase mb-2 font-Syne leading-4 font-medium tracking-[.25em] text-gray-500"
              onMouseEnter={() => setIsHeadingHovered(true)}
              onMouseLeave={() => setIsHeadingHovered(false)}
            >
              BLOG LAYOUTS
            </h2>
            <h1
              className="text-5xl font-semibold mb-5 leading-tight font-Syne inline-block"
              onMouseEnter={() => setIsHeadingHovered(true)}
              onMouseLeave={() => setIsHeadingHovered(false)}
            >
              Tech Blog for <br />
              Your Latest IT <br />
              Updates
            </h1>
            <p
              className="mb-5 text-lg leading-relaxed font-Heebo"
              style={{ color: descriptionColor }}
            >
              Share the latest from the IT field with a set <br />
              of cutting-edge blog list layouts and <br />
              diverse post single types.
            </p>
            <div>
              <Link to="/blogs">
                <button
                  className={`text-sm uppercase font-Archivo tracking-[1.5px] font-light px-6 py-3 transition ease-in-out duration-200 ${buttonStyles} ${
                    theme === "light" ? "light-button-gradient" : ""
                  }`}
                >
                  view more
                </button>
              </Link>
            </div>
          </div>

          {/* Images Section */}
          <div className="relative w-full md:w-3/5 flex items-center justify-center mt-8 md:mt-0">
            {/* Main image positioned above, crossing to the right */}
            <div
              className={` ${imageContainerStyles} animate-float image-container relative`}
            >
              <img
                src="../src/assets/images/blog3.png"
                alt="Main blog post"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping image positioned lower, crossing to the left */}
            <div
              className={`absolute left-0 ${imageContainerStyles} animate-float secondary-image-container`}
            >
              <img
                src="../src/assets/images/blog4.png"
                alt="Secondary blog post"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
