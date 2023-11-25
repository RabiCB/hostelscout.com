"use client";
import { Typography } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import ProfileChips from "./ProfileChips";
import { Client, Account } from "appwrite";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";
import React from "react";
import { useSearchStore } from "@/Zustandstores/Searchstore";
import Link from "next/link";
import { userStore } from "@/Zustandstores/Userstore";
const Navbar = () => {
  const router = useRouter();

  const [user, setUser] = useState<any>("");
  const { setUserstate, userstate ,setUsername} = userStore();
  useEffect(() => {
    const client = new Client();

    const account = new Account(client);

    client
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject("647b1d99a6be71182293"); // Your project ID

    const promise = account.get();

    promise.then(
      function (response) {
        console.log(response);
        setUser(response);
        setUserstate(true);
        setUsername(response?.name)
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }, []);

  const logout = () => {
    const client = new Client();

    const account = new Account(client);

    client
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject("647b1d99a6be71182293"); // Your project ID

    const promise = account.deleteSession("current");
   localStorage.clear()
    promise.then(
      function (response) {
        console.log(response);
        router.push("/login");
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  const handleSearch = () => {
    if (searchText) {
      router.push(`/search?q=${searchText}`);
    }
  };

  const handleInputKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      // Prevent form submission
      if (searchText) {
        handleSearch();
      }
    }
  };
  const { searchText, setSearchText } = useSearchStore();

  return (
    <>
      <div className="navbar-container z-10 sticky border-[1px] border-[#DDDDDD] flex gap-1  sm:px-[4rem] justify-between px-[2rem] items-center h-[4rem] ">
        <div className="block ">
          <Link href={"/"}>
            <span className=" text-base font-bold text-[#1D3557] md:text-xl">
              HostelScout
            </span>
          </Link>
        </div>
        <div className=" lg:flex hidden relative items-center">
          <input
            className="bg-white sticky max-w-[400px] min-w-[400px] outline-1 outline-none border border-[#dddddd] shadow-md rounded-[1.5rem] text-[#878a8d] block text-[12px] py-[0.6rem]  px-[1rem] font-[400]  "
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleInputKeyPress}
            value={searchText}
          />
          {searchText && (
            <div
              onClick={() => setSearchText("")}
              className=" absolute right-[40px] cursor-pointer top-[5px] flex justify-center items-center rounded-[50%]  w-[28px] h-[28px]  "
            >
              <RxCross1 size={24} />
            </div>
          )}
          <div
            onClick={handleSearch}
            className=" absolute right-[8px] cursor-pointer top-[5px] flex justify-center items-center rounded-[50%] bg-[#E63946] w-[28px] h-[28px] text-white "
          >
            <BsSearch size={15} />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/addproperty">
            <div className="font-[400] max-lg:hidden cursor-pointer hover:bg-slate-200 px-4 py-1 rounded-full">
              <p className="font-[600] ">Add your property</p>
            </div>
          </Link>
          <ProfileChips user={user} logout={logout} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
