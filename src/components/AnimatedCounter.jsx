import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center">
      <h1
        ref={textRef}
        className="
          text-white font-bold text-center
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl
        "
      >
        My Projects
      </h1>
    </div>
  );
}
