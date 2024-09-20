import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";
import it from "../assets/images/insider_trade.png";
import ut from "../assets/images/uranium_tracker.png";
import fundesk from "../assets/images/Fundesk.png";

const projects = [
  {
    id: 1,
    title: "Uranium Tracker",
    category: "SaaS Development",
    image: ut,
    className: "col-span-1 row-span-1",
    link: "https://ut-react.netlify.app/", // Add your project URL here
    description: `A comprehensive platform offering real-time news, stock trends,
                and analysis of the uranium industry. It serves as a hub for
                professionals, investors, and enthusiasts to stay informed and
                make data-driven investment decisions.`,
  },
  {
    id: 2,
    title: "Big Swinging Insiders",
    category: "SaaS Development",
    image: it,
    className: "col-span-1 row-span-2",
    link: "https://it-v.netlify.app/",
    description: `Big Swinging Insiders is a powerful platform developed by Byteup AI, designed to give investors and financial professionals access to real-time insider transaction data across multiple major stock exchanges. By offering in-depth insights into company activities, insider buying and selling, and stock movements, the platform empowers users to make more informed investment decisions based on insider trading trends.`,
  },
  {
    id: 3,
    title: "FunDesk",
    category: "SaaS Development",
    image: fundesk,
    className: "col-span-1 row-span-1",
    link: "https://www.fundesk.io",
    description: `Fundesk is a platform offering a unique blend of content and entertainment. The platform features a fully developed blog site alongside an engaging game, creating an interactive space where users can both learn and have fun. Fundesk is designed to cater to a wide range of audiences, offering insightful blog articles on various topics, as well as a fun gaming experience to keep users entertained.`,
  },
  {
    id: 4,
    title: "Ecommerce Scraping",
    category: "Web Scrapping",
    image:
      "https://www.promptcloud.com/wp-content/uploads/2023/09/Web-Scraping-425.jpg",
    className: "col-span-1 row-span-1",
    link: "",
    description: `Our eCommerce Scraping Project is a comprehensive data extraction tool designed to gather vital information from major eCommerce platforms. This project enables businesses and analysts to gain deep insights into product trends, pricing strategies, and market competition by collecting and analyzing vast amounts of data efficiently.`,
  },
  {
    id: 5,
    title: "Stock Automation",
    category: "Automation",
    image:
      "https://www.wiit.cloud/wp-content/uploads/2022/02/wiit-services-saas-process-automation-order-to-cash-slider.jpg",
    className: "col-span-1 row-span-1",
    link: "",
    description: `Stock Automation streamlines and automates stock market trading, helping traders execute transactions based on predefined criteria. This platform enhances efficiency, reduces human error, and enables real-time market opportunities.`,
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
          <a
            key={project.id}
            href={project.link} // Add the link here
            target="_blank" // Open in a new tab
            rel="noopener noreferrer"
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
              <p className="py-2 text-gray-300 text-sm">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;
