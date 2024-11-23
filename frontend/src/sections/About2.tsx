import React from 'react'
import {  CardSpotlightDemo } from './card';

const About2 = () => {
    
  const heading = (
    <div className="lg:text-4xl text-3xl md:text-3xl font-semibold w-11/12 max-w-maxContent   text-white overflow-hidden relative">
      "Our
      <HighlightText text={"Mission "} /> Our Values
    </div>
  );

  const subheading = (
    "Welcome to our world! We're a team of innovators, creators, and problem-solvers passionate about making a difference. Our mission is to empower individuals and businesses to reach new heights. Our journey began with a simple idea: to bridge the gap between technology and human connection. Founded by a group of friends who shared a vision for a better future, our company has grown into a dynamic community of like-minded individuals.");

 
  return (
    <div>
    <div className='flex  justify-center items-center w-full  lg:px-44 md:px-12 px-5 md:mt-12 mt-10'>
    <div className='w-10/12 max-w-maxContent '>
      <div className={`flex lg:flex-row my-20 justify-between flex-col lg:gap-10 gap-10 `}>
           <CardSpotlightDemo />
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
          {heading}
          <div className=" text-gradient text-lg leading-8 font-semibold w-[85%] -mt-3">
            {subheading}
          </div>
         
        </div>
        
   
      </div>
    </div>

    </div>
    </div>
  )
}

export default About2

const HighlightText = ({text}:any) => {
    return (
      <span className="bg-[radial-gradient(100%_100%_at_center_center,rgb(140,69,255,.5)_55%,rgb(14,0,36,.5)_75%,transparent)] bg-[rgb(14,0,36,.5)]  text-transparent bg-clip-text font-bold">
        {" "}
        {text}
      </span>
    );
  };
  