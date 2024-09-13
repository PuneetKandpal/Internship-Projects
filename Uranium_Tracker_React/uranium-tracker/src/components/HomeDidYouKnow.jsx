import { useEffect } from 'react';
import { GiCellarBarrels, GiCoalWagon } from 'react-icons/gi';
import { RiGasStationFill } from 'react-icons/ri';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const HomeDidYouKnow = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the left section
    gsap.from('.did-you-know-left', {
      scrollTrigger: {
        trigger: '.did-you-know-left',
        start: 'top 80%',
        end: 'bottom 20%',
      },
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: 'power2.out',
    });

    // Animate the images in the right section
    gsap.from('.did-you-know-images > div', {
      scrollTrigger: {
        trigger: '.did-you-know-images',
        start: 'top 80%',
        end: 'bottom 20%',
      },
      opacity: 0,
      scale: 0.8,
      stagger: 0.3,
      duration: 1.5,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className="p-6 md:p-20 pt-14 overflow-x-hidden">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center py-12 md:py-20">
        {/* Left */}
        <div className="w-full md:w-[38%] mb-8 md:mb-0 did-you-know-left">
          <div className="text-[10.5px] mt-7 font-extrabold lato bg-lime1 pt-[3px] py-[2px] px-2 text-[#161616] w-fit uppercase">
            Did You Know?
          </div>
          <div className="h-fit mb-6 md:mb-10">
            <h1 className="frank leading-[40px] text-white text-[1.8rem] md:text-[2.7rem] font-medium mt-2.5">
              One Uranium Pellet (~6g)
            </h1>
            <p className="text-white/50 font-light ml-1 text-[14px] md:text-[17px] md:mt-[4px]">
              (the size of a gummy bear)
            </p>
          </div>
          <div className="flex flex-col gap-y-4 md:gap-y-[6px] mt-6">
            <div className="flex space-x-2 items-center">
              <GiCellarBarrels className="text-lime2 text-[16px] md:text-[20px]" />
              <p className="text-[14px] md:text-[17.5px] text-white/50 font-normal ml-3">
                3 Barrels of Oil
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <GiCoalWagon className="text-lime2 text-[16px] md:text-[20px]" />
              <p className="text-[14px] md:text-[17.5px] text-white/50 font-normal ml-3">
                1 ton of coal
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <RiGasStationFill className="text-lime2 text-[16px] md:text-[20px]" />
              <p className="text-[14px] md:text-[17.5px] text-white/50 font-normal ml-3">
                17,000 cubic feet of natural gas
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="hidden md:w-[56%] md:flex flex-wrap gap-2 md:gap-[5px] did-you-know-images">
          {/* Image 1 */}
          <div className="relative w-full md:w-[38%] h-[150px] md:h-[170px] group">
            <img
              className="w-full h-full object-cover"
              src="https://www.saferack.com/wp-content/uploads/2016/12/AdobeStock_115296235.jpeg"
              alt="3 Barrels of Oil"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-lime2 via-lime2/80 to-lime2/50 opacity-0 group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
              <span className="text-black drop-shadow-2xl text-[14px] md:text-[17px] font-semibold text-start">
                3 Barrels of Oil
              </span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative w-full md:w-[61%] h-[150px] md:h-[170px] group">
            <img
              className="w-full h-full object-cover"
              src="https://d2n41s0wa71yzf.cloudfront.net/wp-content/uploads/2022/04/04141338/bigstock-Red-Tanker-Ship-Loading-And-Un-320450173-scaled-e1638446956779.jpg"
              alt="17,000 cubic feet of natural gas"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-lime2 via-lime2/80 to-lime2/50 opacity-0 group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
              <span className="text-black drop-shadow-2xl text-[14px] md:text-[17px] font-semibold text-start">
                17,000 cubic feet of natural gas
              </span>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative w-full md:w-[50%] h-[150px] md:h-[170px] group">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.mos.cms.futurecdn.net/9fLL3kQGkLJg4RnNNfGuHM-1200-80.jpg"
              alt="Uranium pellet"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-lime2 via-lime2/80 to-lime2/50 opacity-0 group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
              <span className="text-black drop-shadow-2xl text-[14px] md:text-[17px] font-semibold text-start">
                Uranium pellet <br />
                (the size of a gummy bear)
              </span>
            </div>
          </div>

          {/* Image 4 */}
          <div className="relative w-full md:w-[49%] h-[150px] md:h-[170px] group">
            <img
              className="w-full h-full object-cover"
              src="https://image.chitra.live/api/v1/wps/ffe95db/45d63182-1db1-49f0-9f58-264e36e4a82b/6/coal-transfer-679x419.JPG"
              alt="1 ton of coal"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-lime2 via-lime2/80 to-lime2/50 opacity-0 group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300">
              <span className="text-black drop-shadow-2xl text-[14px] md:text-[17px] font-semibold text-start">
                1 ton of coal
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDidYouKnow;
