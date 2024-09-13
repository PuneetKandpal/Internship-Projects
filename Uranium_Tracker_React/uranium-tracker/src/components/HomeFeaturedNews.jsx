import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeFeaturedNews = () => {
  useEffect(() => {
    // Featured News Section Animation
    gsap.from(".featured-news", {
      opacity: 0,
      y: 50,
      duration: 1,
      onStart: () =>
        (document.querySelector(".featured-news").style.overflow = "hidden"),
      onComplete: () =>
        (document.querySelector(".featured-news").style.overflow = ""),
      scrollTrigger: {
        trigger: ".featured-news",
        start: "top 80%",
        // toggleActions: 'play none none reverse',
      },
    });

    // News Cards Animation
    gsap.from(".news-card", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.2,
      onStart: () =>
        (document.querySelector(".featured-news").style.overflow = "hidden"),
      onComplete: () =>
        (document.querySelector(".featured-news").style.overflow = ""),
      scrollTrigger: {
        trigger: ".news-card",
        start: "top 80%",
        // toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className="w-full lg:w-[50%] h-full mb-10 featured-news overflow-x-hidden">
      <h2 className="flex items-center text-[1rem] md:text-[1.4rem] font-medium text-white capitalize mb-6 lg:mb-12">
        <i className="ri-menu-4-fill text-lime1 text-xl mr-2"></i>
        Featured News
      </h2>

      {/* News Cards */}
      <div className="text-white">
        <div className="max-w-4xl mx-auto">
          {/* News Card 1 */}
          <div className="flex flex-col sm:flex-row pb-7 border-b border-white/10 news-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvqSwchXqV_TXotA-8Afc4SB6_15IMZns-g&s"
              alt="Technology Image"
              className="w-full sm:w-52 h-32 md:h-[140px] object-cover hover:opacity-80 transition-all duration-200"
            />
            <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
              <div>
                <span className="text-lime1 uppercase text-xs font-bold">
                  Technology
                </span>
                <a href="#">
                  <h2 className="text-lg md:text-xl font-semibold text-white/90 mt-2 tracking-[0.5px] hover:text-lime1 transition-all duration-200">
                    NASA Data Shows July 22 Was Earth’s Hottest Day on Record
                  </h2>
                </a>
              </div>
              <p className="text-xs mt-4 md:mb-[7px] md:text-[12px] font-medium text-white/25">
                <span>
                  <i className="ri-time-line mr-1"></i> 2 hrs ago
                </span>{" "}
                &nbsp; | &nbsp; <span>Bloomberg</span>
              </p>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="flex flex-col sm:flex-row py-7 border-b border-white/10 news-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhe9IWtYeL1StChO_X_OB58yn1UlXYtNlPg&s"
              alt="PlayStation vs Xbox"
              className="w-full sm:w-52 h-32 md:h-[140px] object-cover hover:opacity-80 transition-all duration-200"
            />
            <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
              <div>
                <span className="text-lime1 uppercase text-xs font-bold">
                  Technology
                </span>
                <a href="#">
                  <h2 className="text-lg md:text-xl font-semibold text-white/90 mt-2 tracking-[0.5px] hover:text-lime1 transition-all duration-200">
                    NASA to highlight 13th space station research, development
                    conference
                  </h2>
                </a>
              </div>
              <p className="text-xs mt-4 md:mb-[7px] md:text-[12px] font-medium text-white/25">
                <span>
                  <i className="ri-time-line mr-1"></i> 2 hrs ago
                </span>{" "}
                &nbsp; | &nbsp; <span>Bloomberg</span>
              </p>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="flex flex-col sm:flex-row py-7 border-b border-white/10 news-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSNoe0C1BihCNTwAKcYecbdUqS7GwOdHAlA&s"
              alt="Apple Patent"
              className="w-full sm:w-52 h-32 md:h-[140px] object-cover hover:opacity-80 transition-all duration-200"
            />
            <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
              <div>
                <span className="text-lime1 uppercase text-xs font-bold">
                  Gadgets
                </span>
                <a href="#">
                  <h2 className="text-lg md:text-xl font-semibold text-white/90 mt-2 tracking-[0.5px] hover:text-lime1 transition-all duration-200">
                    NASA offers virtual activities for 21st Northrop Grumman
                    resupply mission
                  </h2>
                </a>
              </div>
              <p className="text-xs mt-4 md:mb-[7px] md:text-[12px] font-medium text-white/25">
                <span>
                  <i className="ri-time-line mr-1"></i> 2 hrs ago
                </span>{" "}
                &nbsp; | &nbsp; <span>Bloomberg</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedNews;
