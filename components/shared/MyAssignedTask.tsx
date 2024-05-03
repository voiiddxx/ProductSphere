"use client";
import { Blocks, ChevronDown, ListFilter, ListTodo, Loader, Search } from "lucide-react";
import React, { useState } from "react";
import TaskDetail from "./TaskDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type MytasksProps = {
  data: any;
};

const MyAssignedTask = ({ data }: MytasksProps) => {
        const [PendingTasks, setPendingTasks] = useState<any>([]);
        const [completeTasks, setcompleteTasks] = useState<any>([]);

        // const MyTasks = res.filter(task=>{
        //     const asingd =  task.AssignMembers.some((curr:any)=>{
        //      console.log(curr.username , "id:" , curr.id , "checking with id :" , +userid!);
        //      return curr.id === +userid!;
             
        //     });
        //     console.log("Task:", task.title, "User ID:", userid, "Is User Assigned:", asingd);
            
        //     return asingd;
        //    });

        const getPendingTasks = ()=>{
            const res = [...data];
            const pending = res.filter(curr => curr.status === 'Pending');
            console.log("This is pending tasks" , pending);
        }


        const getCompletedTasks = ()=>{
            const res = [...data];
            const completed = res.filter(curr => curr.status === 'Completed');
            console.log("This is pending tasks" , completed);
        }
  return (
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


      <div className="mt-4 px-10" >
      <Tabs defaultValue="all" className="w-[full">
        <TabsList>
          <TabsTrigger value="all">
          <div className="flex gap-1" >
                <Blocks size={17} />
                <p className="font-medium text-sm" >All Tasks </p>
              </div>
          </TabsTrigger>
          <TabsTrigger  value="complted">
          <div className="flex gap-1" >
                <ListTodo size={17} />
                <p className="font-medium text-sm" >Completed Tasks </p>
              </div>
          </TabsTrigger>
          <TabsTrigger value="pending">
          <div className="flex gap-1" >
                <Loader size={17} />
                <p className="font-medium text-sm" >Pending Tasks </p>
              </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
        <div className="w-full  gap-2 mt-5">
        <p className="text-sm font-medium">Assigned Tasks</p>
        <p className="text-xs font-normal mt-1 text-zinc-500">
          All the tasks you have assigned to the team members
        </p>

        {data.length < 1 && (
          <div className="flex w-full justify-center items-center mt-28">
            <p>No Data found</p>
          </div>
        )}
        {data && (
          <div className="flex gap-6 flex-wrap mt-5">
            {data.map((curr: any) => {
              return <TaskDetail data={curr} />;
            })}
          </div>
        )}
      </div>
        </TabsContent>
        <TabsContent value="completed">Change your password here.</TabsContent>
      </Tabs>

      </div>
      {/* aissng task div start from here */}
     
    </>
  );
};

export default MyAssignedTask;
