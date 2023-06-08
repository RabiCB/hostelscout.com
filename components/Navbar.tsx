"use client";
import { Typography } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { useEffect,useState } from "react";
import ProfileChips from "./ProfileChips";
import { Client, Account } from "appwrite";
import {useRouter} from "next/navigation"

import React from "react";

const Navbar = () => {

  const router=useRouter()

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
      console.log("ggg",response); 
      setUser(response);
    }, function (error) {
      console.log(error); // Failure
    });

  }, [])

  const logout=()=>{
    const client = new Client();

    const account = new Account(client);
    
    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('647b1d99a6be71182293') // Your project ID
    ;
    
    const promise = account.deleteSession('current');
    
    promise.then(function (response) {
        console.log(response); 
        router.push("/login")

        // Success
    }, function (error) {
        console.log(error); // Failure
    });

  }
   

  
  return (
    <>
      <div className="navbar-container z-10 sticky border-[1px] border-[#DDDDDD] flex gap-1  sm:px-[4rem] justify-around  sm:justify-between items-center h-[5rem] ">
        <div className="hidden sm:flex ">
          <span className="  font-bold text-[#1D3557] text-xl">
            HostelScout
          </span>
        </div>
        <div className="relative">
          <input
            className="bg-white sticky w-[300px]  sm:w-[300px] md:w-[400px] lg:w-[500px] outline-1 outline-[#E63946] border border-[#dddddd] shadow-md rounded-[1.5rem] text-[#878a8d] block text-[12px] py-[0.8rem] px-[1rem] font-[400]  "
            type="text"
            placeholder="Search..."
          />
          <div className=" absolute right-[8px] cursor-pointer top-[5px] flex justify-center items-center rounded-[50%] bg-[#E63946] w-[35px] h-[35px] text-white ">
            <BsSearch size={15} />
          </div>
        </div>
        <ProfileChips user={user} logout={logout}/>
      </div>
    </>
  );
};

export default Navbar;
