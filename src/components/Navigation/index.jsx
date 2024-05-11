import React from "react";
import RizerLogo from "../../assets/logo/rizer-white.svg";

const Navigation = () => {
  return (
    <nav className="w-full flex justify-between items-center max-w-[75rem] mx-auto py-[1.87rem]">
      <div className="w-[20%]">
        <a href="/" className="cursor-pointer">
          <img src={RizerLogo} alt="" />
        </a>
      </div>
      <div className="flex justify-center items-center w-[80%]">
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Plans</a>
          <a href="#">Product</a>
          <a className="active" href="#">Contact</a>
          <a href="#">About us</a>
        </div>
      </div>
      <div className="w-[20%] flex justify-end">
        <div className="flex items-center gap-6 text-[#7B7488] ">
          <a href="#">Login</a>
          <div class="btn w-[8.25rem] h-[2.68rem]">
            <a href="#">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
