import React from "react";

export default function Label({ htmlfor, children }) {
  return (
    <label htmlFor={htmlfor} className="block mb-2">
      {children}
    </label>
  );
}
