"use client"
import React, { useState } from 'react'
import { Gem, LayoutGrid, Rabbit, Sun, SunDim, User } from 'lucide-react'
import DashBoardNav from './DashBoardNav'
import DashboardHome from './DashboardHome'
import FindProducts from './FindProducts'

const DashboardLogic = () => {

    const [NavData, setNavData] = useState<string>("Projects")
  return (
    <div className='w-full min-h-screen' >
    <DashBoardNav/>
    <div className='min-h-screen flex' >
      {/* sidebard div */}
      <div className='min-h-screen w-80  border-r flex flex-col justify-between' >
      {/*  */}
     <div>
     <div className='h-20  mx-8 flex items-center gap-2 border-b' >
        <Sun size={15} strokeWidth={2} />
        <p className='text-sm font-medium' >Your Projects</p>
      </div>
     <div onClick={()=>{
        setNavData("FindProjects");
     }} className='h-20  mx-8 flex items-center gap-2 border-b' >
        <LayoutGrid size={15} strokeWidth={2} />
        <p className='text-sm font-medium' >Find products</p>
      </div>
     <div className='h-20  mx-8 flex items-center gap-2 border-b' >
        <Rabbit size={15} strokeWidth={2} />
        <p className='text-sm font-medium' >Find Developers</p>
      </div>
     <div className='h-20  mx-8 flex items-center gap-2 border-b' >
        <Gem size={15} strokeWidth={2} />
        <p className='text-sm font-medium' >Access Premium</p>
      </div>
     </div>
     {/* bottom bar div */}
     <div className='h-20 mx-5  mb-20 flex flex-col gap-2 items-center justify-center' >
      <div className='flex gap-2' >
        {/* image div */}
        <div className='h-10 w-10 rounded-full bg-indigo-700 flex items-center justify-center' >
          <User size={18} strokeWidth={1.5} color='white' />
        </div>
        {/* data div */}
        <div>
          <p className='text-sm font-medium text-zinc-900' >Nikhil Kumar</p>
          <p className='text-xs font-medium text-zinc-600' >nikhildesign@gmail.conm</p>
        </div>

      </div>

      </div>
  </div>
      {/* right div */}
      <div className='min-h-screen w-full   flex justify-normal items-start px-5' >
          {/* upper div */}
          
          {/* start project div */}
          {
            NavData == "Projects" && (
                <DashboardHome/>
            )
          }
          {
            NavData == "FindProjects" && (
                <FindProducts/>
            )
          }
      </div>
    </div>
  </div>
  )
}

export default DashboardLogic