import React, { useRef } from "react";
import { Button } from "../../src/components/Button";
import Start from "../assets/stars.png"; // Import image
import { motion, useScroll, useTransform } from "framer-motion";
import ObjModel from "../components/ObjModel";
// import gridLines from "../assets/grid-lines.png";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <>
    
      <motion.section
        ref={sectionRef}
        className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_50%,black_90%,transparent)]"
        style={{
          backgroundImage: `url(${Start})`,
          backgroundPositionY,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(74%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_75%,transparent)] "></div>
        {/* <div
          className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(80%_80%_at_80%_15%,black,transparent)] transition duration-700 group-hover:opacity-0 "
          style={{
            backgroundImage: `url(${gridLines})`,
            opacity: 0.5, 
          }}
        ></div> */}

        {/* star ring 1  */}
        <motion.div
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{ rotate: "1turn" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/60"
        >
          <div className="absolute h-2 w-2  left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
          <div className="absolute h-2 w-2  left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 "></div>
          <div className="absolute h-5 w-5  left-full border border-white  rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center"></div>
          <div className="h-2 w-2 bg-white rounded-full  "></div>
        </motion.div>
        {/* star ring 2  */}
        <motion.div
          style={{
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            rotate: "-1turn",
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed "
        ></motion.div>
        {/* star ring 3  */}
        <motion.div
          style={{
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            rotate: "1turn",
          }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] opacity-20 rounded-full border border- white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
          <div className="absolute h-2 w-2  left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
          <div className="absolute h-2 w-2  left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        </motion.div>
         {/* model  */}
      <div className="cursor-pointer ">
        <ObjModel />
      </div>
        {/* text  */}
        <div className="container relative mt-16 ">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-8xl md:text-[85px] md:leading-none font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-white text-transparent bg-clip-text text-center"
          >
            Learn Build and Excell
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="text-lg md:text-xl  max-w-xl mx-auto text-white/90 mt-9 text-center"
          >
          Empowering Students with Cutting-Edge Internships and Expert Tech Training!
          </motion.p>
        </div>
     
      </motion.section>

    </>
  );
};
