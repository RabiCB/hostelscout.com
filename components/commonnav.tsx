"use client"
import React from "react";
import ProfileChips from "./ProfileChips";
import { useRouter } from "next/navigation";

const Commonnav = () => {
    const router =useRouter()
    
  return (
    <>
      <div className="navbar-container border-[1px] border-[#DDDDDD] flex px-[2rem] justify-between items-center h-[5rem] ">
        <div>
          <span  onClick={()=>router.push("/")} className="font-bold text-[#1D3557] text-xl cursor-pointer">
            HostelScout
          </span>
        </div>
        <ProfileChips/>
        
          
      </div>
    </>
  );
};

export default Commonnav;
