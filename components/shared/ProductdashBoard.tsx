"use client";
import React, { useEffect, useState } from "react";
import DetailsSidebar from "./DetailsSidebar";
import {
  ArrowLeft,
  Box,
  CalendarRangeIcon,
  CheckCheck,
  ChevronDown,
  CornerRightDown,
  Dot,
  File,
  Filter,
  Flame,
  Home,
  ListFilter,
  ListTodo,
  ListTodoIcon,
  LucideWorkflow,
  MessageCircleDashed,
  MoreVertical,
  MousePointerClick,
  Network,
  PackageCheck,
  Search,
  Settings,
  SunMoon,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import AssignTaskComponent from "./AssignTaskComponent";
import { getTaskAsperProductId } from "@/lib/actions/task.action";
import TaskAssignedCard from "./TaskAssignedCard";
import Image from "next/image";
import Addmemebr from "./Addmemebr";
import TaskDetail from "./TaskDetail";
import OverView from "./OverView";

type ProductDataProps = {
  data: any;
};

const ProductdashBoard = ({ data }: ProductDataProps) => {
  const [Tasks, setTasks] = useState<any>(null);
  const [NavBarData, setNavBarData] = useState<any>("Overview");

  useEffect(() => {
   
    const getTasks = async () => {
      const prodId = +data.productId;
      const taskRes = await getTaskAsperProductId(prodId);
      setTasks(taskRes);
    };

    
    getTasks();
  }, []);

  return (
    <div className="h-screen w-full flex bg-zinc-50">
      {/* sidebar part */}
      <div className="h-full w-[80px] md:w-[300px] border-r flex flex-col justify-between">
        {/* upper div */}
        <div className="w-full">
          {/* product logo div */}
          <div className="w-full  bg-white  border-b pb-4">
            <Image
              className="h-20 w-auto"
              src={`/MainLogo.svg`}
              height={1500}
              width={1500}
              alt="productlogo"
            />
           
          </div>

          {/* main nav links */}

          <div className="w-full" >
            {/* first row */}
           {
            NavBarData == "Overview" ?  <div className="h-16 border-b  w-full flex items-center  justify-start px-8 gap-1 text-indigo-700" >
            <Home size={20} /> <p className="font-semibold text-sm" >Overview</p>
              </div> :  <div onClick={()=>{
                setNavBarData("Overview")
              }} className="h-16 border-b  w-full flex items-center  justify-start px-8 gap-1 text-zinc-600" >
            <Home size={20} /> <p className="font-semibold text-sm" >Overview</p>
              </div> 
           }
           {
            NavBarData == null ?  <div className="h-16 border-b  w-full flex items-center  justify-start px-8 gap-1 text-indigo-700" >
            <PackageCheck size={20} /> <p className="font-semibold text-sm" >All Tasks</p>
              </div> :  <div onClick={()=>{
                setNavBarData(null);
              }} className="h-16 border-b  w-full flex items-center  justify-start px-8 gap-1 text-zinc-600" >
            <PackageCheck size={20} /> <p className="font-semibold text-sm" >All Tasks</p>
              </div> 
           }
           {
            NavBarData == "Completed" ?  <div className="h-16 border-b  w-full flex items-center  justify-start px-8 gap-1 text-indigo-700" >
            <ListTodoIcon size={20} /> <p className="font-semibold text-sm" >Completed tasks</p>
              </div> :  <div onClick={()=>{
                setNavBarData("Completed");
              }} className="h-16 border-b  w-full flex items-center  justify-start px-8 gap-1 text-zinc-600" >
            <ListTodoIcon size={20} /> <p className="font-semibold text-sm" >Completed tasks</p>
              </div> 
           }
           {
            NavBarData == "More" ?  <div className="h-16 border-b  w-full flex items-center  justify-start px-8 gap-1 text-indigo-700" >
            <SunMoon size={20} /> <p className="font-semibold text-sm" >Pending Tasks</p>
              </div> :  <div className="h-16 border-b  w-full flex items-center  justify-start px-8 gap-1 text-zinc-600" >
            <SunMoon size={20} /> <p className="font-semibold text-sm" >Pending Tasks</p>
              </div> 
           }
           {
            NavBarData == "Discuion" ?  <div className="h-16 border-b  w-full flex items-center  justify-start px-8 gap-1 text-indigo-700" >
            <MessageCircleDashed size={20} /> <p className="font-semibold text-sm" >Discussion</p>
              </div> :  <div className="h-16 border-b  w-full flex items-center  justify-start px-8 gap-1 text-zinc-600" >
            <MessageCircleDashed size={20} /> <p className="font-semibold text-sm" >Discussion</p>
              </div> 
           }

          </div>
         

          {/* nav 2 */}

          
        </div>
        {/* middle div */}
        {/* bottom div */}
        <div className="w-full pb-5 px-4">
          <div className="w-full flex gap-2">
            <div className="h-12 w-12 rounded-full flex justify-center items-center bg-zinc-200">
              <User />
            </div>
            <div>
              <p className="font-medium text-indigo-700">Nikhil Kumar</p>
              <p className="text-zinc-700 font-medium text-xs">
                nikhildesign00@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar part end */}
      {/* middle part */}
      <div className="h-screen w-full">
        {/* middle upper navbar */}
        <div className=" w-full bg-zinc-50 flex flex-col justify-center py-5 md:px-10 px-4 border-b">
          {/* upper div product name and other sections */}
          <div className="flex md:flex-row flex-col gap-4  w-full justify-between ">
            {/* left upper part */}
            <div className="flex items-center gap-2">
              <div
                className="h-10  w-10 bg-indigo-700 flex justify-center items-center rounded-lg"
                style={{ backgroundColor: data.productcolor }}
              >
                <Image
                  className="h-10 w-10 object-cover rounded-md"
                  src={data.productlogo}
                  height={900}
                  width={900}
                  alt="productlogo"
                />
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
                {data.members.length > 1 && (
                  <div className=" absolute h-10 w-10 border bg-zinc-700 rounded-full flex justify-center items-center">
                    <Image
                      className="h-10 w-10 object-cover rounded-full"
                      src={data.members[0].avatar}
                      height={900}
                      width={900}
                      alt="userimage"
                    />
                  </div>
                )}
                <div className=" absolute h-10 w-10 left-5 border bg-zinc-700 rounded-full flex justify-center items-center">
                  {data.members.length > 1 && (
                    <div className=" absolute h-10 w-10 border bg-zinc-700 rounded-full flex justify-center items-center">
                      <Image
                        className="h-10 w-10 object-cover rounded-full"
                        src={data.members[1].avatar}
                        height={900}
                        width={900}
                        alt="userimage"
                      />
                    </div>
                  )}
                </div>
                <div className=" absolute h-10 w-10 left-10 border bg-zinc-700 rounded-full flex justify-center items-center">
                  <p className="text-sm font-medium text-white">
                    {data.members.length}+
                  </p>
                </div>
              </div>
              {/* other buttons */}
              <div className=" flex gap-2">
                <Button className="flex gap-1" size={"sm"} variant={"outline"}>
                  <Addmemebr productId={data.productId} />
                </Button>
                <Button className="flex gap-1 bg-indigo-700" size={"sm"}>
                  <AssignTaskComponent prodId={data.productId} />
                </Button>
              </div>
            </div>
          </div>

          {/* bottom nav bar of upper bar */}
          <div className="w-full md:flex mt-5 gap-10 hidden">
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
        {NavBarData == null && (
          <>
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
                Tasks.data.length < 1 && (
                  <div className="flex w-full justify-center items-center mt-28" >
                    <p>No Data found</p>
                  </div>
                )
              }
              {Tasks && (
                <div className="flex gap-6 flex-wrap mt-5">
                  {Tasks.data.map((curr: any) => {
                    return <TaskDetail data={curr} />;
                  })}
                </div>
              )}
            </div>
            {/* assign tasks div ends here */}
          </>
        )}

        {/* navbar logic stays here */}
        {NavBarData == "Overview" && <OverView data={data} />}
        {/* {NavBarData == "Overview" && <OverView data={data} />} */}
      </div>
    </div>
  );
};

export default ProductdashBoard;
