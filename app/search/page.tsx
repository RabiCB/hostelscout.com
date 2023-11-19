"use client";

import React, { useEffect, useState } from "react";
import { Client, Databases, Query } from "appwrite";
import { useSearchStore } from "../../Zustandstores/Searchstore";
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation'
import { FcLike } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import Skeletonvariant from "@/features/skeleton";

interface datatype {
  hostelname: string;
  $id: string;
  image: string;
  ownedby: string;
  price: string;
  Location:string|null
}
const Home = () => {
  const { searchText, setSearchText } = useSearchStore();

  const [results, setResults] = useState<any | null>([]);
 const [loader,setLoader]=useState(false)

  const searchParams = useSearchParams()
 
  const search = searchParams.get('q')



useEffect(()=>{
    const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("647b1d99a6be71182293");

  const databases = new Databases(client);
  setLoader(true)
  databases
    .listDocuments("647b2b3bdbfeed04e463", "647b2b550dddd5971409", [
      Query.startsWith("hostelname", `${search}`),
    ])
    .then((res) => {
      console.log(res);
      setLoader(false)
      setResults(res?.documents);
    });
    

},[search])
  

  return (
    <>
    <div className=" px-6">
       <h2>results for {search}</h2> 
    </div>
    <div className="max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 h-auto grid px-6 grid-cols-4 gap-6 mt-4 pb-6 relative">
      
      { !loader ? (results?.map((d: datatype, index: string) => (
       <Link href={`/hostel/${d?.$id}`} key={d.hostelname}>
       <div
         key={d.$id}
         
         className=" flex flex-col gap-1 relative"
       >
         <div className="relative h-64 w-full">
           <Image
             src={d.image}
             className="aspect-square rounded-md "
             fill
             alt="hostelimg"
           />
         </div>
         <div className="pl-1 flex flex-col gap-[2px]">
           <span className="text-sm font-semibold">{d?.Location}</span>
           <span className="text-sm font-semibold">{d?.hostelname}</span>
           <span className="text-gray-600 text-xs">
             Owned By {d?.ownedby}
           </span>
           <span className="text-gray-600 text-xs">Rs {d?.price}</span>
           <FcLike
             fontSize={18}
             className="absolute top-4 right-2 cursor-pointer"
           />
         </div>
       </div>
     </Link>
      ))):<>
      <Skeletonvariant/>
      <Skeletonvariant/>
      <Skeletonvariant/>
      <Skeletonvariant/>
      <Skeletonvariant/>
      <Skeletonvariant/>
      <Skeletonvariant/>
      <Skeletonvariant/>
     
      </>}
     
    </div>
    {
        results?.length<1 &&<div>Not found</div>
    }
    </>
  );
};

export default Home;
