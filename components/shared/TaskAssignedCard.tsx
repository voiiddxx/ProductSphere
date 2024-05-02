import { currentUser } from "@clerk/nextjs";
import {
  ArrowUpRight,
  CalendarRangeIcon,
  File,
  Flame,
  ListTodo,
  MoreVertical,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type AssignTaskProps = {
  data: any;
};

const TaskAssignedCard = ({ data }: AssignTaskProps) => {
  return (
      <div className="h-[250px] w-[350px] rounded-md bg-white relative py-5 px-2 flex flex-col justify-between items-start" >
        

       <div>
         {/* upper bar logic */}
         {
          data.priority == "High" && (
            <div className="h-2 w-full bg-red-500 rounded-t-md absolute top-0 left-0" >
            </div>
          )
        }
        {
          data.priority == "Average" && (
            <div className="h-2 w-full bg-yellow-500 rounded-t-md absolute top-0 left-0" >
            </div>
          )
        }
        {
          data.priority == "Low" && (
            <div className="h-2 w-full bg-green-500 rounded-t-md absolute top-0 left-0" >
            </div>
          )
        }



        <div className="flex gap-2 items-start" >
        {
          data.priority == "High" && (<div className="h-8 w-8 rounded-full bg-red-50 flex justify-center items-center" >
          <ListTodo  className="text-red-600" size={18} strokeWidth={1.75} />
          </div>)
        }
        {
          data.priority == "Average" && (<div className="h-8 w-8 rounded-full bg-yellow-50 flex justify-center items-center" >
          <ListTodo  className="text-yellow-600" size={18} strokeWidth={1.75} />
          </div>)
        }
        {
          data.priority == "Low" && (<div className="h-8 w-8 rounded-full bg-green-50 flex justify-center items-center" >
          <ListTodo  className="text-green-600" size={18} strokeWidth={1.75} />
          </div>)
        }
        <p className="text-lg font-medium text-left" >{data.title}</p>
        </div>

        {/* detail */}
        <div className="" >
          <p className="text-left text-xs mt-2 font-medium text-zinc-500" >{data.desc}</p>
        </div>

       </div>

       <div className=" w-full flex justify-between items-center" >

        <div className="flex gap-2" >
        {
           data.priority == "High" && (
            <div className="px-2 py-1 rounded-full bg-red-100" >
            <p className="text-[10px] font-medium text-red-600" >Priority: {data.priority}</p>
            </div>
           )
        }
        {
           data.priority == "Average" && (
            <div className="px-2 py-1 rounded-full bg-yellow-100" >
            <p className="text-[10px] font-medium text-yellow-600" >Priority: {data.priority}</p>
            </div>
           )
        }
        {
           data.priority == "Low" && (
            <div className="px-2 py-1 rounded-full bg-green-100" >
            <p className="text-[10px] font-medium text-green-600" >Priority: {data.priority}</p>
            </div>
           )
        }

        <div className="px-2 py-1 rounded-full bg-indigo-100" >
        <p className="text-[10px] font-medium text-indigo-700" >Status:{data.status}</p>
        </div>

        </div>

        <div>
          <ArrowUpRight className="text-zinc-700 mr-4" size={15} />
        </div>

     
        
        </div>

      </div>
  );
};

export default TaskAssignedCard;




// <div className="h-[300px] w-[400px] bg-white border rounded-md px-4 py-2 flex flex-col justify-between">
// {/* task upper title and status part */}
// <div>
//   <div className="flex w-full justify-between  items-center mt-2">
//     <p className="text-zinc-700 text-sm font-semibold">{data.title}</p>
//     <div className="flex gap-2">
//       <div className="px-[7px] py-[2px] bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
//         <Flame size={8} strokeWidth={2} />
//         <p className="text-[10px] font-medium text-yellow-500">
//           {data.priority}
//         </p>
//       </div>
//       <div className="px-[7px] py-[2px] bg-red-50 rounded-full">
//         <p className="text-[10px] font-medium text-red-500">
//           {data.status}
//         </p>
//       </div>
//     </div>
//   </div>

//   <div>
//     <p className="text-xs mt-4 mr-8 text-zinc-500">{data.desc}</p>
//   </div>

//   <div className="flex gap-1 items-center text-indigo-700 mt-4">
//     <File size={15} />
//     <p className="text-xs font-medium">1 file attached</p>
//   </div>

//   {/* members attachded file part */}
//   <div className="relative mt-4">
//     <div className=" absolute h-8 w-8 border bg-zinc-700 rounded-full flex justify-center items-center">
//       <User strokeWidth={1.5} color="white" size={17} />
//     </div>
//     <div className=" absolute h-8 w-8 left-5 border bg-zinc-700 rounded-full flex justify-center items-center">
//       <User strokeWidth={1.5} color="white" size={17} />
//     </div>
//     <div className=" absolute h-8 w-8 left-8 border bg-zinc-700 rounded-full flex justify-center items-center">
//       <p className="text-sm font-medium text-white">
//         {data.AssignMembers.length}+
//       </p>
//     </div>
//   </div>
// </div>

// {/* task detail section */}

// {/* bottom task card div */}
// <div>
//   <p className="text-xs text-zinc-600">Due Date</p>
//   <div className="flex gap-2">
//     <CalendarRangeIcon size={15} strokeWidth={1.5} />
//     <p className="text-xs text-zinc-600">{data.dueDate}</p>
//   </div>

//   {/* last div */}
//   <div className="w-full flex justify-between mt-4">
//     <div className=" flex items-center gap-2">
//       <div className="h-6 w-6 rounded-full bg-indigo-700 flex justify-center items-center"></div>
//       <p className="text-xs font-medium text-zinc-500">
//         Created by {data.createdBy.username}
//       </p>
//     </div>

//     <div>
//       <MoreVertical className="text-zinc-500" size={15} />
//     </div>
//   </div>
// </div>
// </div>