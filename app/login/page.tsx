"use client"

import { Button, Input } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"

type formData = {
  email: string,
  password:string,
}
export default function Page() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<formData>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className=" flex flex-1 items-center justify-center h-[80vh]">

    
      <form className="flex flex-col gap-4 w-[400px] border-2 border-gray-400 rounded-lg p-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border-4 rounded-md"

          {...register("email", {
            required: 'email is required'
          })}
          data-error={errors?.email?.message?.toString()}
        />
        {
          errors.email?.message && (
            <span>{errors?.email?.message}</span>
          )
        }
        <input
          className="border-4 rounded-md"

          {...register("password", {
            required: 'password is required'
          })}
          data-error={errors?.password?.message?.toString()}
        />
        {
          errors.password?.message && (
            <span>{errors?.password?.message}</span>
          )
        }
        <button type="submit" >submit</button>
      </form>
    </div>
  );
}