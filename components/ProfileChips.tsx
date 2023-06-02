import { BsPersonCircle } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

const ProfileChips = () => {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        onClick={handleDropdown}
        className=" relative z-10 flex cursor-pointer border-[1px] rounded-[1.5rem] border-[#DDDDDD] gap-4 px-4 py-2 "
      >
        <FiMenu size={25} />
        <BsPersonCircle size={25} />
        <div
          className={
            !open
              ? "hidden"
              : " flex absolute right-0 top-[3rem] w-[200px]  py-4 flex-col rounded-md shadow-md bg-white"
          }
        >
          <Link
            className="px-4 hover:text-white hover:bg-[#E63946]/50 py-[0.5rem] "
            href="#"
          >
            Sign Up
          </Link>
          <Link
            className="px-4 hover:text-white hover:bg-[#E63946]/50 py-3 border-b-[1px] border-[#dddddd] "
            href="#"
          >
            Log in
          </Link>
          <Link
            className="px-4 hover:text-white hover:bg-[#E63946]/50 py-3 "
            href="#"
          >
            HostelScout
          </Link>
          <Link
            className="px-4 hover:text-white hover:bg-[#E63946]/50 py-3 "
            href="#"
          >
            Help
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileChips;
