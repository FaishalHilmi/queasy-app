import React from "react";

export default function Button({ handle, children, className }) {
  const buttonClassName = {
    primary: "w-full bg-fourth font-medium text-white py-3 rounded-md",
    secondary: "bg-fourth text-white py-2 px-5 rounded-md",
    third: "border border-fourth py-2 px-5 rounded-md",
    fourth: "py-2 px-6 text-white rounded-full border border-fourth",
  };

  return (
    <button className={buttonClassName[className]} onClick={handle}>
      {children}
    </button>
  );
}
