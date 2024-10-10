import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { Link } from "react-router-dom";

export default function FormSignin({
  handle,
  onChangeUsername,
  onChangePassword,
}) {
  return (
    <form onSubmit={handle}>
      <div className="flex flex-col gap-2">
        <div className="mb-3">
          <div className="input-wrapper">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={onChangeUsername}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-wrapper">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={onChangePassword}
            />
          </div>
        </div>
      </div>
      <div className="button flex flex-col justify-center mt-6">
        <button className="w-full bg-fourth text-white py-2 rounded-md">
          Sign In
        </button>
        <Link to="/" className="mx-auto mt-6 underline">
          Return to Home
        </Link>
      </div>
    </form>
  );
}
