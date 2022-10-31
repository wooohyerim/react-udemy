import React from "react";

const Button = ({ text, type, onClick }) => {
  return (
    <button
      className="cursor-pointer border-none rounded-xl py-2.5 px-5 text-lg whitespace-nowrap bg-slate-200 
      "
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "default",
};

export default Button;
