import { SignedIn, UserButton } from '@clerk/nextjs'
import { Github, Inbox } from 'lucide-react'
import React from 'react'

const DashBoardNav = () => {
  return (
    <div className='h-14 w-full border-b flex justify-between items-center' >

        {/* left div */}
        <div className='h-full md:w-72  flex items-center pl-6' >
            <p className='font-medium text-sm md:text-lg' >Dashboard</p>
        </div>
        {/* right div */}
        <div className='flex items-center pl-5 w-full h-full justify-between' >
            <div className='hidden md:block' >
            <p className='font-medium md:text-sm text-xs' >Your Projects (0) </p>
            </div>
            <div className='flex gap-4 pr-10 items-center' >

                <p className='px-2 py-1 border rounded-md cursor-pointer hover:bg-zinc-100 text-xs font-medium' >feedback</p>
                <Github size={17} strokeWidth={1.5} />
                <Inbox size={17} strokeWidth={1.5} />
                <SignedIn>
                  <UserButton afterSignOutUrl='/' >
                  </UserButton>
                </SignedIn>
            </div>

        </div>
      
    </div>
  )
}

export default DashBoardNav
