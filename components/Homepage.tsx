
"use client"


import React from "react"
import { hosteldata } from "@/dummydata/data"
import Image from "next/image"
import { Button } from "@mui/material"
 function Homepage(){
    return(
        <div className="max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 h-auto grid px-6 grid-cols-4 gap-6 mt-4 pb-6">
        {
            hosteldata.map((d:any)=>(
                <div key={d.id} className="border-2 flex flex-col gap-1 ">
                    
                    <img src={d.img} className="w-full rounded-lg h-64 aspect-square " alt="hostelimg"/>
                    <div className="pl-1 flex flex-col gap-[2px]">
                    <span className="text-normal font-semibold">{d?.location}</span>
                    <span className="text-normal font-semibold">{d?.name}</span>
                    <span className="text-gray-600 text-xs">Owned By {d?.ownedby}</span>
                    <span className="text-gray-600 text-xs">Rs {d?.fair}</span>
                    </div>

              
                </div>
            ))
        }

    </div>
    )
    
    
}
export default Homepage