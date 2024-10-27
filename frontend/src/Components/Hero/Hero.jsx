import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero flex">
      <div className="hero-left mr-60 flex flex-col justify-center gap-5 pl-[180px] leading-[1.1]">
        <h2 className="text-[#090909] text-[26px] font-semibold">
          New Arrivals Only
        </h2>
        <div className="flex flex-col items-center">
          <div className="hero-hand-icon mr-28 flex items-center gap-2">
            <p  className="text-[#171717]  text-[100px]">New</p>
            <img className="w-[105px]" src={hand_icon} alt="hand-icon" />
          </div>
          <div>
            <p className="text-[#171717] text-[100px] ">collections</p>
            <p className="text-[#171717] ml-10 text-[100px] ">for everyone</p>
          </div>
        </div>

        <div className="hero-latest-btn ml-10 flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow icon" />
        </div>
      </div>

      <div className="hero-right flex-1 flex justify-center align-middle ">
        <img src={hero_image} alt="Hero" className="object-cover h-full" />
      </div>
    </div>
  );
}

export default Hero;
