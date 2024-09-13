import  { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InvestmentsSidenav = () => {
  useEffect(() => {
    // GSAP animation for side navigation
    gsap.from(".sidenav-animation", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sidenav-animation",
        start: "top 80%",
        end: "top 60%",
        // toggleActions: "play none none reverse",
      },
    });

    // Smooth scrolling logic for sidenav links
    const anchors = document.querySelectorAll(".sidenav a");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        // Get the ID of the target element from href
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element with an offset for fixed headers
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 1, // Adjust based on header height
            behavior: "smooth",
          });
        }
      });
    });

    // Clean up event listeners on unmount
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="hidden md:block sidenav sidenav-animation rounded-md h-fit z-10 w-[20%] bg-zinc-800/30 fixed top-[5.4rem] bottom-0 overflow-y-auto mt-5">
      <ul className="space-y-3 p-4">
        <li>
          <a
            href="#performers"
            className="text-white frank hover:bg-black1 flex items-center py-2 px-4 rounded"
          >
            <i className="text-lime1 ri-bar-chart-fill text-[18px] mr-4"></i>
            Top Performers
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="text-white frank hover:bg-black1 flex items-center py-2 px-4 rounded"
          >
            <i className="text-lime1 ri-pie-chart-line text-[18px] mr-4"></i>
            Atomic Portfolio
          </a>
        </li>
        <li>
          <a
            href="#stocks"
            className="text-white frank hover:bg-black1 flex items-center py-2 px-4 rounded"
          >
            <i className="text-lime1 ri-funds-line text-[18px] mr-4"></i>
            Uranium Stocks
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InvestmentsSidenav;
