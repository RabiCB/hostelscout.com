"use client"

import { Button, Input } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { Client, Account, ID } from 'appwrite';

type formData = {
  email: string,
  name:string,
  password: string,
}
export default function Page() {


  

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<formData>();
 
  const onClicked= (data:any) => {
    console.log("console",data)

    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject('647b1d99a6be71182293');               // Your project ID

    const account = new Account(client);

    const promise = account.create(
      ID.unique(),
      
      "rollinrabin123@gmail.com",
      "rabindra Bhandari",
      "rabinbhn",

    );

    promise.then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });
  }
  const onSubmit=(data:any)=>{

  }

  return (
    <div className=" flex flex-1 items-center justify-center h-full">
      <div className="flex flex-col mb-3 mt-10 p-2">
        <span className="text-center font-semibold ">Sigin With Email and Password</span>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-[400px]:w-[360px] max-sm:w-[380px] max-md:w-[460px]  w-[500px]  mt-[40px]  p-8 gap-7 m-2 shadow-myshadow rounded-[8px] bg-gray-200'>
        
          <div className="flex flex-col">
            <input
              className="border-1 border-black rounded-md p-2 w-full"
              placeholder="enter your email"

              {...register("email", {
                required: 'email is required',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "email is invalid"
                }
              }
              )
              }

            />
            {
              errors.email?.message && (
                <span className="text-red-600 text-[10px] mt-1.5 ml-0.5">{errors?.email?.message}</span>
              )
            }
          </div>
          <div className="flex flex-col">
            <input
              className="border-1  border-black rounded-md p-2 w-full"
              placeholder="enter your password"
              type="password"

              {...register("password", {
                required: 'password is required',
                minLength: {
                  value: 6,
                  message: "password must be more than six character",

                }
              })}


            />
            {
              errors.password?.message && (
                <span className="text-red-600 ml-0.5 text-[10px] mt-1.5">{errors?.password?.message}</span>
              )
            }
          </div>

          <Button onClick={onClicked} style={{ borderRadius: "6px", backgroundColor: "black" }} type="submit" variant="contained">login</Button>
        </form>
        <div className="flex items-center ml-3 mt-1">
          <span className="text-sm font-semibold mr-1">Don`t have an Account ?</span>
          <Link className="cursor-pointer text-blue-600" href="/signup">register</Link>
        </div>
      </div>
    </div>
  );
}