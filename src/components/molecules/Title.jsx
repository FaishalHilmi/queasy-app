import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="font-bold text-2xl lg:text-4xl mb-4 lg:mb-6">{children}</h1>
  );
}
