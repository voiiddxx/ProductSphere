"use client"

import { Tabs } from "@radix-ui/react-tabs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";
import { Dot, Github, Linkedin, Mail, MousePointerClickIcon } from "lucide-react";
import { currentUser } from "@clerk/nextjs";
import {
  getUserUsingClerkid,
  getUserUsinguserId,
} from "@/lib/actions/user.action";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import UpdateUserform from "./UpdateUserform";

const Profile = async () => {
  const [user, setuser] = useState<any>(null);
  const [gitub, setgitub] = useState<any>(null)
  const [linkedin, setlinkedin] = useState<any>(null)
  const [bio, setbio] = useState<any>(null)
  const [about, setabout] = useState<any>(null)
  const [skills, setskills] = useState<any>([])
  const [skillstobeadded, setskillstobeadded] = useState<any>(null);


  const handleSkill = ()=>{
    setskills([...skills , skillstobeadded]);
  }
  

  

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("x-auth-id");
      const res = await getUserUsinguserId(+token!);
      if (res) {
        console.log("This is val of res:", res);

        setuser(res);
      } else {
        console.log("Some error occured");
      }
    };
    getUser();
  }, []);

  if (!user) {
    return (
      <div className="w-full flex items-center justify-center min-h-screen">
        <p>Sorry no data found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-300 to-white">
      <div className="bg-white"></div>
      {/* upper div */}
      <div className="h-full mx-72 mt-8 border-b pb-10 border-zinc-400">
        <div className="w-full flex justify-between">
          <div className="flex gap-4 items-center">
            <div className="h-[150px] w-[150px] rounded-full bg-white">
              <Image
                src={user.data.avatar}
                className="h-[150px] w-[150px] object-cover"
                height={1500}
                width={1500}
                alt="userimaeg"
              />
            </div>
            <div>
              <h1 className="text-zinc-800 text-4xl font-semibold mt-2">
                {user.data.username}
              </h1>
              <div className="flex gap-2">
                <p className="text-xs font-medium bg-slate-200 px-2 py-1 rounded-full mt-1">
                  {user.data.email}
                </p>
              </div>
              <p className="mt-1 font-medium">
                I create product that matters | Full stack developers | building
                saas products
              </p>
              <div className="flex gap-4 mt-4">
                <Link href={user.data.github} >
                <Github size={18} strokeWidth={1.75} /></Link>
                <Link href={user.data.linkedin} >
                <Linkedin size={18} strokeWidth={1.75} />
                </Link>
                <Link href={user.data.email} >
               <Mail size={18} strokeWidth={1.75} />
                </Link>
              </div>
            </div>
          </div>

          <div>
           <UpdateUserform/>
          </div>
        </div>

        {
          user.data.skills.length > 0 && (
            <div className="mt-4" >
          <p className="text-sm font-medium" >Skills</p>
          <div className="flex gap-4 mt-4" >
          {
            user.data.skills.map((curr:any)=>{
              return <div className="bg-slate-200 text-indigo-700 px-2 py-1 rounded-full flex justify-center items-center" >
                <p className="text-sm font-medium" >{curr}</p>
              </div>
            })
          }
          </div>

        </div>
          )
        }


        {
          user.data.about && (
            <div className="mt-8" >
              <p className="font-medium text-zinc-900 text-sm" >About</p>
              <p className="text-sm font-medium tracking-wide leading-relaxed" >{user.data.about}</p>
            </div>
          )
        }

      </div>

      {/* products section */}
      <div className="mx-72 mt-5">
        <Tabs defaultValue="account" className="">
          <TabsList>
            <TabsTrigger value="account">Owned Products</TabsTrigger>
            <TabsTrigger value="password">Joined Products</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            {user.data.ownedProducts.length > 0 && (
              <div className="flex gap-8 flex-wrap  mt-8">
                {user.data.ownedProducts.map((curr: any) => {
                  return (
                    <Link href={`/products/${curr.productId}`}>
                      <div className="h-[350px] w-[350px] bg-white rounded-md shadow-[0px_20px_20px_10px_#edf2f7]">
                        {/* upper div */}
                        <div className="h-[150px] w-full rounded-t-md bg-gradient-to-tr from-zinc-900 to-zinc-700 relative">
                          <div className="absolute h-[90px] w-[90px] bg-white rounded-full bottom-[-30px]  left-5 border-solid border-[10px] border-white flex items-center justify-center">
                            <Image
                              src={curr.productlogo}
                              className="h-[70px] w-[70px] rounded-full object-cover"
                              height={1500}
                              width={1500}
                              alt="userimage"
                            />
                          </div>
                        </div>

                        {/* bottom div */}
                        <div className="mt-10 px-6">
                          <div className="flex gap-2">
                            <h1 className="text-lg font-semibold text-zinc-950">
                              {curr.name}
                            </h1>
                            <div className="bg-yellow-100 flex justify-center text-yellow-700 items-center rounded-full px-2 py-1">
                              <Dot
                                absoluteStrokeWidth
                                strokeWidth={5}
                                size={20}
                              />
                              <p className="text-xs font-medium">
                                {curr.visibility}
                              </p>
                            </div>
                          </div>
                          <p className="mt-2 text-sm font-medium text-zinc-600">
                            {curr.detail}
                          </p>
                          <p className="mt-10 text-indigo-700 text-xs">
                            view more
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </TabsContent>
          <TabsContent value="password">
            {user.data.memberOfProducts.length > 0 && (
              <div className="flex gap-8 flex-wrap  mt-8">
                {user.data.memberOfProducts.map((curr: any) => {
                  return (
                    <Link href={`/products/${curr.productId}`}>
                      <div className="h-[350px] w-[350px] bg-white rounded-md shadow-[0px_20px_20px_10px_#edf2f7]">
                        {/* upper div */}
                        <div className="h-[150px] w-full rounded-t-md bg-gradient-to-tr from-zinc-900 to-zinc-700 relative">
                          <div className="absolute h-[90px] w-[90px] bg-white rounded-full bottom-[-30px]  left-5 border-solid border-[10px] border-white flex items-center justify-center">
                            <Image
                              src={curr.productlogo}
                              className="h-[70px] w-[70px] rounded-full object-cover"
                              height={1500}
                              width={1500}
                              alt="userimage"
                            />
                          </div>
                        </div>

                        {/* bottom div */}
                        <div className="mt-10 px-6">
                          <div className="flex gap-2">
                            <h1 className="text-lg font-semibold text-zinc-950">
                              {curr.name}
                            </h1>
                            <div className="bg-yellow-100 flex justify-center text-yellow-700 items-center rounded-full px-2 py-1">
                              <Dot
                                absoluteStrokeWidth
                                strokeWidth={5}
                                size={20}
                              />
                              <p className="text-xs font-medium">
                                {curr.visibility}
                              </p>
                            </div>
                          </div>
                          <p className="mt-2 text-sm font-medium text-zinc-600">
                            {curr.detail}
                          </p>
                          <p className="mt-10 text-indigo-700 text-xs">
                            view more
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
