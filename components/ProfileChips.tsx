import { BsPersonCircle } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import React from "react";
import { BiHelpCircle, BiLogInCircle } from "react-icons/bi";
import { MdOutlineCreate } from "react-icons/md";

const ProfileChips = ({ user ,logout}: any) => {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // to close
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  // to handle dropdown
  const handleDropdown = () => {
    setOpen(!open);
  };

  console.log("reeggege", user);
  return (
    <>
      <div
        ref={ref}
        onClick={handleDropdown}
        className=" relative  flex cursor-pointer border-[1px] rounded-[1.5rem] border-[#DDDDDD] gap-4 px-4 py-2 "
      >
        <FiMenu className="text-[#878a8d]" size={25} />
        <BsPersonCircle className="text-[#878a8d]" size={25} />
        
        <div
          className={
            !open
              ? "hidden"
              : " flex absolute text-[var(--accent-gray)] right-0 top-[3rem] w-[200px]  py-4 flex-col rounded-md shadow-md bg-white"
          }
        >
          {user ? (
            <>
              <Link
                className="px-4 flex justify-between items-center hover:text-white hover:bg-[#E63946] py-[0.5rem] "
                href="/addproperty"
              >
                Add your property
              </Link>
              <div
                className="px-4 hover:text-white hover:bg-[#E63946] py-[0.5rem] "
                onClick={logout}
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <Link
                className="px-4 flex justify-between items-center hover:text-white hover:bg-[#E63946] py-[0.5rem] "
                href="/register"
              >
                Sign Up
                <MdOutlineCreate size={25} />
              </Link>
              <Link
                className="px-4 flex justify-between items-center hover:text-white hover:bg-[#E63946] py-3 border-b-[1px] border-[#dddddd] "
                href="/login"
              >
                Log in
                <BiLogInCircle size={25} />
              </Link>
            </>
          )}
          <Link
            className="px-4 hover:text-white hover:bg-[#E63946] py-3 "
            href="#"
          >
            HostelScout
          </Link>
          <Link
            className="px-4 flex justify-between items-center hover:text-white hover:bg-[#E63946] py-3 "
            href="#"
          >
            Help
            <BiHelpCircle size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileChips;
