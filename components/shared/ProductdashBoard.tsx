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
  ListFilter,
  ListTodo,
  LucideWorkflow,
  MoreVertical,
  MousePointerClick,
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
import TaskDetail from "./TaskDetail";
import OverView from "./OverView";

type ProductDataProps = {
  data: any;
};

const ProductdashBoard = ({ data }: ProductDataProps) => {
  const [IsOwner, setIsOwner] = useState<boolean>(false);
  const [Tasks, setTasks] = useState<any>(null);
  const [NavBarData, setNavBarData] = useState<any>("Overview");
  const [ProductData, setProductData] = useState<any>(null);

  useEffect(() => {
    console.log("Value of Data: " , data);
    
    const localUser = localStorage.getItem("x-auth-id");
    const userId = +localUser!;
    if (data.ownerId === userId) {
      setIsOwner(true);
      // console.log("Values are:  " , data.ownerId , "another val is : " , userId);
    }

    const getTasks = async () => {
      const prodId = +data.productId;
      const taskRes = await getTaskAsperProductId(prodId);
      setTasks(taskRes);
      // console.log(data);

      // console.log("taskres",taskRes);
    };

    
    getTasks();
  }, []);

  const tasks = [5, 8, 4, 4, 454, 55];
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
            <div className="flex text-zinc-600 items-center ml-5 gap-1">
              <ArrowLeft size={16} strokeWidth={1.5} />
              <p className="text-xs">Back</p>
            </div>
          </div>

          {/* main nav links */}
          <div className=" md:flex hidden flex-col mt-5 px-5">
            <div className=" flex gap-1 items-center">
              <p className="font-medium text-zinc-800 text-sm">Primary</p>
              <CornerRightDown size={15} strokeWidth={1.75} />
            </div>
            {/* nav 1 */}
            <div
              onClick={() => {
                setNavBarData("Overview");
              }}
              className="flex items-center gap-2 mt-6 px-4 "
            >
              <MousePointerClick size={17} strokeWidth={1.5} />
              <p className="text-xs font-medium ">Product Overveiw</p>
            </div>
            <div onClick={()=>{
              setNavBarData(null);
            }} className="flex items-center gap-2 mt-6 px-4 ">
              <ListTodo size={17} strokeWidth={1.5} />
              <p className="text-xs font-medium ">Assigned Tasks</p>
            </div>
            <div className="flex items-center gap-2 mt-6 px-4 ">
              <CheckCheck size={17} strokeWidth={1.5} />
              <p className="text-xs font-medium ">Completed Tasks</p>
            </div>
          </div>

          {/* nav 2 */}

          <div className=" md:flex flex-col mt-5 px-5 hidden">
            <div className=" flex gap-1 items-center">
              <p className="font-medium text-zinc-800 text-sm">ProductSphere</p>
              <CornerRightDown size={15} strokeWidth={1.75} />
            </div>
            {/* nav 1 */}
            <div className="flex items-center gap-2 mt-6 px-4 ">
              <MousePointerClick size={17} strokeWidth={1.5} />
              <p className="text-xs font-medium ">Product details</p>
            </div>
            <div className="flex items-center gap-2 mt-6 px-4 ">
              <ListTodo size={17} strokeWidth={1.5} />
              <p className="text-xs font-medium ">Assigned Tasks</p>
            </div>
            <div className="flex items-center gap-2 mt-6 px-4 ">
              <CheckCheck size={17} strokeWidth={1.5} />
              <p className="text-xs font-medium ">Completed Tasks</p>
            </div>
            {/* nav 2 */}
          </div>
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
