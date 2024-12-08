import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import startBg from "../assets/stars.png";
import gridLines from "../assets/grid-lines.png";

const useRelativeMousePosition = (to) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const borderedDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px , black , transparent)`;

  return (
    <section className="py-10 md:py-24 px-5 md:px-56" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderedDivRef}
          animate={{
            backgroundPositionX: startBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="border border-b border-white/15 rounded-xl group overflow-hidden relative h-auto md:py-8 py-4 flex items-center justify-center"
          style={{
            backgroundImage: `url(${startBg})`,
            backgroundPositionY,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(80%_80%_at_80%_15%,black,transparent)] transition duration-700 group-hover:opacity-0"
            style={{
              backgroundImage: `url(${gridLines})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay transition duration-700 opacity-0 group-hover:opacity-100"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines})`,
            }}
          ></motion.div>
          <div className="relative flex flex-wrap gap-y-8 md:gap-y-10 items-center justify-center gap-x-10">
            <div className="border border-white/15 py-6 px-8 rounded-xl group overflow-hidden relative w-[250px] flex-col text-center justify-center items-center bg-black hover:opacity-70">
              <p className="text-white text-2xl font-semibold mt-2">5M+</p>
              <p className="text-white/25 text-lg font-medium">Active Student</p>
            </div>
            <div className="hover:opacity-70 border border-white/15 py-6 px-8 rounded-xl group overflow-hidden relative w-[250px] flex-col text-center justify-center items-center bg-black">
              <p className="text-white text-2xl font-semibold mt-2">200+</p>
              <p className="text-white/25 text-lg font-medium">Courses</p>
            </div>
            <div className="hover:opacity-70 border border-white/15 py-6 px-8 rounded-xl group overflow-hidden relative w-[250px] flex-col text-center justify-center items-center bg-black">
              <p className="text-white text-2xl font-semibold mt-2">5+</p>
              <p className="text-white/25 text-lg font-medium">Awards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
