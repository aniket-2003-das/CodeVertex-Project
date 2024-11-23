// import React from 'react';
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import { Button } from '../components/Button';

const CodeBlocks2 = () => {

  const heading = (
    <div className="lg:text-4xl text-3xl md:text-3xl font-semibold w-11/12 max-w-maxContent text-white">
      Start
      <HighlightText text={"coding in seconds"} /> 
    </div>
  );

  const subheading = (
    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
  );

  const ctabtn1 = {
    btnText: "Continue Lesson",
    link: "/signup",
    active: true,
  };

  const ctabtn2 = {
    btnText: "Learn More",
    link: "/signup",
    active: false,
  };

  const codeblock = (
    `import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type-animation";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`
  );

  const backgroundGradient = (
    <div className="codeblock2 absolute"></div>
  );

  const codeColor = "text-white";

  return (

    <div className='flex  justify-center items-center w-full  lg:px-44 md:px-12 px-5 mt-0 md:mt-24'>
      <div className='w-11/12 max-w-maxContent '>
        <div className={`flex lg:flex-row my-20 justify-between flex-col-reverse lg:gap-10 gap-10 `}>
          <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
            {backgroundGradient}
            <div className="text-center flex flex-col   w-[10%] select-none text-gray-400 font-inter font-bold ">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
              <p>11</p>
            </div>
            <div
              className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
            >
              <TypeAnimation
                sequence={[codeblock, 1000, ""]}
                cursor={true}
                repeat={Infinity}
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                }}
                omitDeletionAnimation={true}
              />
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
            {heading}
            <div className="text-gray-300 text-base font-bold w-[85%] -mt-3">
              {subheading}
            </div>
            <div className="flex flex-wrap gap-7 mt-7">
              <Button>
                <div className="flex items-center gap-2 text-white">
                  {ctabtn1.btnText}
                  <FaArrowRight />
                </div>
              </Button>
              <Button >
                <div className='text-white'>

                {ctabtn2.btnText}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const HighlightText = ({ text }) => {
  return (
    <span className="bg-[radial-gradient(100%_100%_at_center_center,rgb(140,69,255,.5)_55%,rgb(14,0,36,.5)_75%,transparent)] bg-[rgb(14,0,36,.5)]    text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default CodeBlocks2;