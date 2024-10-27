import React from "react";

function LoginSignUp() {
  return (
    <div className="loginsignup w-[100%] h-80vh] bg-[#fce3fe] pt-[100px] ">
      <div className="loginsignup-container w-[580px] h-[600px] bg-white m-auto p-[40px] py-[60px] ">
        <h1 className="m-[20px] ">Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-[29px] mt-[30px]">
          <input
            className="h-[72px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[18px]"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="h-[72px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[18px]"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="h-[72px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[18px]"
            type="password"
            placeholder="Your Password"
          />
        </div>

        <button className="w-full h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-medium cursor-pointer">Sign Up</button>
        <p className="loginsignup-login mt-[20px] text-[#5c5c5c] text-[18px] font-medium ">
          Already have an account? <span className="text-[#ff4141] font-medium ">Login Here</span>
        </p>
        <div className="login-signup-agree flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-medium">
        <input type="checkbox" />  <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
