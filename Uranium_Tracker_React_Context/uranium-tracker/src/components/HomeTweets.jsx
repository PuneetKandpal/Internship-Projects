import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeTweets = ({ homeData }) => {
  const tweetsRef = useRef(null);
  const tweetCardsRef = useRef([]);

  useEffect(() => {
    const tweetsElement = tweetsRef.current;

    // Animate the Tweets section
    gsap.from(tweetsElement, {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: tweetsElement,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate the Tweet cards
    gsap.from(tweetCardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: tweetCardsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      className="w-full lg:w-[40%] h-full tweets overflow-hidden"
      ref={tweetsRef}
    >
      <h2 className="flex items-center text-[1rem] md:text-[1.4rem] frank mb-6 lg:mb-12 font-medium text-white capitalize">
        <i className="ri-menu-4-fill text-lime1 text-bold text-xl mr-2"></i>
        Latest Uranium Tweets
      </h2>

      <div className="flex flex-col gap-y-4 tweet-cards">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-full h-[120px] bg-white border-2"
            ref={(el) => (tweetCardsRef.current[index] = el)}
          />
        ))}

        <h4 className="flex justify-end mr-[-4px]">
          <a
            href="#"
            className="text-white/40 lato hover:text-lime1 text-[11px] md:text-[13.4px] flex items-center"
          >
            More Tweets<i className="ri-arrow-right-s-line ml-1 text-lg"></i>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default HomeTweets;
