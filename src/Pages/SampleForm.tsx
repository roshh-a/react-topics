import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SampleForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{
    userNameOrEmail: string;
    password: string;
  }>({
    userNameOrEmail: "rosh",
    password: "rosh",
  });
  const userNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    userNameRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
      <h1 className="font-bold text-2xl">Sign In</h1>
      <form
        className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
        action=""
      >
        <label className="font-semibold text-xs" htmlFor="usernameField">
          Username or Email
        </label>
        <input
          ref={userNameRef}
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="text"
          value={formData.userNameOrEmail}
        />
        <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
          Password
        </label>
        <input
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
          value={formData.password}
        />
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700 cursor-pointer"
        >
          Login
        </button>
        <div className="flex mt-6 justify-center text-xs">
          <a className="text-blue-400 hover:text-blue-500" href="">
            Forgot Password
          </a>
          <span className="mx-2 text-gray-300">/</span>
          <a className="text-blue-400 hover:text-blue-500" href="">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};
