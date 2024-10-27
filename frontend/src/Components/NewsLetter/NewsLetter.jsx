import React from "react";

function NewsLetter() {
  return (
    <div
      className="newsletter w-[65%] h-[40vh] flex flex-col justify-center items-center m-auto p-[0px 140px] mb-[150px] gap-[30px] "
      style={{
        background:
          "linear-gradient(180deg, #fde1ff, rgba(225, 255, 234, 0.22) 60%)",
      }}
    >
      <h1 className="text-[#454545] font-semibold text-[55px] ">
        Get Exclusive Offers on Your Email
      </h1>
      <p className="text-[#454545] text-[20px] ">
        Subscribe to our newsLetter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-1 ">
        <input
          className="w-[500px] ml-[30px] border-none outline-none text-[#616161] font-serif text-[16px]"
          type="email"
          placeholder="Your Email id"
        />
        <button className="w-[210px] h-[70px] bg-black text-white text-[16px] cursor-pointer ">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
