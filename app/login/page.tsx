"use client";

import { Button, Input } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Client, Account, ID } from "appwrite";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
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
export default function Login() {
  const [error, setError] = useState("");
   const [showpassword,setShowpassword]=useState(false)
  const [open,setOpen]=React.useState(false)
  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: any) => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject("647b1d99a6be71182293"); // Your project ID

    const account = new Account(client);

    const promise = account.createEmailSession(data?.email, data?.password);

    promise.then(
      function (response) {
        console.log(response);
        router.push("/");
        setOpen(true)
      },
      function (error) {
        console.log(error);
        setError(error);
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
      <div className="flex flex-col  bg-white shadow-lg rounded-[10px] py-4">
        <span className="text-center text-[#5C6574] text-xl font-bold ">
          Sign In
        </span>
        <span className="text-center mt-2 text-[#5C6574] ">
          Welcome back! Please enter your details
        </span>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-[400px]:w-[360px] max-sm:w-[380px] max-md:w-[460px]  w-[500px]  mt-[40px]  p-8 gap-7 m-2 shadow-myshadow rounded-[8px]"
        >
          <div className="flex flex-col">
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2" >

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
            Log in
          </button>
        </form>
        <span>{error}</span>
        <div className="flex items-center justify-center ml-3 mt-1">
          <span className="text-sm  text-[#5C6574] font-semibold mr-1">
            Don`t have an Account ?
          </span>
          <Link className="cursor-pointer text-[#E63946]" href="/register">
            register
          </Link>
        </div>
      </div>
    </div>

    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         Logged in successfully
        </Alert>
      </Snackbar>
      </Stack>
    
    </>
  );
}
