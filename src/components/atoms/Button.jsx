import React from "react";

export default function Button({ handle, children }) {
  return (
    <button
      className="w-full bg-fourth font-medium text-white py-3 rounded-md"
      onClick={handle}
    >
      {children}
    </button>
  );
}
