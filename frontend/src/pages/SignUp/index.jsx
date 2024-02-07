import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div >
      <div className="flex flex-col  items-center ">
        <p className="font-quickSand font-semibold sm:text-4xl text-xl text-white">Money Matters</p>
        <p className="font-quickSand font-medium sm:text-lg text-sm text-white">Transfer your money in ease</p>
      </div>
      <div className="bg-gray-100  shadow-2xl rounded-xl h-[35rem] w-[30rem] max-w-full  flex flex-col gap-5 px-6">
        <div className="flex flex-col gap-2 items-center pt-4">
          <h1 className="text-4xl font-semibold font-quickSand">Sign Up</h1>
          <p className="font-poppins sm:text-lg text-sm text-center">Sign Up to start your journey</p>
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="username" className="text-sm font-semibold font-poppins">
            Username
          </label>
          <input
            id="username"
            placeholder="Enter Username"
            type="text"
            className="h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 "
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="email" className="text-sm font-semibold font-poppins">
            Email
          </label>
          <input
            id="email"
            placeholder="Enter Email"
            type="text"
            className="h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 "
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="password" className="text-sm font-semibold font-poppins">
            Password
          </label>
          <input
            id="password"
            placeholder="Enter Password"
            type="text"
            className="h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 "
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="cnfPassword" className="text-sm font-semibold font-poppins">
            Confirm Password
          </label>
          <input
            id="cnfpassword"
            placeholder="Enter Confirm password"
            type="text"
            className="h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 "
          />
        </div>

        <div className="pt-5">
          <button className="bg-[#122140] p-2 rounded-lg text-white text-lg w-full font-semibold font-poppins">
            Sign Up
          </button>
        </div>
        <div className="flex justify-center gap-2 text-xs sm:text-base underline">
          <Link to="/sign_in" className="flex gap-2">
          <span>Already Have a account ?</span>
          <span>Signin</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
