import React from 'react'
import {  CardSpotlightDemo } from './card';


const About = () => {
    
  const heading = (
    <div className="lg:text-4xl text-3xl md:text-3xl font-semibold w-11/12 max-w-maxContent   text-white overflow-hidden relative">
      "Our
      <HighlightText text={"Mission"} /> Our Values"
    </div>
  );

  const subheading = (
  "We empower students with real-world experience through internships, ensuring they are industry-ready from day one. . We believe that experience is the best teacher, and through hands-on learning opportunities, students not only gain technical experience but also develop critical thinking and team work.");

 
  return (
    <div>
      
    <div className='flex  justify-center items-center w-full  lg:px-44 md:px-12 px-5 md:mt-24 mt-10'>
    <div className='w-10/12 max-w-maxContent '>
      <div className={`flex lg:flex-row my-20 justify-between flex-col lg:gap-10 gap-10 `}>
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
          {heading}
          <div className=" text-gradient text-lg leading-8 font-semibold w-[85%] -mt-3">
            {subheading}
          </div>
         
        </div>
        {/* <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
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
        </div> */}
        <CardSpotlightDemo />
      </div>
    </div>

    </div>
    </div>
  )
}

export default About

const HighlightText = ({text}:any) => {
    return (
      <span className="bg-[radial-gradient(100%_100%_at_center_center,rgb(140,69,255,.5)_55%,rgb(14,0,36,.5)_75%,transparent)] bg-[rgb(14,0,36,.5)]  text-transparent bg-clip-text font-bold">
        {" "}
        {text}
      </span>
    );
  };
  