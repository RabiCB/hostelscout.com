"use client"
import React from "react";
import ProfileChips from "./ProfileChips";
import { useEffect,useState } from "react";
import { Client,Account } from "appwrite";
import { useRouter } from "next/navigation";

const Commonnav = () => {
    const router =useRouter()
    const [user,setUser]=useState<any>("")


    useEffect(() => {

      const client = new Client();
  
      const account = new Account(client);
  
      client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('647b1d99a6be71182293') // Your project ID
        ;
  
      const promise = account.get();
  
      promise.then(function (response) {
        console.log(response ,"kkkk"); 
        setUser(response);
      }, function (error) {
        console.log(error); // Failure
      });
  
    }, [])

    
  return (
    <>
      <div className=" border-[1px] border-[#DDDDDD] flex px-[1rem] justify-between items-center h-[5rem] ">
        <div>
          <span  onClick={()=>router.push("/")} className="font-bold text-[#1D3557] text-xl cursor-pointer">
            HostelScout
          </span>
        </div>
        <ProfileChips user={user}/>
        
          
      </div>
    </>
  );
};

export default Commonnav;
