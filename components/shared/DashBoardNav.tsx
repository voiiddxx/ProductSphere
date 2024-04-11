import { Github, Inbox } from 'lucide-react'
import React from 'react'

const DashBoardNav = () => {
  return (
    <div className='h-14 w-full border-b flex justify-between items-center' >

        {/* left div */}
        <div className='h-full w-72 border-r flex items-center pl-6' >
            <p className='font-medium' >Dashboard</p>
        </div>
        {/* right div */}
        <div className='flex items-center pl-5 w-full h-full justify-between' >
            <div>
            <p className='font-medium text-sm' >Your Projects (0) </p>
            </div>
            <div className='flex gap-4 pr-10 items-center' >

                <p className='px-2 py-1 border rounded-md cursor-pointer hover:bg-zinc-100 text-xs font-medium' >feedback</p>
                <Github size={17} strokeWidth={1.5} />
                <Inbox size={17} strokeWidth={1.5} />
            </div>

        </div>
      
    </div>
  )
}

export default DashBoardNav
