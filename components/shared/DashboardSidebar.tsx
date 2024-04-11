import { SunDim } from 'lucide-react'
import React from 'react'

const DashboardSidebar = () => {

    const data = [5,6,5,6,2,5,6,9,7]
  return (
    <div className='min-h-screen w-72  border-r' >
      {
        data.map((curr:any)=>{
            return <div className='pb-6 border-b pt-4 pl-5' >
                <p className='text-xs font-medium' >Projects</p>
              <div className='flex flex-col gap-3 mt-4' >
              <div className='flex items-center gap-2' >
                <SunDim size={15} strokeWidth={1.5} />
              <p className='text-sm font-medium text-zinc-800' >productsphere</p>
              </div>
              <div className='flex items-center gap-2' >
                <SunDim size={15} strokeWidth={1.5} />
              <p className='text-sm font-medium text-zinc-800' >Access Tokens</p>
              </div><div className='flex items-center gap-2' >
                <SunDim size={15} strokeWidth={1.5} />
              <p className='text-sm font-medium text-zinc-800' >Security concerns</p>
              </div><div className='flex items-center gap-2' >
                <SunDim size={15} strokeWidth={1.5} />
              <p className='text-sm font-medium text-zinc-800' >productsphere</p>
              </div>
              </div>
            </div>
        })
      }
    </div>
  )
}

export default DashboardSidebar
