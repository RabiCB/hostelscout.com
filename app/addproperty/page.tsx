"use client"

import { Button } from "@mui/material"
import React, { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Client, Databases, ID, Storage } from "appwrite";
import Box from '@mui/material/Box';
import ImageUpload from "../imageuploder/page";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BsCloudUpload } from "react-icons/bs"
import Divider from '@mui/material/Divider';
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai"
import CustomizedSnackbars from "../../features/snackbar"
import Image from "next/image";
type formData = {
    propertyname: string;
    ownername: string;
    contact?: string
    description?: string
    email: string
    ownedby?: string
    location?: string
    rent?: string
    

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
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState<any>(null);
    const [url,setUrl]=useState('')
    const [id,setID]=useState('')
    const [descriptioni, setDescription] = useState<string | undefined | null>('')
    const [error, setError] = useState('')
    const router = useRouter()
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
        defaultValues: {
            propertyname: '',
            contact: '',
            ownername: '',
            ownedby: '',
            location: '',
            email: '',
            rent: '',


        }
    });

    const onSubmit = (data: any) => {
        console.log("data", data)


        const promise = databases.createDocument('647b2b3bdbfeed04e463', '647b2b550dddd5971409', ID.unique(), {
            hostelname: data.propertyname,
            Location: data.location,
            price: data.rent,
            image: url,
            ownedby: data.ownername,
            description: descriptioni,



        })

        promise.then(function (response) {
            router.push("/")
            setOpen(true)
        }, function (error) {
            setError(error.message)
        });

    }



    const ref = useRef<HTMLInputElement>(null)



    const handleImageChange = (e: any) => {
        const imageFile = e.target.files[0];
        setSelectedImage(imageFile);
        console.log(imageFile)
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result);
        };
        const file = reader.readAsDataURL(imageFile);
    };




    useEffect(() => {

        const formData = new FormData();
        const ccc = formData.append('image', selectedImage);
        console.log("ccc", ccc)




        const storage = new Storage(client);

        const promise = storage.createFile(
            '6484a03e93323fbc080a',
            ID.unique(),
            selectedImage,

        );

        promise.then(function (response) {
            console.log(response);
            
            setID(response?.$id)

            // Success
        }, function (error) {
            console.log(error); // Failure
        });






        const result = storage.getFileView('6484a03e93323fbc080a',id );
        
        setUrl(result?.href)

        console.log("ress",result)



       







    }, [selectedImage,previewImage,url,id])

    const handleImageClick = () => {
        ref.current?.click()
    }

    const handleDelete = (img: any) => {

        setSelectedImage('')
        setPreviewImage('')
        setUrl('')
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

                            })} required placeholder="email" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[10px]" htmlFor="property">Property rent:</label>
                            <input type="number"   {...register("rent", {
                                required: "rent is required",

                            })} placeholder="enter your property rent" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px]" htmlFor="description">Description about Property:</label>
                            <textarea onChange={(e) => setDescription(e.target.value)} required placeholder="enter your property's description" className="p-1.5 rounded-md outline-none border-[1px] border-gray-200" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px]" >Upload your Property image</label>
                            <input type="file" ref={ref} className="hidden" onChange={handleImageChange} />
                            <div onClick={handleImageClick}  className=" h-32 bg-white w-full rounded-md ">

                                <div className="flex items-center justify-center gap-2 h-full cursor-pointer border-[1px] border-gray-200">
                                    <BsCloudUpload size={20} />
                                    <span>upload png/jpg</span>
                                </div>

                            </div>

                            {previewImage && <div className="flex items-center justify-center">

                                <div className="relative w-[300px] h-[200px]">

                                    <AiOutlineDelete onClick={handleDelete} size={20} className="absolute z-10 cursor-pointer top-2 text-red-500 right-2" />
                                    <Image fill className=" rounded-md  object-cover  " src={previewImage} alt="previewimage" /></div>
                            </div>}
                        </div>

                        <button type="submit" className="p-1.5 bg-red-500 rounded-md mt-2 text-white w-full">Submit</button>



                    </form>

                </div>

                <CustomizedSnackbars open={open} setOpen={setOpen} message={"sucessfully added"} />
            </div>

        </>
    )

}











