import { useEffect } from "react";
import gsap from "gsap";


const LatestUraniumCompNews = () => {
  useEffect(() => {
    gsap.from("#uranium-news-section", {
      scrollTrigger: {
        trigger: "#uranium-news-section",
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: 50,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-full mt-8 lg:mt-0 lg:w-[30%]" id="uranium-news-section">
      <h2 className="flex items-center text-[1rem] md:text-[1.4rem] ml-[-7px] frank mb-6 lg:mb-12 font-medium text-white capitalize">
        <i className="ri-menu-4-fill text-lime1 text-bold text-xl mr-2"></i>
        Latest uranium company news
      </h2>

      <div className="border-b border-white/10 pb-5">
        <p className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
          Technology
        </p>
        <a href="#">
          <h2 className="mt-3 text-[15px] md:text-[17px] font-semibold leading-5 md:leading-6 text-white/70 hover:text-lime1">
            Roubini accuses Treasury of manipulating bond market to lower rates
          </h2>
        </a>
        <p className="text-[11px] md:text-[12px] roboto mt-2 font-normal text-white/35">
          <span>
            <i className="ri-time-line mr-1"></i> 32 mins ago
          </span>{" "}
          &nbsp; | &nbsp; <span>The Street</span>
        </p>
      </div>

      <div className="border-b border-white/10 pb-5">
        <p className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
          Technology
        </p>
        <a href="#">
          <h2 className="mt-3 text-[15px] md:text-[17px] font-semibold leading-5 md:leading-6 text-white/70 hover:text-lime1">
            Oil steadies near seven-week low with demand concerns mounting
          </h2>
        </a>
        <p className="text-[11px] md:text-[12px] roboto mt-2 font-normal text-white/35">
          <span>
            <i className="ri-time-line mr-1"></i> 42 mins ago
          </span>{" "}
          &nbsp; | &nbsp; <span>Bloomberg</span>
        </p>
      </div>

      <div className="border-b border-white/10 pb-5">
        <p className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
          Technology
        </p>
        <a href="#">
          <h2 className="mt-3 text-[15px] md:text-[17px] font-semibold leading-5 md:leading-6 text-white/70 hover:text-lime1">
            Roubini accuses Treasury of manipulating bond market to lower rates
          </h2>
        </a>
        <p className="text-[11px] md:text-[12px] roboto mt-2 font-normal text-white/35">
          <span>
            <i className="ri-time-line mr-1"></i> 32 mins ago
          </span>{" "}
          &nbsp; | &nbsp; <span>The Street</span>
        </p>
      </div>

      <div className="border-b border-white/10 pb-5">
        <p className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
          Technology
        </p>
        <a href="#">
          <h2 className="mt-3 text-[15px] md:text-[17px] font-semibold leading-5 md:leading-6 text-white/70 hover:text-lime1">
            Oil steadies near seven-week low with demand concerns mounting
          </h2>
        </a>
        <p className="text-[11px] md:text-[12px] roboto mt-2 font-normal text-white/35">
          <span>
            <i className="ri-time-line mr-1"></i> 42 mins ago
          </span>{" "}
          &nbsp; | &nbsp; <span>Bloomberg</span>
        </p>
      </div>
    </div>
  );
};

export default LatestUraniumCompNews;
