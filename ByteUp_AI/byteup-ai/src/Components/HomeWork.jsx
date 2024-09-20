import { useEffect, useRef, useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import AnimatedCursor from "./AnimatedCursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import it from "../assets/images/insider_trade.png";
import ut from "../assets/images/uranium_tracker.png";
import fundesk from "../assets/images/Fundesk.png";

gsap.registerPlugin(ScrollTrigger);

const HomeWork = () => {
  const { theme } = useContext(ThemeContext);
  const cardsRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (cardsRef.current) {
        const firstCard = cardsRef.current.firstElementChild;
        const cardWidth = firstCard.offsetWidth;
        const clone = firstCard.cloneNode(true);
        cardsRef.current.appendChild(clone);
        cardsRef.current.style.transition = "transform 1s ease";
        cardsRef.current.style.transform = `translateX(-${cardWidth + 32}px)`; // 32px for the gap

        setTimeout(() => {
          cardsRef.current.style.transition = "none";
          cardsRef.current.style.transform = "translateX(0)";
          cardsRef.current.removeChild(firstCard);
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".animate-heading",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".animate-heading",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseMove = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardData = [
    {
      image: it,
      label: "Big Swinging Insiders",
      description:
        "This project tracks insider trading activities of big companies.",
      link: "https://it-v.netlify.app/",
    },
    {
      image: ut,
      label: "Uranium Tracker",
      description:
        "This project monitors the uranium market and price fluctuations.",
      link: "https://ut-react.netlify.app/",
    },
    {
      image: fundesk,
      label: "FunDesk",
      description:
        "Analyzes and predicts market trends based on insider activities.",
      link: "https://www.fundesk.io",
    },
    {
      image:
        "https://www.promptcloud.com/wp-content/uploads/2023/09/Web-Scraping-425.jpg",
      label: "Ecommerce Scraping",
      description:
        "Provides detailed analytics on uranium mining and investment.",
      link: "",
    },
    {
      image:
        "https://www.wiit.cloud/wp-content/uploads/2022/02/wiit-services-saas-process-automation-order-to-cash-slider.jpg",
      label: "Stock Automation",
      description:
        "This tool monitors the uranium market and price fluctuations.",
      link: "",
    },
  ];

  useEffect(() => {
    const applyTheme = () => {
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".card-label");
        cards.forEach((card) => {
          card.className = `card-label text-[26px] font-Syne font-semibold leading-8 ${
            theme === "light" ? "text-black" : "text-white"
          }`;
        });
      }
    };

    applyTheme();

    if (cardsRef.current) {
      const observer = new MutationObserver(() => {
        applyTheme();
      });

      observer.observe(cardsRef.current, {
        childList: true,
        subtree: true,
      });

      return () => observer.disconnect();
    }
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`font-Archivo mt-[-3rem] md:mt-0
         pb-8 ml-4 lg:ml-14 ${theme === "light" ? "bg-white" : "bg-black"}`}
    >
      <AnimatedCursor isHovered={isHovered} />

      <h2
        className={`animate-heading text-[13px] uppercase mb-1 font-Syne leading-4 font-normal ml-1 tracking-[.20em] ${
          theme === "light" ? "text-gradient-css opacity-70" : "text-white/40"
        }`}
      >
        Portfolio
      </h2>
      <h1
        onMouseEnter={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`animate-heading text-[35px] md:text-5xl font-semibold mb-8 md:mb-12 leading-tight font-Syne inline-block ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Driving Excellence in
        <br />
        Every Project
      </h1>
      <div className="overflow-hidden">
        <div
          ref={cardsRef}
          className="flex gap-4 md:gap-8 transition-all duration-1000 ease-in-out"
        >
          {cardData.map((card, index) => (
            <a
              key={index}
              href={card.link} // Link to the live project
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[300px] md:w-[500px] card"
            >
              <div className="relative h-[200px] md:h-[300px] mb-4 group overflow-hidden">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out flex flex-col justify-end p-4 text-white`}
                >
                  <div className="text-lg md:text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    • {card.label}
                  </div>
                  <div className="text-base md:text-lg font-Syne transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100">
                    {card.description}
                  </div>
                </div>
              </div>
              <div
                className={`card-label text-[18px] md:text-[26px] font-Syne font-semibold leading-8 ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                {card.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
