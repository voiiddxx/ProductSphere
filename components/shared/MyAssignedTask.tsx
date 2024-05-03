"use client"
import { ChevronDown, ListFilter, Search } from 'lucide-react';
import React, { useState } from 'react'
import TaskDetail from './TaskDetail';


    type MytasksProps = {
        data:any
    }


const MyAssignedTask = ({data}:MytasksProps) => {
    

  return ( <>
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
        data.length < 1 && (
          <div className="flex w-full justify-center items-center mt-28" >
            <p>No Data found</p>
          </div>
        )
      }
      {data && (
        <div className="flex gap-6 flex-wrap mt-5">
          {data.map((curr: any) => {
            return <TaskDetail data={curr} />;
          })}
        </div>
      )}
    </div>
    </>
  )
}

export default MyAssignedTask