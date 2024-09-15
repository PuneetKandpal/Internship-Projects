import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import herovdo from "../assets/hero.mp4";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "../store/slices/apiSlice";
import Loader from "./Loader"; // Import your loader component

const HomeHero = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.api.home);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const flexRef = useRef(null);
  const buttonRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchHomeData());
    }

    if (status === "succeeded") {
      setIsLoading(false); // Set loading to false when data is fetched
    }

    // GSAP animations
    if (!isLoading) {
      const tl = gsap.timeline();
      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          flexRef.current,
          { opacity: 0, y: 50, duration: 1, ease: "power2.out" },
          "-=0.8"
        )
        .from(
          buttonRef.current,
          {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.8"
        );

      // Subtle zoom-in effect for background video
      gsap.from(videoRef.current, {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, [status, dispatch, isLoading]);

  // Show the loader while loading is true
  if (isLoading) {
    return <Loader />;
  }

  // If not loading, return the default component
  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden px-5 sm:px-8 md:px-20 lg:px-32 xl:px-40 w-full h-fit py-20 md:h-[88vh] flex items-center justify-start bg-black mt-20"
    >
      {/* Background video and gradient overlay */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={herovdo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover object-left pl-40 opacity-90"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-black1/80 to-black1/20"></div>
      </div>

      {/* Text content */}
      <div className="relative z-10 text-white w-full sm:w-[90%] md:w-[80%] lg:w-[72%]">
        <h1
          ref={titleRef}
          className="text-[30px] sm:text-[37px] md:text-[48px] lg:text-[55px] frank font-medium capitalize tracking-[-0.5px] leading-[36px] sm:leading-[46px] md:leading-[58px] lg:leading-[67px] sm:mb-5 drop-shadow-md"
        >
          Stay ahead with real-time uranium news, price And analysis
        </h1>

        <div
          ref={flexRef}
          className="flex flex-col sm:flex-row gap-y-2 sm:gap-x-3 items-start sm:items-center mb-10 sm:mb-12 justify-start ml-1"
        >
          <h1 className="text-lime1 capitalize font-semibold text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] mt-4 md:mt-0">
            Spot Uranium:
          </h1>
          <h2 className="text-[13px] mt-[-7px] sm:mt-0 sm:text-[14px] md:text-[16px] lg:text-[17.5px] text-white/90 font-medium lato">
            {homeData?.uranium_spot_price ?? "Loading..."}
          </h2>
        </div>

        <NavLink
          to="/investments"
          ref={buttonRef}
          className="hero-btn bg-lime1 ml-1 text-black text-[14px] sm:text-[15px] px-3 sm:px-6 py-2 sm:py-3 lato font-semibold hover:bg-lime2 transition-all"
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default HomeHero;
