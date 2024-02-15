import React, { useState, useEffect } from "react";
import useUserDetails from "../../hooks/useUserDetails";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUserMutation } from "../../api/auth/useUpdateUserMutation";
import useProfile from "../../hooks/useProfile";

const Profile = () => {
  const {
    updateUserDetailsHandler,
    isFormValid,
    register,
    isEditing,
    setIsEditing,
    firstName,
    lastName,
    onCancelHandler,
    userData,
    email,
    handleSubmit,
    errors,
  } = useProfile();

  return (
    <div className="flex w-screen h-[90vh]  items-center justify-center overflow-hidden">
      <div className="flex flex-col h-auto w-[30rem] items-center bg-gray-300 p-4 rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold sm:text-center text-left w-full font-poppins">
          Personal Details
        </h2>
        {isEditing && userData ? (
          <form className=" w-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-2 h-20 sm:w-1/2 w-full">
              <label
                htmlFor="firstName"
                className="text-sm font-semibold font-poppins"
              >
                First name
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName")}
                className={`h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 font-poppins ${
                  errors.firstName ? "border-1 border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs font-quickSand h-1">
                  {errors?.firstName?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 h-20 sm:w-1/2 w-full">
              <label
                htmlFor="lastName"
                className="text-sm font-semibold font-poppins"
              >
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                {...register("lastName")}
                className={`h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 font-poppins ${
                  errors.lastName ? "border-1 border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs font-quickSand h-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 h-20 sm:w-1/2 w-full">
              <label
                htmlFor="password"
                className="text-sm font-semibold font-poppins"
              >
                Password
              </label>
              <input
                id="password"
                placeholder="*********"
                type="password"
                {...register("password")}
                className={`h-8 focus:outline-none px-4 text-sm rounded-md border border-black shadow-xl text-gray-700 font-poppins ${
                  errors.password ? "border-1 border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs font-quickSand h-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex space-x-4 mt-8">
              <button
                disabled={!isFormValid}
                onClick={handleSubmit(updateUserDetailsHandler)}
                className={`text-white font-bold py-2 px-4 rounded font-poppins ${
                  isFormValid
                    ? "bg-blue-500 hover:bg-blue-700"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                Update
              </button>
              <button
                onClick={onCancelHandler}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded font-poppins"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className=" flex flex-col gap-2 ">
              <div className="flex gap-2">
                <span className="font-bold font-poppins">Name:</span>{" "}
                <span className="font-poppins">
                  {firstName}
                  <span className="font-poppins"> {lastName}</span>
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold font-poppins">Email:</span>{" "}
                <span>{email}</span>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-poppins"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
