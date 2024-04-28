"use client";
import React, { useEffect, useState } from "react";
import DetailsSidebar from "./DetailsSidebar";
import {
  Box,
  CalendarRangeIcon,
  ChevronDown,
  Dot,
  File,
  Filter,
  Flame,
  ListFilter,
  ListTodo,
  LucideWorkflow,
  MoreVertical,
  Network,
  Search,
  Settings,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import AssignTaskComponent from "./AssignTaskComponent";
import { getTaskAsperProductId } from "@/lib/actions/task.action";
import TaskAssignedCard from "./TaskAssignedCard";
import Image from "next/image";
import Addmemebr from "./Addmemebr";

type ProductDataProps = {
  data: any;
};

const ProductdashBoard = ({ data }: ProductDataProps) => {
  const [IsOwner, setIsOwner] = useState<boolean>(false);
  const [Tasks, setTasks] = useState<any>(null)

  useEffect(() => {

      const localUser = localStorage.getItem("x-auth-id");
    const userId = +localUser!;
    if(data.ownerId === userId){
      setIsOwner(true);
      // console.log("Values are:  " , data.ownerId , "another val is : " , userId);
      
    }
 
    const getTasks =async ()=>{
      const prodId = + data.productId;
      const taskRes = await getTaskAsperProductId(prodId);
      setTasks(taskRes);
      console.log(data);
      
      // console.log("taskres",taskRes);
      
     
    }
    getTasks();
    

  }, []);

  const tasks = [5, 8, 4, 4, 454, 55];
  return (
    <div className="h-screen w-full flex bg-zinc-50">
      <DetailsSidebar />
      {/* middle part */}
      <div className="h-screen w-full">
        {/* middle upper navbar */}
        <div className=" w-full bg-zinc-50 flex flex-col justify-center py-5 px-10 border-b">
          {/* upper div product name and other sections */}
          <div className="flex w-full justify-between ">
            {/* left upper part */}
            <div className="flex items-center gap-2">
              <div className="h-10  w-10 bg-indigo-700 flex justify-center items-center rounded-lg" style={{backgroundColor:data.productcolor}}>
                <Image className="h-10 w-10 object-cover rounded-md" src={data.productlogo} height={900} width={900} alt="productlogo" />
              </div>

              <div>
                <p className="text-zinc-900  font-medium">{data.name}</p>
                <p className="text-xs font-medium text-zinc-500">
                  Product id: {data.productId} 
                </p>
              </div>
            </div>
            {/* right upper part */}
            <div className="flex gap-24 relative">
              {/* members icons */} 
              <div className="relative">
                {
                  data.members.length > 1 && (
                    <div className=" absolute h-10 w-10 border bg-zinc-700 rounded-full flex justify-center items-center">
                <Image className="h-10 w-10 object-cover rounded-full"  src={data.members[0].avatar} height={900} width={900} alt="userimage" />
                </div>
                  )
                }
                <div className=" absolute h-10 w-10 left-5 border bg-zinc-700 rounded-full flex justify-center items-center">
                {
                  data.members.length > 1 && (
                    <div className=" absolute h-10 w-10 border bg-zinc-700 rounded-full flex justify-center items-center">
                <Image className="h-10 w-10 object-cover rounded-full"  src={data.members[1].avatar} height={900} width={900} alt="userimage" />
                </div>
                  )
                }
                </div>
                <div className=" absolute h-10 w-10 left-10 border bg-zinc-700 rounded-full flex justify-center items-center">
                  <p className="text-sm font-medium text-white">{data.members.length}+</p>
                </div>
              </div>
              {/* other buttons */}
              <div className=" flex gap-2">
                <Button  className="flex gap-1" size={"sm"} variant={"outline"}>
                <Addmemebr productId={data.productId} />
                </Button>
                <Button className="flex gap-1 bg-indigo-700" size={"sm"}>
                 <AssignTaskComponent prodId={data.productId} />
                </Button>
              </div>
            </div>
          </div>

          {/* bottom nav bar of upper bar */}
          <div className="w-full flex mt-5 gap-10">
            {/* first div */}
            <div className="flex  items-center">
              <Dot
                className="text-yellow-400"
                strokeWidth={8}
                absoluteStrokeWidth
              />
              <p className="text-xs font-medium">Status: Under Developement</p>
            </div>
            {/* second div */}
            <div className="items-center flex gap-1">
              <Settings className="text-indigo-700" size={15} strokeWidth={2} />
              <p className="text-xs font-medium">Edit product details</p>
            </div>
            <div className="items-center flex gap-1">
              <LucideWorkflow
                className="text-teal-700"
                size={15}
                strokeWidth={2}
              />
              <p className="text-xs font-medium">Assign a new task</p>
            </div>
          </div>
        </div>
        {/* upper bar ends here */}

        {/* search bar div */}
        <div className="h-20 w-full border-b flex items-center px-10 justify-between">
          <div className=" flex gap-1 items-center text-zinc-700">
            <Search size={15} strokeWidth={3} />
            <input
              className="outline-none border-none bg-transparent placeholder:text-xs placeholder:font-medium"
              type="text"
              placeholder="Search for any tasks"
            />
          </div>

          {/* right div */}
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-1 text-zinc-500">
              <ListFilter size={15} strokeWidth={3} />
              <p className="text-sm font-normal">Apply filters</p>
            </div>
            <div className="flex items-center gap-1 text-zinc-500">
              <p className="text-sm font-normal">View more</p>
              <ChevronDown size={15} strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* aissng task div start from here */}
        <div className="w-full px-10  gap-2 mt-5">
          <p className="text-sm font-medium">Assigned Tasks</p>
          <p className="text-xs font-normal mt-1 text-zinc-500">
            All the tasks you have assigned to the team members
          </p>
          {
            Tasks && (
              <div className="flex gap-2 flex-wrap mt-5">
            {Tasks.data.map((curr: any) => {
              return (
                <TaskAssignedCard data={curr} />
              );
            })}
          </div>
            )
          }
        </div>
        {/* assign tasks div ends here */}
      </div>
    </div>
  );
};

export default ProductdashBoard;
