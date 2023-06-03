
"use client"


import React, { useState, useEffect } from "react"
import { hosteldata } from "../dummydata/data"
import Image from "next/image"
import { FcLike } from "react-icons/fc"
import { Button } from "@mui/material"
import Skeletonvariant from "../features/skeleton"
function Homepage() {
    const [data, setData] = useState<any>([])


    setTimeout(() => {
        setData(hosteldata)
    }, 500)


    return (
        <div className="max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 h-auto grid px-6 grid-cols-4 gap-6 mt-4 pb-6">
            {
                data.length > 1 ? hosteldata.map((d: any) => (
                    <div key={d.id} className=" flex flex-col gap-1 relative">

                        <img src={d.img} className="w-full rounded-lg h-64 aspect-square " alt="hostelimg" />
                        <div className="pl-1 flex flex-col gap-[2px]">
                            <span className="text-sm font-semibold">{d?.location}</span>
                            <span className="text-sm font-semibold">{d?.name}</span>
                            <span className="text-gray-600 text-xs">Owned By {d?.ownedby}</span>
                            <span className="text-gray-600 text-xs">Rs {d?.fair}</span>
                            <FcLike fontSize={18} className="absolute top-4 right-2 cursor-pointer" />
                        </div>


                    </div>
                )) : (<>
                    <Skeletonvariant />
                    <Skeletonvariant />
                    <Skeletonvariant />
                    <Skeletonvariant />
                    <Skeletonvariant />
                    <Skeletonvariant />
                    <Skeletonvariant />
                    <Skeletonvariant />

                </>)
            }





        </div>
    )


}
export default Homepage