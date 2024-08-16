import { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const HomeWork = () => {
  const { theme } = useContext(ThemeContext);
  const cardsRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (cardsRef.current) {
        const firstCard = cardsRef.current.firstElementChild;
        cardsRef.current.appendChild(firstCard.cloneNode(true));
        cardsRef.current.style.transition = "transform 1s ease";
        cardsRef.current.style.transform = "translateX(-37.5%)";
        setTimeout(() => {
          cardsRef.current.style.transition = "none";
          cardsRef.current.style.transform = "translateX(0)";
          cardsRef.current.removeChild(cardsRef.current.firstElementChild);
        }, 1000);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const cardData = [
    {
      image:
        "https://cdn.dribbble.com/users/2558685/screenshots/7700236/media/e31395802cff9343b9293e6271cb89a5.jpg?resize=1000x750&vertical=center",
      label: "Big Swinging Insiders",
      description:
        "This project tracks insider trading activities of big companies.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "Uranium Tracker",
      description:
        "This tool monitors the uranium market and price fluctuations.",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/7317089/file/original-3323c6e6b03d4c9a4cab0c67d6237a40.png?resize=1200x900",
      label: "Big Swinging Insiders",
      description:
        "Analyzes and predicts market trends based on insider activities.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelvsRw3CrdFo6ddHRXNMFx-59LIw4LnYIQA&s",
      label: "Uranium Tracker",
      description:
        "Provides detailed analytics on uranium mining and investment.",
    },
  ];

  return (
    <div
      className={`font-['Archivo', sans-serif] p-8  ml-14 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h2
        className={`text-sm uppercase mb-2 font-Syne leading-4 font-medium tracking-[.25em] ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        Portfolio
      </h2>
      <h1 className="text-5xl font-semibold mb-12 leading-tight font-Syne">
        Dynamic Results,
        <br />
        Proven Success
      </h1>
      <div className="overflow-hidden">
        <div
          ref={cardsRef}
          className="flex gap-8 transition-transform duration-1000 ease"
        >
          {cardData.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-[500px]">
              <div className="relative h-[300px] mb-4 group overflow-hidden">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                />
                {/* Overlay with smoother gradient transition */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-out transform group-hover:translate-y-0 translate-y-4 flex flex-col justify-end p-4 ${
                    theme === "light" ? "text-white" : "text-white"
                  }`}
                >
                  <div className="text-xl font-bold mb-2">• {card.label}</div>
                  <div className="text-lg font-Syne">{card.description}</div>
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
