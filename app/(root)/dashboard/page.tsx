import DashBoardNav from '@/components/shared/DashBoardNav'
import DashboardSidebar from '@/components/shared/DashboardSidebar'
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
            <div className='h-40 w-full flex justify-center items-center flex-col border-dashed border mt-10 ' >
                <p className='text-sm font-medium' >No Projects </p>
                <p className='text-xs font-medium text-zinc-500' >Get Start by creating your first project</p>

                   <Link href={`/dashboard/products/create`} >
                   <div className=' flex gap-1 mt-4 border px-2 py-2 rounded-md bg-indigo-700 text-white items-center' >
                        <Plus size={15} strokeWidth={1.5} />
                        <p className='text-xs font-medium' >New product</p>
                    </div></Link>

            </div>
        </div>
      </div>
    </div>
  )
}

export default page
