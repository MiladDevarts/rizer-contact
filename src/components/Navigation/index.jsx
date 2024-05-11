import React from "react";
import RizerLogo from "../../assets/logo/rizer-white.svg";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center max-w-[75rem] mx-auto my-[1.87rem]">
      <img src={RizerLogo} alt="" />
      <div className="flex items-center gap-x-[2rem] px-[1.5rem] py-[1rem] bg-[#DBC8FF]/5 text-[#7B7488] rounded-full border border-[#AA80FF]/10">
        <a href="#">Home</a>
        <a href="#">Plans</a>
        <a href="#">Product</a>
        <a href="#">Contact</a>
        <a href="#">About us</a>
      </div>
      <div className="flex items-center gap-x-[2rem] text-[#7B7488] ">
        <a href="#">Login</a>
        <a href="#">Get started</a>
      </div>
    </nav>
  );
};

export default Navigation;
