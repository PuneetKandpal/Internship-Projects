import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewsTrending = () => {
  useEffect(() => {
    gsap.from(".trending-block", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".py-16",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        // markers:true
      },
    });
  }, []);

  return (
    <div className="py-16 px-6 md:px-20 md:py-28 mt-5">
      <h2 className="flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Trending News
      </h2>

      <div className="flex justify-between flex-wrap">
        {/* First Block */}
        <div className="trending-block w-full sm:w-[48%] lg:w-[31%] mb-6">
          <div className="w-full h-[210px] overflow-hidden">
            <a href="#">
              <img
                className="w-full h-full object-cover hover:scale-105 hover:opacity-95 transition-all duration-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_RkOcfSJyCyBrRY8U1KP3bczFcrFR8ZuMQ&s"
                alt="Uranium Energy restarts uranium production in Wyoming"
              />
            </a>
          </div>

          <div className="py-2">
            <a href="#">
              <h1 className="text-[16px] md:text-xl leading-[25px] capitalize text-white/90 font-semibold frank hover:text-white">
                Uranium Energy restarts uranium production in Wyoming
              </h1>
            </a>
            <p className="text-[11px] md:text-[12px] lato font-medium text-white/40 mt-2">
              <span>09 August, 2024</span>&nbsp; | &nbsp;<span>Mining.com</span>
            </p>
          </div>
        </div>

        {/* Second Block */}
        <div className="trending-block w-full sm:w-[48%] lg:w-[31%] mb-6">
          <div className="w-full h-[210px] overflow-hidden">
            <a href="#">
              <img
                className="w-full h-full object-cover hover:scale-105 hover:opacity-95 transition-all duration-300"
                src="https://www.mining.com/wp-content/uploads/2024/08/Australia-Northern-Territory-300x167.jpeg"
                alt="ERA scores win in battle to keep Jabikula uranium lease"
              />
            </a>
          </div>

          <div className="py-2">
            <a href="#">
              <h1 className="text-[16px] md:text-xl leading-[25px] capitalize text-white/90 font-semibold frank hover:text-white">
                ERA scores win in battle to keep Jabikula uranium lease
              </h1>
            </a>
            <p className="text-[11px] md:text-[12px] lato font-medium text-white/40 mt-2">
              <span>09 August, 2024</span>&nbsp; | &nbsp;<span>Mining.com</span>
            </p>
          </div>
        </div>

        {/* Third Block */}
        <div className="trending-block w-full sm:w-[48%] lg:w-[31%] mb-6">
          <div className="w-full h-[210px] overflow-hidden">
            <a href="#">
              <img
                className="w-full h-full object-cover hover:scale-105 hover:opacity-95 transition-all duration-300"
                src="https://www.mining.com/wp-content/uploads/2024/08/Uranium-Royalty-CEO-Scott-Melbye-300x169.png"
                alt="Uranium Royalty capitalizes on market resurgence"
              />
            </a>
          </div>

          <div className="py-2">
            <a href="#">
              <h1 className="text-[16px] md:text-xl leading-[25px] capitalize text-white/90 font-semibold frank hover:text-white">
                Uranium Royalty capitalizes on market resurgence
              </h1>
            </a>
            <p className="text-[11px] md:text-[12px] lato font-medium text-white/40 mt-2">
              <span>09 August, 2024</span>&nbsp; | &nbsp;<span>Mining.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTrending;
