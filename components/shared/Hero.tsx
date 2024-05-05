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
      id: 16,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1531256456869-ce942a665e80?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div className="mx-[24rem] flex-col justify-center items-center ">


        {/* upper div */}
        <div className=" py-8 mt-10 w-full flex flex-col justify-center items-center md:px-56" >
          <div className="flex gap-2" >
            <div className="h-4 w-4 bg-red-400 rounded-full animate-pulse" ></div>
            <p className="md:text-sm text-xs font-semibold text-gray-600 mb-4 " >New Feature - ProdAI comming soon</p>

          </div>


          {/* h1 for mobile use cases */}
          <h1 className="md:text-5xl text-4xl text-center  font-semibold md:hidden" >Manage your products with <span className="text-indigo-600" >productsphere</span> </h1>

          {/* heading for web use cases */}
          <h1 className="md:text-5xl text-3xl text-center leading-relaxed tracking-normal font-semibold hidden md:inline-block" >Manage your products like never </h1>
          
          <h1 className="md:text-5xl text-3xl text-center leading-relaxed tracking-normal font-semibold hidden md:inline-block mt-2" >before with <span className="text-indigo-600" >productsphere</span> </h1>
          
          {/* heading for web use cases end */}
          <p className=" text-center font-medium px-10 mt-4 text-zinc-600 text-xs md:text-base hidden md:block" >The only platform for managing product with your team , platform for product hunting , find developers for your product and ask them to join</p>
          <p className=" text-center font-medium px-10 mt-4 text-zinc-600 text-xs md:text-base md:hidden" >Create Product - find product , find developer - product hunting - management</p>
         <Link href={`/dashboard`}>
         <Button className="mt-6 bg-indigo-600 h-[60px] w-[250px]" >
            <p className="font-medium text-white leading-snug tracking-wider text-[15px] " >Build product with team</p>
          </Button></Link>
          <p className="text-xs font-medium text-zinc-700 mt-8" >Join with our 50+ contributers</p>
           <div className="flex flex-row items-center justify-center  w-full md:mt-2 mt-3">
        <AnimatedTooltip items={people} />
      </div>

          
        </div>  

      {/* image component */}
      <div className="md:h-[60rem] md:w-[80rem] h-[20rem] w-[25rem] " >
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
