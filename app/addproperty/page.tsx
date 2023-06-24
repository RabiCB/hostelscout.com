"use client"

import { Button } from "@mui/material"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Client, Databases,ID } from "appwrite";
import Box from '@mui/material/Box';
import ImageUpload from "../imageuploder/page";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BsCloudUpload } from "react-icons/bs"
import Divider from '@mui/material/Divider';
import { useRouter } from "next/navigation";
import CustomizedSnackbars from "../../features/snackbar"
type formData = {
    propertyname: string;
    ownername: string;
    contact?: string
    description?: string
    email: string
    ownedby?:string
    location?:string
    rent?:string

};
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'lg',

    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};


export default function Addproperty() {
    const [open, setOpen] = useState(false)
    
    const [descriptioni,setDescription]=useState<string|undefined|null>('')
    const [error,setError]=useState('')
    const router=useRouter()
    const client = new Client();
   
    const databases = new Databases(client);

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('647b1d99a6be71182293') 

    const {
        register,
        handleSubmit,
        

        formState: { errors },
    } = useForm<formData>({
        defaultValues:{
            propertyname:'',
            contact:'',
            ownername:'',
            ownedby:'',
            location:'',
            email:'',
            rent:'',
           

        }
    });

    const onSubmit = (data: any) => {
      console.log("data",data)
       

        const promise = databases.createDocument('647b2b3bdbfeed04e463', '647b2b550dddd5971409', ID.unique(), {
            hostelname:data.propertyname,
            Location:data.location,
            price:data.rent,
            image:'https://images.pexels.com/photos/4217/hotel-bed-bedroom-room.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ownedby:data.ownername,
            description:descriptioni


        })

        promise.then(function (response) {
            router.push("/")
            setOpen(true)
        }, function (error) {
            setError(error.message)
        });

    }
    
    return (
        <>
       
            <div className="pt-4 max-md:px-3 px-6 h-full pb-4">
                <span className="text-center my-2  flex justify-center items-center text-gray-600 ">Add your property</span>
                <Divider light />
                <div>
                    <form className=" max-md:px-2 w-full  px-6 py-2 flex flex-col gap-3 " onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-1">
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
                            <input type="text" {...register("location", {
                                required: "location is required",

                            })} required placeholder="enter your property location" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="location" className="text-[10px] "> Owner`s name:</label>
                            <input type="text"  {...register("ownername", {
                                required: "Owner's name",

                            })} required placeholder="enter property owner name" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="location" className="text-[10px] ">Contact number:</label>
                            <input type="number"  {...register("contact", {
                                required: "contact is required",

                            })} placeholder="owner contact number" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="location" className="text-[10px] "> Email:</label>
                            <input type="email"   {...register("email", {
                                required: "email is required",

                            })}  required placeholder="email" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[10px]" htmlFor="property">Property rent:</label>
                            <input type="number"   {...register("rent", {
                                required: "rent is required",

                            })}  placeholder="enter your property rent" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px]" htmlFor="description">Description about Property:</label>
                            <textarea onChange={(e)=>setDescription(e.target.value)}  required placeholder="enter your property's description" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px]" htmlFor="property">Upload your Property image</label>
                            <div className=" h-32 bg-white w-full rounded-md ">
                                <div className="flex items-center justify-center gap-2 h-full cursor-pointer border-[1px] border-gray-200">
                                    <BsCloudUpload size={20} />
                                    <span>upload png/jpg</span>
                                </div>

                            </div>
                        </div>

                        <button type="submit"  className="p-1.5 bg-red-500 rounded-md mt-2 text-white w-full">Submit</button>



                    </form>

                </div>

            <CustomizedSnackbars  open={open} setOpen={setOpen} message={"sucessfully added"}/>
            </div>
          
        </>
    )

}











