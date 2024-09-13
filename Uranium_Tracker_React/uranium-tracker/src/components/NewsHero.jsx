import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

const NewsHero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the large image section
    gsap.from(".animate-large-img", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".animate-large-img",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate the smaller image sections
    gsap.from(".animate-small-imgs > *", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".animate-small-imgs",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="py-16 px-0 md:px-0 md:py-20">
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2px] h-full">
          {/* Left Section - Large Image */}
          <div className="lg:col-span-2 h-full">
            <Link to="/news/1" className="block h-full">
              {" "}
              {/* Link to individual news page */}
              <div className="relative h-[559px] group overflow-hidden animate-large-img">
                <img
                  src="https://images.unsplash.com/photo-1610720707798-6fe21dc165ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnVjbGVhcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Oculus Quest X Headset"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-5 text-white z-10">
                  <span className="bg-lime1 text-black font-semibold text-xs px-2 py-1 uppercase">
                    Nuclear-Grade trending News
                  </span>
                  <h2 className="text-2xl font-semibold pr-6 mt-4 leading-[35px]">
                    Nuclear Power Market Size is Projected to Reach USD 45.31
                    billion by 2032, Growing at a CAGR of 3.10%: Straits
                    Research
                  </h2>
                  <p className="text-[13.5px] lato text-white/80 mt-5">
                    Globe Newswire – Aug 21, 2024
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Section - Stacked Smaller Images */}
          <div className="flex flex-col space-y-1 animate-small-imgs">
            {/* Top Small Image */}
            <Link to="/news/2">
              <div className="relative w-full h-[277px] group overflow-hidden">
                <img
                  src="https://www.mining.com/wp-content/uploads/2024/01/Uranium_Energy_Corp_Uranium_Energy_Corp_Completes_Restart_Progra-300x207.jpg"
                  alt="Uranium Energy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-5 text-white z-10">
                  <span className="bg-lime1 text-black font-semibold text-[11px] px-2 py-1 uppercase">
                    Technology
                  </span>
                  <h3 className="text-[20px] leading-[25px] font-semibold mt-2 pr-4">
                    Uranium Energy restarts uranium production in Wyoming
                  </h3>
                  <p className="text-xs mt-3 text-white/80 lato">
                    Mining.com Doe – Aug 21, 2024
                  </p>
                </div>
              </div>
            </Link>

            {/* Bottom Small Image */}
            <Link to="/news/3">
              <div className="relative w-full h-[277px] group overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1567665202038-6c5e97837696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXJhbml1bXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Fujifilm’s 102-Megapixel Camera"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-5 text-white z-10">
                  <span className="bg-lime1 text-black font-semibold text-[11px] px-2 py-1 uppercase">
                    Technology
                  </span>
                  <h3 className="text-[20px] leading-[25px] font-semibold mt-2 pr-4">
                    ERA scores win in battle to keep Jabikula uranium lease
                  </h3>
                  <p className="text-xs mt-3 text-white/80 lato">
                    Mining.com Doe – Aug 21, 2024
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
