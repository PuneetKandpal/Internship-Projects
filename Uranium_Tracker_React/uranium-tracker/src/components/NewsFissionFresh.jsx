import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewsFissionFresh = () => {
  useEffect(() => {
    // Animate the headline
    gsap.from(".uranium-news-headline", {
      scrollTrigger: {
        trigger: ".uranium-news-headline",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Animate the background image
    gsap.from(".uranium-news-background", {
      scrollTrigger: {
        trigger: ".uranium-news-background",
        start: "top 80%",
      },
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    // Animate the news cards
    gsap.from(".news-card", {
      scrollTrigger: {
        trigger: ".news-card",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="py-16 px-6 md:px-20 md:pb-32 md:pt-10">
      <h2 className="uranium-news-headline flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-9 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Fission Fresh Uranium News
      </h2>

      <div className="flex flex-wrap md:flex-nowrap md:justify-between">
        <div className="uranium-news-background relative w-full md:w-[58%] h-[400px] md:h-auto overflow-hidden group">
          {/* Background Image */}
          <img
            src="https://www.renovablesverdes.com/wp-content/uploads/2021/05/contaminacion-nuclear.jpg"
            alt="Background"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent"></div>

          {/* Text at the Bottom */}
          <a href="#">
            <div className="uranium-news-overlay absolute bottom-2 left-3 text-start w-full text-white p-4">
              <span className="bg-lime1 text-black font-semibold text-xs px-2 py-1 uppercase">
                Technology
              </span>
              <h2 className="text-2xl text-white/90 font-semibold pr-6 mt-4 leading-[35px] hover:text-lime2 transition-all duration-200">
                Arizona governor negotiates pause in hauling of uranium ore
                across Navajo Nation
              </h2>
              <p className="text-[13.5px] lato text-white/80 mt-5">
                Globe Newswire – Aug 21, 2024
              </p>
            </div>
          </a>
        </div>

        <div className="w-full md:w-[38%] mt-8 md:mt-0">
          <div className="text-black">
            <div className="max-w-4xl mx-auto">
              {/* News Card 1 */}
              <div className="news-card flex flex-col sm:flex-row border-b border-white/5 mb-4">
                <div className="flex-shrink-0 w-44 h-28">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSNoe0C1BihCNTwAKcYecbdUqS7GwOdHAlA&s"
                    alt="News"
                    className="w-full h-full object-cover hover:opacity-80 transition-all duration-200"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
                      Technology
                    </span>
                    <a href="#">
                      <h2 className="text-lg md:text-[17px] font-semibold mt-2 leading-[23px] hover:text-lime1 text-white/90 transition-all duration-200">
                        Uranium Is the Commodity Market’s Deadliest Metal and
                        It’s Having a Moment
                      </h2>
                    </a>
                  </div>
                  <p className="text-xs mt-4 md:mb-[18px] md:text-[12px] roboto font-medium text-white/50 pb-3 md:pb-0">
                    <span>
                      <i className="ri-time-line mr-1"></i> 2 hrs ago
                    </span>
                    &nbsp; | &nbsp; <span>Bloomberg</span>
                  </p>
                </div>
              </div>

              {/* News Card 2 */}
              <div className="flex flex-col sm:flex-row pt-4 border-b border-white/5">
                <div className="flex-shrink-0 w-44 h-28">
                  <img
                    src="https://www.oecd-nea.org/upload/docs/image/jpeg/2024-02/img_6105.jpg.associated/th-960x540-img_6105.jpg.jpg"
                    alt="Apple Patent"
                    className="w-full h-full object-cover hover:opacity-80 transition-all duration-200"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
                      Technology
                    </span>
                    <a href="#">
                      <h2 className="text-lg md:text-[17px] font-semibold mt-2 leading-[23px] hover:text-lime1 text-white/90 transition-all duration-200">
                        Discussing developments in the global uranium sector
                      </h2>
                    </a>
                  </div>
                  <p className="text-xs mt-4 md:mb-[18px] md:text-[12px] roboto font-medium text-white/50 pb-3 md:pb-0">
                    <span>
                      <i className="ri-time-line mr-1"></i> 2 hrs ago
                    </span>
                    &nbsp; | &nbsp; <span>Bloomberg</span>
                  </p>
                </div>
              </div>

              {/* News Card 3 */}
              <div className="flex flex-col sm:flex-row pt-4 border-b border-white/5">
                <div className="flex-shrink-0 w-44 h-28">
                  <img
                    src="https://www.power-technology.com/wp-content/uploads/sites/21/2024/01/uranium-63095_19202.jpg"
                    alt="Apple Patent"
                    className="w-full h-full object-cover hover:opacity-80 transition-all duration-200"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
                      Technology
                    </span>
                    <a href="#">
                      <h2 className="text-lg md:text-[17px] font-semibold mt-2 leading-[23px] hover:text-lime1 text-white/90 transition-all duration-200">
                        US ready to replace Russian uranium imports, official
                        says
                      </h2>
                    </a>
                  </div>
                  <p className="text-xs mt-4 md:mb-[18px] md:text-[12px] roboto font-medium text-white/50 pb-3 md:pb-0">
                    <span>
                      <i className="ri-time-line mr-1"></i> 2 hrs ago
                    </span>
                    &nbsp; | &nbsp; <span>Bloomberg</span>
                  </p>
                </div>
              </div>

              {/* News Card 4 */}
              <div className="flex flex-col sm:flex-row pt-4 border-b border-white/5">
                <div className="flex-shrink-0 w-44 h-28">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSNoe0C1BihCNTwAKcYecbdUqS7GwOdHAlA&s"
                    alt="News"
                    className="w-full h-full object-cover hover:opacity-80 transition-all duration-200"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
                      Technology
                    </span>
                    <a href="#">
                      <h2 className="text-lg md:text-[17px] font-semibold mt-2 leading-[23px] hover:text-lime1 text-white/90 transition-all duration-200">
                        New uranium deposit found in the Arctic
                      </h2>
                    </a>
                  </div>
                  <p className="text-xs mt-4 md:mb-[18px] md:text-[12px] roboto font-medium text-white/50 pb-3 md:pb-0">
                    <span>
                      <i className="ri-time-line mr-1"></i> 2 hrs ago
                    </span>
                    &nbsp; | &nbsp; <span>Bloomberg</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFissionFresh;
