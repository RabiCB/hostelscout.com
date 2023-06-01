import React from "react"
import { hosteldata } from "@/dummydata/data"
import Image from "next/image"
 function Homepage(){
    return(
        <div className="max-sm:grid-cols-2 h-auto grid px-6 grid-cols-4 gap-4 mt-4">
        {
            hosteldata.map((d:any)=>(
                <div key={d.id} className="border-2 ">
                    
                    <img src={d.img} className="w-full rounded-[6px] h-60 aspect-square " alt="hostelimg"/>
                    <span>{d.name}</span>


                </div>
            ))
        }

    </div>
    )
    
    
}
export default Homepage