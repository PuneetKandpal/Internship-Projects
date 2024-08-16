import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 bg-purple-500 rounded-full pointer-events-none z-50"
      style={{ top: 0, left: 0, transform: "translate(-50%, -50%)" }} // Center the cursor at the mouse pointer
    />
  );
};

export default AnimatedCursor;
