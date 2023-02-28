import React, { useState } from "react";
import loginFunc from "../../api/login";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center mt-20 ">
      <form className="my-auto">
        <div>
          <div className="text-sm font-bold text-gray-700 tracking-wide">
            Email Address
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="mike@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Password
            </div>
            <div>
              <a
                className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <input
            className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <button
            type="button"
            className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full 
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
            onClick={(e) => {
              loginFunc(email, password);
              console.log("func called");
            }}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
