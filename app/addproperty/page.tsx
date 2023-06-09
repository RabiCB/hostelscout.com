"use client"

import { Button } from "@mui/material"
import React from "react"
import { useForm } from "react-hook-form"


type formData = {
    propertyname: string;
    ownername: string;
    contact?: number
    description?: string
    email: string;
};

export default function Addproperty() {

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<formData>();

    const onsubmit = (data: any) => {

    }
    return (
        <div className="pt-4 px-6 bg-gray-200 h-full pb-4">
            <span className="text-center my-2 ">fill the from below to add your property </span>
            <div>
                <form className=" max-md:px-2 w-full  px-6 py-2 flex flex-col gap-3 " onSubmit={handleSubmit(onsubmit)}>
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px]" htmlFor="name">
                            Property name
                        </label>
                        <input type="text" id="propertyname" {...register("propertyname", {
                            required: "Property name is required",

                        })} className="p-1.5 rounded-md outline-red-500" placeholder="enter your property name" />
                        {errors.propertyname?.message && (
                            <span className="text-red-600 text-[10px] mt-1.5 ml-0.5">
                                {errors?.propertyname?.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="location" className="text-[10px] ">Property location:</label>
                        <input type="text" placeholder="enter your property location" className="p-1.5 rounded-md outline-red-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="location" className="text-[10px] "> Owner`s name:</label>
                        <input type="text" placeholder="enter property owner name" className="p-1.5 rounded-md outline-red-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="location" className="text-[10px] ">Contact number:</label>
                        <input type="number" placeholder="owner contact number" className="p-1.5 rounded-md outline-red-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="location" className="text-[10px] "> Email:</label>
                        <input type="email"  placeholder="email" className="p-1.5 rounded-md outline-red-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px]" htmlFor="property">Property rent:</label>
                        <input type="text" placeholder="enter your property rent" className="p-1.5 rounded-md outline-red-500" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[10px]" htmlFor="description">Description about Property:</label>
                        <textarea placeholder="enter your property's description" className="p-1.5 rounded-md outline-red-500" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-[10px]" htmlFor="property">Property image url:</label>
                        <input type="text" placeholder="image url" className="p-1.5 rounded-md outline-red-500" />
                    </div>
                    <button type="submit" className="p-1.5 bg-red-500 rounded-md mt-2 text-white w-full">Submit</button>



                </form>

            </div>

        </div>
    )

}