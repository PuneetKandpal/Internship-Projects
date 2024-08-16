import { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const HomeWork = () => {
  const { theme } = useContext(ThemeContext);
  const cardsRef = useRef(null);

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

  const cardData = [
    {
      image: "./src/assets/images/1.jpg",
      label: "Big Swinging Insiders",
      description:
        "This project tracks insider trading activities of big companies.",
    },
    {
      image: "./src/assets/images/2.jpg",
      label: "Uranium Tracker",
      description:
        "This tool monitors the uranium market and price fluctuations.",
    },
    {
      image: "./src/assets/images/3.jpg",
      label: "Big Swinging Insiders",
      description:
        "Analyzes and predicts market trends based on insider activities.",
    },
    {
      image: "./src/assets/images/4.jpg",
      label: "Uranium Tracker",
      description:
        "Provides detailed analytics on uranium mining and investment.",
    },
  ];

  return (
    <div
      className={`font-['Archivo', sans-serif] p-8 ml-14 ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <h2
        className={`text-sm uppercase mb-2 font-Syne leading-4 font-medium tracking-[.25em] ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        Portfolio
      </h2>
      <h1
        className={`text-5xl font-semibold mb-12 leading-tight font-Syne ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Dynamic Results,
        <br />
        Proven Success
      </h1>
      <div className="overflow-hidden">
        <div
          ref={cardsRef}
          className="flex gap-8 transition-all duration-1000 ease-in-out"
        >
          {cardData.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-[500px]">
              <div className="relative h-[300px] mb-4 group overflow-hidden">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out flex flex-col justify-end p-4 text-white`}
                >
                  <div className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    • {card.label}
                  </div>
                  <div className="text-lg font-Syne transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-100">
                    {card.description}
                  </div>
                </div>
              </div>
              <div
                className={`text-[26px] font-Syne font-semibold leading-8 ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
