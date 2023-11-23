"use client";
import React, { useState, useEffect, useRef } from "react";
import { hosteldata } from "../dummydata/data";
import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { Button } from "@mui/material";
import Link from "next/link";
import { Client, Query, Databases } from "appwrite";
import Skeletonvariant from "../features/skeleton";
import { useLoadcounter } from "../Zustandstores/loadcounter";
function Homepage() {
  const { loadcount, increaseloadccount } = useLoadcounter();
  const [appwrite, setAppwrite] = useState<any | []>([]);
  const [documents, setDocuments] = useState<number | null | undefined>(
    undefined
  );

  const [loadmore, setLoadmore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("647b1d99a6be71182293");

    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "647b2b3bdbfeed04e463",
      "647b2b550dddd5971409",

      [Query.limit(loadcount), Query.offset(0)]
    );

    promise.then(
      function (response) {
        setAppwrite(response?.documents);
        setDocuments(response?.total);
      },
      function (error) {
        console.log(error);
      }
    );
  }, [loadcount]);



  return (
    <div className="max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 h-auto grid px-6 grid-cols-4 gap-6 mt-4 pb-6 relative">
      {appwrite.length > 1 ? (
        appwrite.map((d: any) => (
          <Link href={`/hostel/${d?.$id}`} key={d.hostelname}>
            <div
              key={d.$id}
              ref={ref}
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
        ))
      ) : (
        <>
          <Skeletonvariant />
          <Skeletonvariant />
          <Skeletonvariant />
          <Skeletonvariant />
          <Skeletonvariant />
          <Skeletonvariant />
          <Skeletonvariant />
          <Skeletonvariant />
        </>
      )}

      {documents as any > loadcount ? (
        <span
          className="absolute right-4 bottom-2 cursor-pointer  rounded-md  text-[#000]"
          onClick={() => increaseloadccount(4)}
        >
          loadmore
        </span>
      ) : (
        <span className="absolute right-4 bottom-2 cursor-pointer  rounded-md  text-[#000]">
          nomore data
        </span>
      )}
    </div>
  );
}
export default Homepage;
