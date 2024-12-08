"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import React from "react";
import { FaMinus } from "react-icons/fa";
import { AnimatePresence , motion } from "framer-motion";

const items = [
  {
    question: "What types of courses do you offer on your website?",
    answer:
      "We offer a wide range of courses in fields such as technology, business, healthcare, and more. Our courses are designed to help individuals gain new skills and knowledge to enhance their careers.",
  },
  {
    question: "Can I get hands-on experience with internships on your website?",
    answer:
      "Yes, we offer internships in various fields, allowing individuals to gain practical experience and apply their skills in real-world settings.",
  },
  {
    question: "What kind of training programs do you offer?",
    answer:
      "We offer training programs in areas such as leadership, communication, and technical skills. Our training programs are designed to help individuals improve their performance and advance in their careers.",
  },
  {
    question: "Are your courses and training programs online or offline?",
    answer:
      "We offer both online and offline courses and training programs, depending on the individual's preference and location.",
  },
  {
    question:
      "Do you offer any certification or recognition upon completion of courses or training programs?",
    answer:
      "Yes, we offer certification and recognition upon completion of our courses and training programs, which can be added to resumes and LinkedIn profiles to demonstrate skills and expertise.",
  },
];

const AccordianItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-7 border-b border-white/30  px-5"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div
   
          initial= {{
            opacity : 0,
            height: 0,
            marginTop: 0
        }}
          animate= {{
            opacity : 1,
            height: "auto",
            marginTop: "16px"
        }}
          exit= {{
            opacity : 0,
            height: 0,
            marginTop: 0
        }}
            
        >
          {answer}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom_left,rgb(148,69,255,.3),black)] py-[72px] sm:py-24  [mask-image:linear-gradient(to_top,transparent,black_20%,black_85%,transparent)] ">
      <div className="container">
        <h1 className="text-center text-5xl max-w-[648px] mx-auto  sm:text-6xl font-bold tracking-tighter ">
          Frequently Asked Questions
        </h1>
        <div className="mt-12 max-w-[648px] mx-auto ">
          {items.map(({ question, answer }) => (
            <AccordianItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
