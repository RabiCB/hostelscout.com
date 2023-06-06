"use client";
import { Typography } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { useEffect,useState } from "react";
import ProfileChips from "./ProfileChips";
import { Client, Account } from "appwrite";


const Navbar = () => {

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
      console.log(response); 
      setUser(response);
    }, function (error) {
      console.log(error); // Failure
    });

  }, [])
  return (
    <>
      <div className="navbar-container border-[1px] border-[#DDDDDD] flex px-[4rem] justify-between items-center h-[5rem] ">
        <div>
          <span className="font-bold text-[#1D3557] text-xl">
            HostelScout
          </span>
        </div>
        <div className="relative">
          <input
            className="bg-white sm:w-[300px] md:w-[400px] lg:w-[500px] outline-1 outline-[#E63946] border border-[#dddddd] shadow-md rounded-[1.5rem] text-[#878a8d] block text-[12px] py-[0.8rem] px-[1rem] font-[400]  "
            type="text"
            placeholder="Search..."
          />
          <div className=" absolute right-[8px] cursor-pointer top-[5px] flex justify-center items-center rounded-[50%] bg-[#E63946] w-[35px] h-[35px] text-white ">
            <BsSearch size={15} />
          </div>
        </div>
        <ProfileChips user={user}/>
      </div>
    </>
  );
};

export default Navbar;
