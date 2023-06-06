
"use client"
import React from "react"
import { useState,useEffect } from "react"
import { Client,Databases } from "appwrite"
// import RootLayout from "@/app/layout"
import {useRouter} from "next/navigation"
// import Navbar from "@/components/Navbar"
import {FiMapPin } from "react-icons/fi"

export default function Page({params:{id}}:any){

     console.log("dd",id)
   
    const [appwrite, setAppwrite] = useState<any | []>("")

    




    useEffect(() => {
        const client = new Client()
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("647b1d99a6be71182293")

        const databases = new Databases(client);

        let promise = databases.getDocument(
            "647b2b3bdbfeed04e463",
            "647b2b550dddd5971409",
            id
            



        );

        promise.then(function (response) {
            console.log(response);
            setAppwrite(response)


        }, function (error) {
            console.log(error);
        });

    }, [])

    return<div className="h-auto w-full flex flex-col px-6">

         {appwrite?<div className="flex flex-col gap-1"> 
        <p className="font-bold text-base">{appwrite?.hostelname}</p>
        <span className="font-semibold flex gap-0.5 items-center text-md">{appwrite?.Location||"-" }<FiMapPin/></span>
        <img src={appwrite?.image} alt="hostelimg" className="w-full h-[300px] object-cover rounded-md"/>
        <span className="text-xs text-gray-600 font-semibold">Uploaded At: {new Date(appwrite?.$createdAt).toDateString()}</span>
        <span className="text-xs text-gray-600 font-semibold">Owned by: {appwrite?.ownedby}</span>
        <p className="text-xs text-gray-600 mt-1">{appwrite?.description||"-"}</p>
        <span className="text-xs text-gray-600 font-semibold">Rs {appwrite?.price}</span>

        </div>:<span>Loading</span>}
    </div>
}

