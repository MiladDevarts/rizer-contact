import React from "react";

const Textarea = ({ id, label, placeholder }) => {
  return (
    <div className="w-full textarea-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        className="w-full"
        name={id}
        id={id}
        rows={3}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;
