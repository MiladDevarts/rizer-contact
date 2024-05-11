import React from "react";

const Input = ({ id, type = "text", label, placeholder }) => {
  return (
    <div className="w-full input-group">
      <label htmlFor={id}>{label}</label>
      <input className="w-full" type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
