
"use client"
import React, { useState, useEffect ,useRef} from "react"
import { hosteldata } from "../dummydata/data"
import Image from "next/image"
import { FcLike } from "react-icons/fc"
import { Button } from "@mui/material"
import Link from "next/link"
import { Client, Query, Databases } from "appwrite"
import Skeletonvariant from "../features/skeleton"
function Homepage() {

    const [appwrite, setAppwrite] = useState<any | []>([])

    const [docs,setDocs]=useState(8)

    const [loadmore ,setLoadmore]=useState(false)
     const ref=useRef<HTMLDivElement>(null)


    
    const hanldeIncrease=()=>{
        setDocs((prev)=>prev+8)
       const lastChildElement = ref.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: 'smooth' });
        setLoadmore(true)
    }
    

    useEffect(() => {
        const client = new Client()
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("647b1d99a6be71182293")

        const databases = new Databases(client);

        let promise = databases.listDocuments(
            "647b2b3bdbfeed04e463",
            "647b2b550dddd5971409",

             [
        Query.limit(docs),
        Query.offset(0)
    ]



        );

        promise.then(function (response) {
            console.log(response);
            setAppwrite(response?.documents)


        }, function (error) {
            console.log(error);
        });

    }, [docs])
                                                
    return (
        <div ref={ref}  className="max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 h-auto grid px-6 grid-cols-4 gap-6 mt-4 pb-6 relative">

            {
                appwrite.length>1? appwrite.map((d: any) => (
                   <Link   href={`/hostel/${d?.$id}`} key={d.hostelname}><div key={d.$id} className=" flex flex-col gap-1 relative">

                        <img src={d.image} className="w-full rounded-lg h-64 aspect-square " alt="hostelimg" />
                        <div className="pl-1 flex flex-col gap-[2px]">
                            <span className="text-sm font-semibold">{d?.Location}</span>
                            <span className="text-sm font-semibold">{d?.hostelname}</span>
                            <span className="text-gray-600 text-xs">Owned By {d?.ownedby}</span>
                            <span className="text-gray-600 text-xs">Rs {d?.price}</span>
                            <FcLike fontSize={18} className="absolute top-4 right-2 cursor-pointer" />
                        </div>


                    </div>
                    </Link>
                )) : (<>
                <Skeletonvariant/>
                <Skeletonvariant/>
                <Skeletonvariant/>
                <Skeletonvariant/>
                <Skeletonvariant/>
                <Skeletonvariant/>
                <Skeletonvariant/>
                <Skeletonvariant/>
                </>)

                

     
            
                
            }

        
                {loadmore?"":<span className="absolute right-4 bottom-2" onClick={hanldeIncrease}>loadmore</span>}
            

        </div>
    )


}
export default Homepage
