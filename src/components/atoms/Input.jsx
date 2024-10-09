import React from "react";

export default function Input({ type, name, placeholder, onChange }) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      className="border rounded-md bg-primary text-white w-full py-2 lg:py-3 px-4 outline-none"
      required
    />
  );
}
