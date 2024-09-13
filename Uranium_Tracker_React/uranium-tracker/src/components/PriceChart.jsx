import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PriceChart = () => {
  useEffect(() => {
    gsap.from(".uranium-prices", {
      scrollTrigger: {
        trigger: ".uranium-section",
        start: "top 60%", // Adjust start point
        toggleActions: "play none none none", // When to play the animation
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-full lg:w-[49%] flex flex-col uranium-prices mb-10 lg:mb-0">
      <div className="bg-zinc-800/30 rounded-sm p-6 flex-grow uranium-table-container">
        <h3 className="text-xl sm:text-2xl text-white frank font-medium mb-5 uranium-heading">
          Uranium Prices
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-white border-separate border-spacing-y-0 uranium-table">
            <thead className="text-xs font-light text-white/30 uppercase tracking-wider py-1">
              <tr>
                <th className="px-1 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  LiveU3O8
                </th>
                <th className="px-1 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  BidLoc
                </th>
                <th className="px-1 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  Bid$/lbs
                </th>
                <th className="px-1 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  Indic$/lbs
                </th>
                <th className="px-1 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  Change$/lbs
                </th>
                <th className="px-1 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  Ask$/lbs
                </th>
                <th className="px-1 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  AskLoc
                </th>
              </tr>
            </thead>
            <tbody className="text-[12px] sm:text-[13px] text-white/90">
              <tr className="hover:bg-[#161616]">
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5 text-white/60">
                  Aug-24
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  CMX
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.00
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.30
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  1.35
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.75
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  CMO
                </td>
              </tr>
              {/* Add more rows as needed */}
              <tr className="hover:bg-[#161616]">
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5 text-white/60">
                  Aug-24
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  CMX
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.00
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.30
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  1.35
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.75
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  CMO
                </td>
              </tr>
              <tr className="hover:bg-[#161616]">
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5 text-white/60">
                  Aug-24
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  CMX
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.00
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.30
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  1.35
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.75
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  CMO
                </td>
              </tr>
              <tr className="hover:bg-[#161616]">
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5 text-white/60">
                  Aug-24
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  CMX
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.00
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.30
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  1.35
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.75
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  CMO
                </td>
              </tr>
              <tr className="hover:bg-[#161616]">
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5 text-white/60">
                  Aug-24
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  CMX
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.00
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.30
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  1.35
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  81.75
                </td>
                <td className="px-2 sm:px-3 py-2 sm:py-4 border-b border-white/5">
                  CMO
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PriceChart;
