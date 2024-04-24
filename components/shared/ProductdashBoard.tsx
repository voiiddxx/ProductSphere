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
import { GetTaskAsperProductId } from "@/lib/actions/task.action";

type ProductDataProps = {
  data: any;
};

const ProductdashBoard = ({ data }: ProductDataProps) => {
  const [IsOwner, setIsOwner] = useState<boolean>(false);

  useEffect(() => {
    const localUser = localStorage.getItem("x-auth-id");
    const userId = +localUser!;

    const getTasks =async ()=>{
      const taskRes = await GetTaskAsperProductId(data.productId);
      console.log("TaskRes: " , taskRes);
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
              <div className="h-10  w-10 bg-indigo-700 flex justify-center items-center rounded-lg">
                <Box strokeWidth={1.5} color="white" size={25} />
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
                <div className=" absolute h-10 w-10 border bg-zinc-700 rounded-full flex justify-center items-center">
                  <User strokeWidth={1.5} color="white" size={17} />
                </div>
                <div className=" absolute h-10 w-10 left-5 border bg-zinc-700 rounded-full flex justify-center items-center">
                  <User strokeWidth={1.5} color="white" size={17} />
                </div>
                <div className=" absolute h-10 w-10 left-10 border bg-zinc-700 rounded-full flex justify-center items-center">
                  <p className="text-sm font-medium text-white">5+</p>
                </div>
              </div>
              {/* other buttons */}
              <div className=" flex gap-2">
                <Button  className="flex gap-1" size={"sm"} variant={"outline"}>
                  <Network size={15} strokeWidth={1.5} />
                  <p className="text-xs font-medium">Add members </p>
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
          <div className="flex gap-2 flex-wrap mt-5">
            {tasks.map((curr: any) => {
              return (
                <div className="h-[300px] w-[400px] bg-white border rounded-md px-4 py-2 flex flex-col justify-between">
                  {/* task upper title and status part */}
                  <div>
                    <div className="flex w-full justify-between  items-center mt-2">
                      <p className="text-zinc-700 text-sm font-semibold">
                        Data Enhancement
                      </p>
                      <div className="flex gap-2">
                        <div className="px-[7px] py-[2px] bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
                          <Flame size={12} strokeWidth={2} />
                          <p className="text-[10px] font-medium text-yellow-500">
                            High Priority
                          </p>
                        </div>
                        <div className="px-[7px] py-[2px] bg-red-50 rounded-full">
                          <p className="text-[10px] font-medium text-red-500">
                            Pending
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs mt-4 mr-10 text-zinc-500">
                        Enhance the data refreshment technique and boost the api
                        request hitting time to reduce effort
                      </p>
                    </div>

                    <div className="flex gap-1 items-center text-indigo-700 mt-4">
                      <File size={15} />
                      <p className="text-xs font-medium">2 files attached</p>
                    </div>

                    {/* members attachded file part */}
                    <div className="relative mt-4">
                      <div className=" absolute h-8 w-8 border bg-zinc-700 rounded-full flex justify-center items-center">
                        <User strokeWidth={1.5} color="white" size={17} />
                      </div>
                      <div className=" absolute h-8 w-8 left-5 border bg-zinc-700 rounded-full flex justify-center items-center">
                        <User strokeWidth={1.5} color="white" size={17} />
                      </div>
                      <div className=" absolute h-8 w-8 left-10 border bg-zinc-700 rounded-full flex justify-center items-center">
                        <p className="text-sm font-medium text-white">5+</p>
                      </div>
                    </div>
                  </div>

                  {/* task detail section */}

                  {/* bottom task card div */}
                  <div>
                    <p className="text-xs text-zinc-600">Due Date</p>
                    <div className="flex gap-2">
                      <CalendarRangeIcon size={15} strokeWidth={1.5} />
                      <p className="text-xs text-zinc-600">5 April 2024</p>
                    </div>

                    {/* last div */}
                    <div className="w-full flex justify-between mt-4">
                      <div className=" flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-indigo-700 flex justify-center items-center"></div>
                        <p className="text-xs font-medium text-zinc-500">
                          Created by Nikhil
                        </p>
                      </div>

                      <div>
                        <MoreVertical className="text-zinc-500" size={15} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* assign tasks div ends here */}
      </div>
    </div>
  );
};

export default ProductdashBoard;
