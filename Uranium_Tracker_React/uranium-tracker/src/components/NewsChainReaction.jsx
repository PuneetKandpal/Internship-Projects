// NewsChainReaction.jsx
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewsChainReaction = () => {
  useEffect(() => {
    // Headline animation
    // gsap.from(".uranium-news-headline", {
    //   scrollTrigger: {
    //     trigger: ".uranium-news-headline",
    //     start: "top 80%",
    //     toggleActions: "play none none reverse",
    //   },
    //   y: 50,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power2.out",
    // });
    // // Block animations
    // gsap.from(".trending-block", {
    //   scrollTrigger: {
    //     trigger: ".trending-block",
    //     start: "top 80%",
    //     toggleActions: "play none none reverse",
    //   },
    //   y: 50,
    //   opacity: 0,
    //   duration: 1,
    //   stagger: 0.3,
    //   ease: "power2.out",
    // });
  }, []);
  return (
    <div className="py-16 px-6 md:px-20 md:pb-28 md:pt-7">
      <h2 className="uranium-news-headline flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Global Uranium Chain Reaction
      </h2>

      <div className="flex justify-between flex-wrap">
        {/* First Block */}
        <div className="trending-block w-full sm:w-[48%] lg:w-[22%] mb-6">
          <div className="w-full h-[170px] overflow-hidden">
            <a href="#">
              <img
                className="w-full h-full object-cover hover:scale-105 hover:opacity-95 transition-all duration-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_RkOcfSJyCyBrRY8U1KP3bczFcrFR8ZuMQ&s"
                alt="Uranium Energy"
              />
            </a>
          </div>

          <div className="py-2">
            <a href="#">
              <h1 className="text-[15px] md:text-lg leading-[20px] capitalize text-white/90 font-semibold frank hover:text-white">
                Uranium Energy restarts uranium production in Wyoming
              </h1>
            </a>
            <p className="text-[11px] md:text-[12px] lato font-medium text-white/40 mt-1">
              <span>09 August, 2024</span>
              &nbsp; | &nbsp; <span>Mining.com</span>
            </p>
          </div>
        </div>

        {/* Second Block */}
        <div className="trending-block w-full sm:w-[48%] lg:w-[22%] mb-6">
          <div className="w-full h-[170px] overflow-hidden">
            <a href="#">
              <img
                className="w-full h-full object-cover hover:scale-105 hover:opacity-95 transition-all duration-300"
                src="https://www.mining.com/wp-content/uploads/2024/08/Australia-Northern-Territory-300x167.jpeg"
                alt="ERA"
              />
            </a>
          </div>

          <div className="py-2">
            <a href="#">
              <h1 className="text-[15px] md:text-lg leading-[20px] capitalize text-white/90 font-semibold frank hover:text-white">
                ERA scores win in battle to keep Jabikula uranium lease
              </h1>
            </a>
            <p className="text-[11px] md:text-[12px] lato font-medium text-white/40 mt-1">
              <span>09 August, 2024</span>
              &nbsp; | &nbsp; <span>Mining.com</span>
            </p>
          </div>
        </div>

        {/* Third Block */}
        <div className="trending-block w-full sm:w-[48%] lg:w-[22%] mb-6">
          <div className="w-full h-[170px] overflow-hidden">
            <a href="#">
              <img
                className="w-full h-full object-cover hover:scale-105 hover:opacity-95 transition-all duration-300"
                src="https://www.mining.com/wp-content/uploads/2024/08/Uranium-Royalty-CEO-Scott-Melbye-300x169.png"
                alt="Uranium Royalty"
              />
            </a>
          </div>

          <div className="py-2">
            <a href="#">
              <h1 className="text-[15px] md:text-lg leading-[20px] capitalize text-white/90 font-semibold frank hover:text-white">
                Uranium Royalty capitalizes on market resurgence
              </h1>
            </a>
            <p className="text-[11px] md:text-[12px] lato font-medium text-white/40 mt-1">
              <span>09 August, 2024</span>
              &nbsp; | &nbsp; <span>Mining.com</span>
            </p>
          </div>
        </div>

        {/* Fourth Block */}
        <div className="trending-block w-full sm:w-[48%] lg:w-[22%] mb-6">
          <div className="w-full h-[170px] overflow-hidden">
            <a href="#">
              <img
                className="w-full h-full object-cover hover:scale-105 hover:opacity-95 transition-all duration-300"
                src="https://dims.apnews.com/dims4/default/567e4f8/2147483647/strip/true/crop/4000x2250+0+208/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F%5B3%2F7%2C%2F%20-54%2C%201%2C%20-67%2C%20-76%2C%20-91%2C%2023%2C%2086%2C%2093%2C%2031%2C%20-100%2C%2052%2C%2011%2C%20-69%2C%20-98%2C%20-92%2C%2019%2C%20-111%2C%20-22%2C%20-66%2C%2025%2C%20-41%2C%20-56%2C%2086%2C%20-110%2C%20120%2C%2061%2C%20106%5D%2F84f535bc93344053b056ef1f4a29f78b"
                alt="Arizona Governor"
              />
            </a>
          </div>

          <div className="py-2">
            <a href="#">
              <h1 className="text-[15px] md:text-lg leading-[20px] capitalize text-white/90 font-semibold frank hover:text-white">
                Arizona governor negotiates pause in hauling of uranium ore
              </h1>
            </a>
            <p className="text-[11px] md:text-[12px] lato font-medium text-white/40 mt-1">
              <span>09 August, 2024</span>
              &nbsp; | &nbsp; <span>Mining.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsChainReaction;
