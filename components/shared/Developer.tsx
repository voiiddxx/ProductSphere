"use client";
import { getAllUsers } from "@/lib/actions/user.action";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Developer = () => {
  const [developers, setdevelopers] = useState<any>(null);

  useEffect(() => {
    const getAllUsersnow = async () => {
      const res = await getAllUsers();
      if (res) {
        console.log(res);

        setdevelopers(res);
      } else {
        console.log("Some error occured");
      }
    };
    getAllUsersnow();
  }, []);
  return (
    <div className="w-full fle justify-center items-center px-4 py-4">
      <h1 className="text-2xl font-semibold text-zinc-900">Find Developer</h1>
      <p className="text-xs font-normal text-zinc-400 mt-1">
        FInd developer and explore their products
      </p>

      {developers && (
        <div className="flex flex-wrap gap-8 mt-10">
          {developers.map((curr: any) => {
            return (
             <Link href={`/user/${curr.id}`} >
              <div className="h-[350px] w-[350px] bg-white rounded-md">
                {/* upper div */}
                <div className="h-[150px] w-full rounded-t-md bg-gradient-to-br from-zinc-900 to-zinc-700 relative flex justify-between items-center">
                  <div></div>
                  <div>
                    
                  <h1 className="text-zinc-700 text-4xl mr-4 font-semibold" >#{curr.id}</h1>
                  </div>
                  <div className="absolute h-[90px] w-[90px] bg-white rounded-full bottom-[-30px]  left-5 border-solid border-[10px] border-white flex items-center justify-center">
                    <Image
                      src={curr.avatar}
                      className="h-[70px] w-[70px] rounded-full object-cover"
                      height={1500}
                      width={1500}
                      alt="userimage"
                    />
                  </div>
                </div>
                
                {/* bottom div */}
                <div className="mt-10 px-6" >
                    <h1 className="text-2xl font-semibold text-zinc-950" >{curr.username}</h1>
                    <p className="mt-2 text-sm font-medium text-zinc-600" > I Code Product That Matters Full Stack Developer | Building Saas products ⚡</p>
                    <p className="mt-10 text-indigo-700 text-xs" >view more</p>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Developer;
