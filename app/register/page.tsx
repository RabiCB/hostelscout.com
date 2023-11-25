"use client";

import { Button, Input } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Client, Account, ID } from "appwrite";
import { useRouter } from "next/navigation";
import CustomizedSnackbars from "../../features/snackbar"
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import { useState } from "react";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


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

  const [open, setOpen] = React.useState<boolean>(false);
  const router = useRouter();
  const [showpassword,setShowpassword]=useState(false)
  const [error,setError]=useState('')
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
        router.push("/login");
        setOpen(true)
        
      },
      function (error) {
        console.log(error);
        setError(error.message)
      }
    );
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
    <div className=" flex  bg-[#F5F5F7] p-4  items-center justify-center h-[100vh]">
      <div className="flex flex-col  bg-white shadow-lg rounded-[10px] py-4 ">
        <span className="text-center text-[#5C6574] text-xl font-bold ">Sign Up</span>
        <h1 className="text-center mt-2 text-[#5C6574] ">
          Welcome back! Please enter your details
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-[400px]:w-[334px] max-sm:w-[380px] max-md:w-[460px]  w-[500px]  mt-[20px]  p-8 gap-7 mx-2 mb-1 shadow-myshadow rounded-[8px] "
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
              <div className="relative flex items-center">
              <input
                id="password"
                className="border-[1px] border-[#DEDEDE] outline-[1px] outline-[#E63946] rounded-md p-2 w-full"
                placeholder="Enter your password"
                type={showpassword?"text":"password"}
                
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "password must be more than six character",
                  },
                })}>
                  
                </input>
                <span className="absolute right-4" onClick={()=>setShowpassword(!showpassword)}>{showpassword?<AiFillEyeInvisible/>:<AiFillEye/>}</span>
                </div>
            </div>
            {errors.password?.message && (
              <span className="text-red-600 ml-0.5 text-[10px] mt-1.5">
                {errors?.password?.message}
              </span>
            )}
          </div>
          <button className="bg-[#E63946] hover:bg-[#ce3340] py-2 rounded-[20px] text-white ">
            Sign Up
          </button>
          <span className="text-red-600 ml-0.5 text-[10px] mt-1 text-center">{error}</span> 
        </form>
       
        <div className="flex items-center justify-center ml-3 mt-1">
          <span className="text-sm text-[#5C6574] font-semibold mr-1">
            Already Have Account ?
          </span>
          <Link className="cursor-pointer text-[#E63946]" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
    <>
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Account created successfully please login
        </Alert>
      </Snackbar>
      </Stack>
    </>

    </>
  );
}
