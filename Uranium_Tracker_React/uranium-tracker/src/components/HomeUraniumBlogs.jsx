import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const HomeUraniumBlogs = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title Section Animation
    gsap.from(".title-section", {
      scrollTrigger: {
        trigger: ".title-section",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
    });

    // Image Section Animation
    gsap.from(".image-animate", {
      scrollTrigger: {
        trigger: ".images-section",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="py-18 md:px-20 px-6 overflow-x-hidden">
      <div className="px-2 py-4 lg:py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 md:mb-10 title-section">
          <h2 className="ml-0 flex items-center text-[1rem] md:text-[1.4rem] frank mb-4 md:mb-3 font-semibold text-white capitalize">
            <i className="ri-menu-4-fill text-lime2 font-bold text-xl mr-3"></i>
            Latest Uranium Blogs
          </h2>
          <a
            href="#"
            className="hidden md:flex text-white/40 hover:text-lime2 text-[11px] md:text-[14px] items-center"
          >
            View More <i className="ri-arrow-right-s-line ml-1 text-lg"></i>
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-4 images-section">
          {/* First Image (Left) */}
          <a href="#">
            <div className="group flex-1 md:flex-[1.5] bg-white overflow-hidden relative h-[15rem] md:h-[20rem] flex-shrink-0 image-container image-animate">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxswzclsJarTltvp_eOlVjyR8YM3lyL04VDA&s"
                alt="NASA Data"
                className="group-hover:scale-105 transition-all duration-200 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#161616]/70 to-transparent"></div>
              <div className="absolute bottom-3 md:bottom-6 left-3 md:left-4 z-10 text-white">
                <span className="text-white/45 text-xs flex items-center mb-2 md:mb-2">
                  <i className="ri-time-line mr-1"></i> 2 min read
                </span>
                <h3 className="font-semibold text-white/90 text-[14px] md:text-[16px] frank mt-0">
                  NASA Data Shows July 22 Was Earth's Hottest Day on Record
                </h3>
              </div>
            </div>
          </a>

          {/* Second Image (Middle) */}
          <a href="#">
            <div className="group flex-1 md:flex-[1] bg-white overflow-hidden relative h-[15rem] md:h-[20rem] flex-shrink-0 image-container image-animate">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
                alt="NASA Virtual Activities"
                className="group-hover:scale-105 transition-all duration-200 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#161616]/70 to-transparent"></div>
              <div className="absolute bottom-3 md:bottom-6 left-3 md:left-4 z-10 text-white">
                <span className="text-white/45 text-xs flex items-center mb-2 md:mb-2">
                  <i className="ri-time-line mr-1"></i> 1 min read
                </span>
                <h3 className="font-semibold text-white/90 text-[14px] md:text-[16px] frank mt-0">
                  NASA Offers Virtual Activities for 21st Northrop Grumman
                  Resupply Mission
                </h3>
              </div>
            </div>
          </a>

          {/* Two Stacked Images (Right) */}
          <div className="flex-1 md:flex-[1] flex flex-col gap-4">
            {/* Top Image */}
            <a href="#">
              <div className="group bg-white overflow-hidden relative h-[9rem] md:h-[9.5rem] flex-shrink-0 image-container image-animate">
                <img
                  src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
                  alt="Space Station Research"
                  className="group-hover:scale-105 transition-all duration-200 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#161616]/70 to-transparent"></div>
                <div className="absolute bottom-3 md:bottom-6 left-3 md:left-4 z-10 text-white">
                  <span className="text-white/40 text-xs flex items-center mb-2 roboto">
                    <i className="ri-time-line mr-1"></i> 4 min read
                  </span>
                  <h3 className="font-semibold text-white/90 text-[14px] md:text-[16px] frank mt-0">
                    NASA To Highlight 13th Space Station Research, Development
                    Conference
                  </h3>
                </div>
              </div>
            </a>

            {/* Bottom Image */}
            <a href="#">
              <div className="group bg-white overflow-hidden relative h-[9rem] md:h-[9.5rem] flex-shrink-0 image-container image-animate">
                <img
                  src="https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-08/space_station_5.jpg?VersionId=MBv_hEFhlSV.QkIqEJOGKbjkRb_AqauD&size=750:*"
                  alt="SpaceX Launch"
                  className="group-hover:scale-105 transition-all duration-200 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#161616]/70 to-transparent"></div>
                <div className="absolute bottom-3 md:bottom-6 left-3 md:left-4 z-10 text-white">
                  <span className="text-white/40 text-xs flex items-center mb-2 roboto">
                    <i className="ri-time-line mr-1"></i> 3 min read
                  </span>
                  <h3 className="font-semibold text-white/90 text-[14px] md:text-[16px] frank mt-0">
                    SpaceX and NASA to Launch Crew-7 Mission to ISS
                  </h3>
                </div>
              </div>
            </a>
          </div>
        </div>

        <a
          href="#"
          className="flex mt-4 md:hidden text-black/45 hover:text-lime2 text-[11px] md:text-[13px] items-center"
        >
          VIEW MORE <i className="ri-arrow-right-s-line ml-1 text-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default HomeUraniumBlogs;
