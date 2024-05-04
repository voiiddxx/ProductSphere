"use client";

import { createProductAction } from "@/lib/actions/product.action";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { getUserUsingClerkid } from "@/lib/actions/user.action";
import { LayoutDashboard, Star } from "lucide-react";
import Image from "next/image";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import TaskDetail from "./TaskDetail";
import Link from "next/link";

type heroProps = {
  userid: string | undefined;
};

const Hero = ({ userid }: heroProps) => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    
  ];

  // const handleSubmit = async () => {
  //   // const res = await createProductAction();
  //   // console.log("Res: ", res);
  // };
  useEffect(() => {
    const getUserData = async () => {
      try {
      const res = await getUserUsingClerkid(userid!);
      const userval = localStorage.setItem("x-auth-id", res.id);
      } catch (error) {
        console.log(error);

      }
    };
    getUserData();
  }, []);
  return (
    <div className="mx-[24rem]  flex-col justify-center items-center ">


        {/* upper div */}
        <div className="h-[450px] w-full flex flex-col justify-center items-center px-56" >
          <h1 className="text-5xl text-center tracking-normal leading-snug font-semibold" >Manage your products like never before with productsphere</h1>
          <p className=" text-center font-medium px-10 mt-2 text-zinc-600" >The only platform for managing product with your team , platform for product hunting , find developers for your product and ask them to join</p>
          <Button className="mt-6 bg-indigo-600 h-[60px] w-[250px]" >Build Your First Product</Button>

          
        </div>  

      {/* image component */}
      <div className="h-[60rem] w-[80rem] " >
      <Image src={`/dash.svg`} className="h-full w-full object-contain" height={2000} width={2000}  alt="dashboard" />
      </div>
      {/* <div className="flex flex-row items-center justify-center  w-full md:mt-20 mt-10">
        <AnimatedTooltip items={people} />
        <div className="ml-8" >
          <p className="text-sm font-medium text-white" >5/5 - 15 reviews</p>
          <div className="flex gap-1" >
            <Star fill="yellow" className="text-transparent" size={15} strokeWidth={1.5} />
            <Star fill="yellow" className="text-transparent" size={15} strokeWidth={1.5} />
            <Star fill="yellow" className="text-transparent" size={15} strokeWidth={1.5} />
            <Star fill="yellow" className="text-transparent" size={15} strokeWidth={1.5} />
            <Star fill="yellow" className="text-transparent" size={15} strokeWidth={1.5} />
          </div>

        </div>
      </div> */}
    

      {/* hero image */}
     
    </div>
  );
};

export default Hero;
