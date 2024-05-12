import React from "react";

const Input = ({ id, type = "text", label, placeholder, onfocus }) => {
  return (
    <div className="w-full input-group">
      <label htmlFor={id}>{label}</label>
      <input
        onFocus={onfocus}
        className="w-full"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
