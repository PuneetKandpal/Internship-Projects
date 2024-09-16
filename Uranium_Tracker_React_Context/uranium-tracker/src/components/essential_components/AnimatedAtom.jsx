import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedAtom = () => {
  const atomRef = useRef(null);
  const orbitRefs = useRef([]);
  const electronRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Animate orbits to rotate continuously
    orbitRefs.current.forEach((orbit, index) => {
      gsap.to(orbit, {
        rotation: 360,
        transformOrigin: "center",
        duration: (index + 1) * 8,
        ease: "linear",
        repeat: -1,
      });
    });

    // Animate electrons to pulse (scale effect)
    electronRefs.current.forEach((electron) => {
      gsap.to(electron, {
        scale: 1.2,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "ease-in-out",
      });
    });

    // Atom container animation (scaling and opacity)
    gsap.from(atomRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: atomRef.current,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      gsap.killTweensOf(atomRef.current);
      gsap.killTweensOf(orbitRefs.current);
      gsap.killTweensOf(electronRefs.current);
    };
  }, []);

  return (
    <div ref={atomRef} className="w-full md:w-[45%] hidden md:block">
      <div className="atom-container">
        <div className="nucleus"></div>

        {/* Electron Orbits */}
        <div className="orbit" ref={(el) => (orbitRefs.current[0] = el)}>
          <div className="electron" ref={(el) => (electronRefs.current[0] = el)}></div>
        </div>
        <div className="orbit" ref={(el) => (orbitRefs.current[1] = el)}>
          <div className="electron" ref={(el) => (electronRefs.current[1] = el)}></div>
        </div>
        <div className="orbit" ref={(el) => (orbitRefs.current[2] = el)}>
          <div className="electron" ref={(el) => (electronRefs.current[2] = el)}></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAtom;
