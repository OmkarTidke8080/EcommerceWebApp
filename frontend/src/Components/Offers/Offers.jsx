import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
function Offers() {
  return (
    <div
      className="offers mt-20  w-[65%] h-[60vh] flex m-auto p-[0px 140px] mb-[150px]  "
      style={{
        background:
          "linear-gradient(180deg, #fde1ff, rgba(225, 255, 234, 0.22) 60%)",
      }}
    >
      <div className="offers-left  flex-1 flex flex-col justify-center ">
        <h1 className="text-[#171717] font-medium text-[80px] ">Exclusive </h1>
        <h1 className="text-[#171717] font-medium text-[80px]">
          Offers For You
        </h1>
        <p className="text-[#171717] font-semibold text-[22px] ">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <div className="flex justify-center">
          <button className="w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-semibold mt-[30px] cursor-pointer ">
            Check Now
          </button>
        </div>
      </div>
      <div className="offers-right flex-1 flex items-center justify-end pt-[50px]">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
