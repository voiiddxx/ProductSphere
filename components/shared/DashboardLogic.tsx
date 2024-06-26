"use client"
import React, { useEffect, useState } from 'react'
import { Gem, LayoutGrid, Rabbit, Sun, SunDim, User } from 'lucide-react'
import DashBoardNav from './DashBoardNav'
import DashboardHome from './DashboardHome'
import FindProducts from './FindProducts'
import { getUserUsingClerkid } from '@/lib/actions/user.action'
import Developer from './Developer'
import Profile from './Profile'

const DashboardLogic = () => {

    const [NavData, setNavData] = useState<string>("Projects")
  

   
  return (
    <div className='w-full min-h-screen' >
    <DashBoardNav/>
    <div className='min-h-screen flex' >
      {/* sidebard div */}
      <div className='min-h-screen md:w-80 w-14  border-r flex flex-col justify-between' >
      {/*  */}
     <div>
    {
      NavData == "Projects" ?  <div onClick={()=>{
        setNavData("Projects");
       }} className='h-20  md:mx-8 text-indigo-700  justify-center md:justify-normal flex items-center gap-2 border-b cursor-pointer' >
          <Sun size={15} strokeWidth={2} />
          <p className='text-sm font-medium md:block hidden' >Your Projects</p>
        </div> :  <div onClick={()=>{
      setNavData("Projects");
     }} className='h-20  md:mx-8 justify-center md:justify-normal flex items-center gap-2 border-b cursor-pointer' >
        <Sun size={15} strokeWidth={2} />
        <p className='text-sm font-medium md:block hidden' >Your Projects</p>
      </div>
    }
    {
      NavData == "FindProjects" ?  <div onClick={()=>{
        setNavData("FindProjects");
     }} className='h-20 text-indigo-700  md:mx-8 justify-center md:justify-normal flex items-center gap-2 border-b cursor-pointer' >
        <LayoutGrid size={15} strokeWidth={2} />
        <p className='text-sm font-medium md:block hidden' >Find products</p>
      </div> :  <div onClick={()=>{
        setNavData("FindProjects");
     }} className='h-20  md:mx-8 justify-center md:justify-normal flex items-center gap-2 border-b cursor-pointer' >
        <LayoutGrid size={15} strokeWidth={2} />
        <p className='text-sm font-medium md:block hidden' >Find products</p>
      </div>
    }
     {
      NavData == "Developer" ? <div onClick={()=>{
        setNavData("Developer")
       }} className='h-20 text-indigo-700  md:mx-8 justify-center md:justify-normal flex items-center gap-2 border-b cursor-pointer' >
          <Rabbit size={15} strokeWidth={2} />
          <p className='text-sm font-medium md:block hidden' >Find Developers</p>
        </div> : <div onClick={()=>{
      setNavData("Developer")
     }} className='h-20  md:mx-8 justify-center md:justify-normal flex items-center gap-2 border-b cursor-pointer' >
        <Rabbit size={15} strokeWidth={2} />
        <p className='text-sm font-medium md:block hidden' >Find Developers</p>
      </div>
     }
     {
      NavData == "profile" ? <div onClick={()=>{
        setNavData("Profile");
       }} className='h-20 text-indigo-700  md:mx-8 justify-center md:justify-normal flex items-center gap-2 border-b cursor-pointer' >
          <Gem size={15} strokeWidth={2} />
          <p className='text-sm font-medium md:block hidden' >My Profile</p>
        </div> : <div onClick={()=>{
      setNavData("Profile");
     }} className='h-20  md:mx-8 justify-center md:justify-normal flex items-center gap-2 border-b cursor-pointer' >
        <Gem size={15} strokeWidth={2} />
        <p className='text-sm font-medium md:block hidden' >My Profile</p>
      </div>
     }
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
          <p className='text-sm font-medium md:block hidden text-zinc-900' >Nikhil Kumar</p>
          <p className='text-xs font-medium md:block hidden text-zinc-600' >nikhildesign@gmail.conm</p>
        </div>

      </div>

      </div>
  </div>
      {/* right div */}
      <div className='min-h-screen w-full   flex justify-normal items-start px-5 bg-zinc-100' >
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
          {
            NavData == "Developer" && (
              <Developer/>
            )
          }
          {
            NavData == "Profile" && (
              <Profile/>
            )
          }
      </div>
    </div>
  </div>
  )
}

export default DashboardLogic