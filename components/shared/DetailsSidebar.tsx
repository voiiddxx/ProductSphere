import { ArrowLeft, CheckCheck, CornerRightDown, Dot, ListTodo, MousePointerClick, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DetailsSidebar = () => {
    
  return (
    <div className='h-full w-[300px] border-r flex flex-col justify-between' >
        {/* upper div */}
        <div className='w-full' >
            {/* product logo div */}
            <div className='w-full  bg-white  border-b pb-4' >
                <Image className='h-20 w-auto' src={`/MainLogo.svg`} height={1500} width={1500} alt='productlogo' />
                <div className='flex text-zinc-600 items-center ml-5 gap-1' >
                    <ArrowLeft size={16} strokeWidth={1.5} />
                    <p className='text-xs' >Back</p>
                </div>
            </div>

            {/* main nav links */}
            <div className=' flex flex-col mt-5 px-5' >
                <div className=' flex gap-1 items-center' >
                <p className='font-medium text-zinc-800 text-sm' >ProductSphere</p>
                <CornerRightDown size={15} strokeWidth={1.75}/>
                </div>
                {/* nav 1 */}
                <div className='flex items-center gap-2 mt-6 px-4 ' >
                    <MousePointerClick size={17} strokeWidth={1.5} />
                    <p className='text-xs font-medium ' >Product details</p>
                </div>
                <div className='flex items-center gap-2 mt-6 px-4 ' >
                    <ListTodo size={17} strokeWidth={1.5} />
                    <p className='text-xs font-medium ' >Assigned Tasks</p>
                </div>
                <div className='flex items-center gap-2 mt-6 px-4 ' >
                    <CheckCheck size={17} strokeWidth={1.5} />
                    <p className='text-xs font-medium ' >Completed Tasks</p>
                </div>
                {/* nav 2 */}

            </div>
            <div className=' flex flex-col mt-5 px-5' >
                <div className=' flex gap-1 items-center' >
                <p className='font-medium text-zinc-800 text-sm' >ProductSphere</p>
                <CornerRightDown size={15} strokeWidth={1.75}/>
                </div>
                {/* nav 1 */}
                <div className='flex items-center gap-2 mt-6 px-4 ' >
                    <MousePointerClick size={17} strokeWidth={1.5} />
                    <p className='text-xs font-medium ' >Product details</p>
                </div>
                <div className='flex items-center gap-2 mt-6 px-4 ' >
                    <ListTodo size={17} strokeWidth={1.5} />
                    <p className='text-xs font-medium ' >Assigned Tasks</p>
                </div>
                <div className='flex items-center gap-2 mt-6 px-4 ' >
                    <CheckCheck size={17} strokeWidth={1.5} />
                    <p className='text-xs font-medium ' >Completed Tasks</p>
                </div>
                {/* nav 2 */}

            </div>


        </div>
        {/* middle div */}
        {/* bottom div */}
        <div className='w-full pb-5 px-4' >
            <div className='w-full flex gap-2' >
                <div className='h-12 w-12 rounded-full flex justify-center items-center bg-zinc-200' >
                    <User/>
                </div>
              <div>
              <p className='font-medium text-indigo-700' >Nikhil Kumar</p>
                <p className='text-zinc-700 font-medium text-xs' >nikhildesign00@gmail.com</p>
              </div>
            </div>

        </div>
    </div>
  )
}

export default DetailsSidebar