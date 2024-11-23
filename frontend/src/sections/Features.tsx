import { DotLottiePlayer } from "@dotlottie/react-player";
// import productImage from '../assets/product-image.png'
import productImage from "../assets/product-image.png";
import React from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];
// w-5/6  mx-auto
export const Features = () => {
  return (
    <section className="py-20 md:py-24  md:px-52 px-5">
      <div className="container">
        <h2 className="text-5xl md:text-6xl  font-medium text-center tracking-tighter">
          elevate Lorem, ipsum dolor.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto  tracking-tighter mt-5 text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo magnam
          ab itaque unde! Cumque, esse! Lorem ipsum dolor sit amet.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3 ">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1"
            >
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black  font-semibold ">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3 ">
          <div className="aspect-video  bg-cover border border-white/20 rounded-lg">
            <img
              src={productImage}
              alt="Product Image"
              className="w-full  md:h-[600px] h-[300px]  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
