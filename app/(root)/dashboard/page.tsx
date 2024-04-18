import DashboardHome from '@/components/shared/DashboardHome'
import DashBoardNav from '@/components/shared/DashBoardNav'
import DashboardSidebar from '@/components/shared/DashboardSidebar'
import { currentUser } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {

  return (
    <div className='w-full min-h-screen' >
      <DashBoardNav/>
      <div className='min-h-screen flex' >
        {/* sidebard div */}
       <DashboardSidebar/>
        {/* right div */}
        <div className='min-h-screen w-full   flex justify-normal items-start px-5' >
            {/* upper div */}
            
            {/* start project div */}
            <DashboardHome/>
        </div>
      </div>
    </div>
  )
}

export default page
