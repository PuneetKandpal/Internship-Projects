import { useEffect } from "react";
import { gsap } from "gsap";
import e1 from "../assets/e1.jpg";
import e2 from "../assets/e2.jpg";
import e8 from "../assets/e8.jpg";

const cardData = [
  {
    href: "/essentials/e1",
    image: e1,
    title: "What is Uranium?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nobis totam...",
  },
  {
    href: "/essentials/e2",
    image: e2,
    title: "Natural Occurence of Uranium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nobis totam...",
  },
  {
    href: "/essentials/e3",
    image:
      "https://g.foolcdn.com/editorial/images/459568/ranger-uranium-mine-in-australia.jpg",
    title: "Global Distribution of uranium Resources",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nobis totam...",
  },
  {
    href: "/essentials/e4",
    image: "https://www.ausimm.com/globalassets/bulletin/plummer-figure4.png",
    title: "Where can uranium be found?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nobis totam...",
  },
  {
    href: "/essentials/e5",
    image:
      "https://ahf.nuclearmuseum.org/wp-content/uploads/2018/07/Shinkolobwe_mine.jpg",
    title: "The history of uranium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nobis totam...",
  },
  {
    href: "/essentials/e6",
    image:
      "https://cardinalnews.org/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-21-at-3.16.03-PM.jpeg",
    title: "Environmental impact of uranium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nobis totam...",
  },
  {
    href: "/essentials/e7",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Uranium_Processing_Facility_001.jpg",
    title: "Uranium Processing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nobis totam...",
  },
  {
    href: "/essentials/e8",
    image: e8,
    title: "Uranium Glossary",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nobis totam...",
  },
];

const EssentialsCards = () => {
  useEffect(() => {
    gsap.from(".card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="px-2 pb-20 mt-16 lg:mt-16 lg:w-[90%] mx-auto w-[90%] lg:px-[1rem]">
      <div className="container mt-[3rem] lg:mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
          {cardData.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="card relative group w-full h-[290px] overflow-hidden rounded-sm flex flex-col"
            >
              <div
                className="w-full h-[62%] bg-center bg-cover bg-no-repeat transition-transform duration-300 ease-in-out group-hover:scale-105 overflow-hidden"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className="w-full h-[37%] bg-zinc-800/30 text-white flex flex-col justify-center p-4 relative transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <div className="relative z-10">
                  <h2 className="text-[18px] capitalize font-semibold mb-2 frank">
                    {card.title}
                  </h2>
                  <p className="text-sm text-left text-white/50 group-hover:text-black/60 transition-colors duration-500">
                    {card.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EssentialsCards;
