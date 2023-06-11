"use client"

import { Button } from "@mui/material"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

import Box from '@mui/material/Box';
import ImageUpload from "../imageuploder/page";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BsCloudUpload } from "react-icons/bs"
type formData = {
    propertyname: string;
    ownername: string;
    contact?: number
    description?: string
    email: string;
};
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
    
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};


export default function Addproperty() {
    const [open, setOpen] = useState(false)

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<formData>();

    const onsubmit = (data: any) => {

    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className="pt-4 max-md:px-3 px-6 h-full pb-4">
                <span className="text-center my-2  flex justify-center items-center text-gray-600 ">fill the from below to add your property </span>
                <div>
                    <form className=" max-md:px-2 w-full  px-6 py-2 flex flex-col gap-3 " onSubmit={handleSubmit(onsubmit)}>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px]" htmlFor="name">
                                Property name
                            </label>
                            <input type="text" id="propertyname" {...register("propertyname", {
                                required: "Property name is required",

                            })} className="p-1.5 border-[1px] border-gray-200 rounded-md outline-none" placeholder="enter your property name" />
                            {errors.propertyname?.message && (
                                <span className="text-red-600 text-[10px] mt-1.5 ml-0.5">
                                    {errors?.propertyname?.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="location" className="text-[10px] ">Property location:</label>
                            <input type="text" placeholder="enter your property location" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="location" className="text-[10px] "> Owner`s name:</label>
                            <input type="text" placeholder="enter property owner name" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="location" className="text-[10px] ">Contact number:</label>
                            <input type="number" placeholder="owner contact number" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="location" className="text-[10px] "> Email:</label>
                            <input type="email" placeholder="email" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[10px]" htmlFor="property">Property rent:</label>
                            <input type="text" placeholder="enter your property rent" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px]" htmlFor="description">Description about Property:</label>
                            <textarea placeholder="enter your property's description" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px]" htmlFor="property">Upload your Property image</label>
                            <div className="border-2  h-32 bg-white w-full rounded-md ">
                                <div onClick={()=>setOpen(true)} className="flex items-center justify-center gap-2 h-full cursor-pointer border-[1px] border-gray-200">
                                    <BsCloudUpload size={20} />
                                    <span>upload</span>
                                </div>

                            </div>
                        </div>

                        <button type="submit" className="p-1.5 bg-red-500 rounded-md mt-2 text-white w-full">Submit</button>



                    </form>

                </div>


            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box  sx={style}>
                    <div className="min-w-[340px] ">
                    <ImageUpload />
                    </div>
                   
                </Box>

            </Modal>
        </>
    )

}











