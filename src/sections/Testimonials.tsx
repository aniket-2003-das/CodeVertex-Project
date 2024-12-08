import React from "react";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director .. Quantum",
    avatarImg: avatar1,
    course: "Mern Stack",
    ratings: 3,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder .. Pulse",
    avatarImg: avatar2,
    course: "Javascript Fundamentals",
    ratings: 5,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product .. Innovate",
    avatarImg: avatar3,
    course: "Full Stack",
    ratings: 3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO .. Tech Solutions",
    avatarImg: avatar4,
    course: "Python",
    ratings: 4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20  md:py-24 ">
      <div className="container">
        <h2 className="text-5xl  md:text-6xl text-center tracking-tighter font-medium text-white">
          What our Student Says
        </h2>
        <p className="text-white/70 text-lg md:text-xl  text-center mt-5 tracking-tight max-w-2xl mx-auto">
          Discover inspiration and insights through recent reviews from our
          students. Their success stories reflect the transformative journey of
          learning and growth with Codevertex.
        </p>

        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] flex  w-3/5 mx-auto">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0%",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex gap-5 flex-none px-5  "
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(148,69,255,.3),black)] max-w-xs md:max-w-md flex-none  text-white"
              >
                <div className="text-lg md:text-2xl tracking-tight word-wrap">
                  <span className="text-white/50  text-sm">
                    Course: {testimonial.course}
                  </span>
                  <br />
                  {testimonial.text}
                  <br />
                  <div className="flex items-center gap-2 mt-3">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <FaStar
                          key={index}
                          className={`text-${
                            index < testimonial.ratings
                              ? "yellow-500"
                              : "gray-400"
                          }`}
                        />
                      ))}
                    <span className="text-white/50 text-lg">{`${testimonial.ratings}/5`}</span>
                  </div>
                </div>
                <div className="flex items-center mt-5 gap-3 ">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg ">
                    <img
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="h-11 w-11 rounded-lg grayscale   "
                    />
                  </div>
                  <div className=" ">
                    <div className="">{testimonial.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
