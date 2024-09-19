import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";
import it from "../assets/images/insider_trade.png";
import ut from "../assets/images/uranium_tracker.png";

const projects = [
  {
    id: 1,
    title: "Uranium Tracker",
    category: "SaaS Development",
    image: ut,
    className: "col-span-1 row-span-1",
  },
  {
    id: 2,
    title: "Big Swinging Insiders",
    category: "SaaS Development",
    image: it,
    className: "col-span-1 row-span-2",
  },
  {
    id: 3,
    title: "FunDesk",
    category: "SaaS Development",
    image:
      "https://img.phemex.com/wp-content/uploads/2022/07/05015552/Linear-Regression-trading-signals.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Ecommerce Scraping",
    category: "SaaS Development",
    image:
      "https://www.promptcloud.com/wp-content/uploads/2023/09/Web-Scraping-425.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Stock Automation",
    category: "SaaS Development",
    image:
      "https://www.wiit.cloud/wp-content/uploads/2022/02/wiit-services-saas-process-automation-order-to-cash-slider.jpg",
    className: "col-span-1 row-span-1",
  },
];

const WorkShowcase = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container mx-auto p-8 md:px-[5.5rem] py-12 mt-[-2rem]">
      <AnimatedCursor isHovered={isHovered} />
      <h1
        onMouseEnter={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`font-Syne w-fit text-[30px] md:text-[40px] font-bold text-start mb-10 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Our Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative group bg-white ${project.className}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;
