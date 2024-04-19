import React from "react";
import DetailsSidebar from "./DetailsSidebar";
import { Box, ChevronDown, Dot, Filter, ListFilter, ListTodo, LucideWorkflow, Network, Search, Settings, User } from "lucide-react";
import { Button } from "../ui/button";

const ProductdashBoard = () => {

  const tasks = [5,8,4,4,454,55]
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
                <p className="text-zinc-900  font-medium">ProductSphere</p>
                <p className="text-xs font-medium text-zinc-500">
                  Product id: 51581101518
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
                <Button className="flex gap-1" size={"sm"} variant={"outline"}>
                  <Network size={15} strokeWidth={1.5} />
                  <p className="text-xs font-medium">Add members</p>
                </Button>
                <Button className="flex gap-1 bg-indigo-700" size={"sm"}>
                  <ListTodo size={15} strokeWidth={1.5} />
                  <p className="text-xs font-medium">Assign Tasks</p>
                </Button>
              </div>
            </div>
          </div>

          {/* bottom nav bar of upper bar */}
          <div className="w-full flex mt-5 gap-10" >
            {/* first div */}
            <div className="flex  items-center" >
                <Dot className="text-yellow-400"   strokeWidth={8} absoluteStrokeWidth />
                <p className="text-xs font-medium" >Status: Under Developement</p>
                 </div>
            {/* second div */}
            <div className="items-center flex gap-1" >
            <Settings className="text-indigo-700" size={15} strokeWidth={2} />
            <p className="text-xs font-medium" >Edit product details</p>
            </div>
            <div className="items-center flex gap-1" >
            <LucideWorkflow className="text-teal-700" size={15} strokeWidth={2} />
            <p className="text-xs font-medium" >Assign a new task</p>
            </div>
          </div>
 
        </div>
        {/* upper bar ends here */}


        {/* search bar div */}
        <div className="h-20 w-full border-b flex items-center px-10 justify-between" >

         <div className=" flex gap-1 items-center text-zinc-700" >
          <Search size={15} strokeWidth={3}/>
         <input className="outline-none border-none bg-transparent placeholder:text-xs placeholder:font-medium" type="text" placeholder="Search for any tasks" />
         </div>


         {/* right div */}
         <div className="flex gap-6 items-center" >

          <div className="flex items-center gap-1 text-zinc-500" >
            <ListFilter size={15} strokeWidth={3}/><p className="text-sm font-normal" >Apply filters</p>
          </div>
          <div className="flex items-center gap-1 text-zinc-500" >
            <p className="text-sm font-normal" >View more</p>
            <ChevronDown size={15} strokeWidth={3}/>
          </div>

         </div>

        </div>

        {/* aissng task div start from here */}
        <div className="w-full px-10  gap-4 mt-5" >
          <p className="text-sm font-medium" >Assigned Tasks</p>
          <p className="text-xs font-normal mt-1 text-zinc-500" >All the tasks you have assigned to the team members</p>
         <div className="flex gap-4 flex-wrap mt-5" >
         {
            tasks.map((curr:any)=>{
              return <div className="h-[250px] w-[350px] bg-white border rounded-md" >

              </div>
            })
          }
         </div>

        </div>
        {/* assign tasks div ends here */}


      </div>

    </div>
  );
};

export default ProductdashBoard;
