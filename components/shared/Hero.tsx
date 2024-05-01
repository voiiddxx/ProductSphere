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
      console.log("this is the value of userid: " , userid);
      try {

      const res = await getUserUsingClerkid(userid!);
      console.log("Res: " , res , "resid val is: " , res.id);
      const userval = localStorage.setItem("x-auth-id", res.id);
      } catch (error) {
        console.log(error);

      }
    };
    getUserData();
  }, []);
  return (
    <div className="mx-[24rem]  flex-col justify-center items-center ">
      <div className="flex flex-row items-center justify-center  w-full md:mt-20 mt-10">
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
      </div>
      <h1 className="md:text-6xl font-bold  md:tracking-normal md:leading-tight text-white mt-5 text-center text-3xl leading-snug">
        Manage Your Product <br /> With Help of <span className="text-white rounded-md px-4" >
        ProductSphere</span> {" "}
      </h1>
      <p className="text-white md:mt-2 text-center tracking-wide leading-relaxed md:text-sm text-xs mt-4">
        Tired of genreating your social captions , getting no proper roadmap ,
        don't know how to write cold email , don't worry help.ai is here to help
        you , genreate anything you want with help.ai
      </p>
      <div className="flex gap-2 mt-5 w-full justify-center">
        <Button
          className="bg-transparent text-white"
          size={"lg"}
          variant={"outline"}
        >
          Star it on github
        </Button>
       <Link href={`/dashboard`} >
       <Button
          className="bg-white text-indigo-700 font-medium flex gap-2"
          size={"lg"}
        >
          <LayoutDashboard className="text-indigo-700" size={20} />
          <p className="text-sm font-semibold">Dashboard</p>
        </Button></Link>
        {/* <TaskDetail/> */}
      </div>

      {/* hero image */}
      <div className="md:h-[400px] h-[400px] w-[400px] md:w-[900px] px-4 mt-8 bg-white rounded-xl flex justify-center items-center ">

        <Image src={`/dashboard.svg`} className=" h-[400px] w-[400px] md:w-[300rem]" height={1500} width={1500} alt="dadhboard" />
        {/* <Image
          className="md:w-[200rem] w-[30rem] object-cover"
          src={`/dashboard.jpg`}
          height={5000}
          width={5000}
          alt="imageherodashboard"
        /> */}
      </div>
    </div>
  );
};

export default Hero;
