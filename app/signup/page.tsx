"use client";

import { Button, Input } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Client, Account, ID } from "appwrite";
import { useRouter } from "next/navigation";

type formData = {
  email: string;
  name: string;
  password: string;
};
export default function Register() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<formData>();

  const router = useRouter();
  const onSubmit = (data: any) => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject("647b1d99a6be71182293"); // Your project ID

    const account = new Account(client);

    const promise = account.create(
      ID.unique(),

      data?.email,
      data?.password,
      data?.name
    );

    promise.then(
      function (response) {
        console.log(response);
        router.push("/");
        alert("registered successfully");
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return (
    <div className=" flex  bg-[#F5F5F7] p-4  items-center justify-center h-[100vh]">
      <div className="flex flex-col  bg-white shadow-lg rounded-[10px] py-4 ">
        <span className="text-center text-[#5C6574] text-xl font-bold ">Sign Up</span>
        <span className="text-center mt-2 text-[#5C6574] ">
          Welcome back! Please enter your details
        </span>

<<<<<<< HEAD:app/register/page.tsx
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-[400px]:w-[360px] max-sm:w-[380px] max-md:w-[460px]  w-[500px]  mt-[20px]  p-8 gap-7 m-2 shadow-myshadow rounded-[8px] "
        >
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 ">
              <label className="text-[#5C6574] font-[500] " htmlFor="username">
                Username
              </label>
              <input
                id="username"
                className="border-[1px] border-[#DEDEDE] outline-[1px] outline-[#E63946] rounded-md p-2 w-full"
                placeholder="Enter your username"
                {...register("name", {
                  required: "username is required",
                  minLength: {
                    value: 4,
                    message: "username must be more than 4 character",
                  },
                  maxLength: {
=======
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-[400px]:w-[360px] max-sm:w-[380px] max-md:w-[460px]  w-[500px]  mt-[40px]  p-8 gap-7 m-2 shadow-myshadow rounded-[8px] bg-gray-200'>
        <div className="flex flex-col">
            <input
              className="border-1 border-black rounded-md p-2 w-full"
              placeholder="enter your username"

              {...register("name", {
                required: 'username is required',
                minLength: {
                  value: 4,
                  message: "username must be more than 4 character"
                },
                maxLength: {
>>>>>>> e4bf776d0d65dab3f7915c8cb549b2b4b9deb644:app/signup/page.tsx
                    value: 20,
                    message: "username must be less than 20 character",
                  },
                })}
              />
            </div>
            {errors.name?.message && (
              <span className="text-red-600 text-[10px] mt-1.5 ml-0.5">
                {errors?.email?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 ">
              <label className="text-[#5C6574] font-[500] " htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                className="border-[1px] border-[#DEDEDE] outline-[1px] outline-[#E63946] rounded-md p-2 w-full"
                placeholder="Enter your email"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "email is invalid",
                  },
                })}
              />
            </div>
            {errors.email?.message && (
              <span className="text-red-600 text-[10px] mt-1.5 ml-0.5">
                {errors?.email?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-2">
              <label className="text-[#5C6574] font-[500] " htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="border-[1px] border-[#DEDEDE] outline-[1px] outline-[#E63946] rounded-md p-2 w-full"
                placeholder="Enter your password"
                type="password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must be more than 6 characters",
                  },
                  maxLength: {
                    value: 16,
                    message: "password must be less than 16 characters",
                  },
                })}
              />
            </div>
            {errors.password?.message && (
              <span className="text-red-600 ml-0.5 text-[10px] mt-1.5">
                {errors?.password?.message}
              </span>
            )}
          </div>

          {/* <Button
            style={{ borderRadius: "6px", backgroundColor: "black" }}
            type="submit"
            variant="contained"
            className="bg-red-700"
          >
            Signup
          </Button> */}
          <button className="bg-[#E63946] hover:bg-[#ce3340] py-2 rounded-[20px] text-white ">
            Sign Up
          </button>
        </form>
<<<<<<< HEAD:app/register/page.tsx
        <div className="flex items-center justify-center ml-3 mt-1">
          <span className="text-sm text-[#5C6574] font-semibold mr-1">
            Already Have Account ?
          </span>
          <Link className="cursor-pointer text-[#E63946]" href="/login">
            Login
          </Link>
=======
        <div className="flex items-center ml-3 mt-1">
          <span className="text-sm font-semibold mr-1">Don`t have an Account ?</span>
          <Link className="cursor-pointer text-blue-600" href="/login">login</Link>
>>>>>>> e4bf776d0d65dab3f7915c8cb549b2b4b9deb644:app/signup/page.tsx
        </div>
      </div>
    </div>
  );
}
