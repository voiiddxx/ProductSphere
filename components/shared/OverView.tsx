import React from 'react'
import { Button } from '../ui/button'

const OverView = () => {
  return (
    <div className='w-full px-8 py-4 ' >
        {/* upper heading bar */}
        <div className='w-full flex justify-between' >
            
        <h1 className='text-2xl font-semibold' >Overall Insights</h1>
        <div className='flex gap-2' >
            <Button>Edit Product</Button>

        </div>

        </div>
        {/* upper heading bar end */}

        {/* cards div */}
        <div className='w-full flex flex-wrap gap-4' >
            <div className='h-[150px] w-[200px] bg-white  rounded-md' ></div>
            <div className='h-[150px] w-[200px] bg-white  rounded-md' ></div>
            <div className='h-[150px] w-[200px] bg-white  rounded-md' ></div>
            <div className='h-[150px] w-[200px] bg-white  rounded-md' ></div>
            <div className='h-[150px] w-[200px] bg-white  rounded-md' ></div>

        </div>
        {/* cards div end */}


    </div>
  )
}

export default OverView