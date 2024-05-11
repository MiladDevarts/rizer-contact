import React from "react";
import RizerLogo from "../../assets/logo/rizer-white.svg";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center max-w-[75rem] mx-auto py-[1.87rem]">
      <div className="w-[20%]">
        <a href="/" className="cursor-pointer">
          <img src={RizerLogo} alt="" />
        </a>
      </div>
      <div className="flex justify-center items-center w-[80%]">
        <div className="flex items-center gap-x-[2rem] px-[1.5rem] py-[1rem] bg-[#DBC8FF]/5 backdrop-blur-md text-[#7B7488] rounded-full border border-[#AA80FF]/10">
          <a href="#">Home</a>
          <a href="#">Plans</a>
          <a href="#">Product</a>
          <a href="#">Contact</a>
          <a href="#">About us</a>
        </div>
      </div>
      <div className="w-[20%] flex justify-end">
        <div className="flex items-center gap-4 text-[#7B7488] ">
          <a href="#">Login</a>
          <div class="btn">
            <a href="#">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
