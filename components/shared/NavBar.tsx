import { Box, Diamond, Gem, Rabbit, Workflow } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const NavBar = () => {
  return (
    <div className='h-32 w-full   px-28 flex items-center justify-center' >
        <div className='h-20 w-full bg-white rounded-lg flex justify-between' >
            {/* left side icons for logo */}
            <div className='flex items-center justify-center' >
                <Image className='h-20 w-auto ml-5'  src={`/MainLogo.svg`} height={900} width={900} alt='"productspherelogo' />
            </div>
            {/* middle for navbar elements */}
            <div className='flex gap-8 items-center' >
                <div className='flex gap-1' >
                    <Workflow className='text-indigo-700' size={18} strokeWidth={2} />
                    <p className='text-sm font-semibold' >Workflow</p>
                </div>
                <div className='flex gap-1' >
                    <Gem className='text-indigo-700' size={18} strokeWidth={2} />
                    <p className='text-sm font-semibold' >Pricing</p>
                </div>
                <div className='flex gap-1' >
                    <Rabbit className='text-indigo-700' size={18} strokeWidth={2} />
                    <p className='text-sm font-semibold' >Developers</p>
                </div>
                    <div className='flex gap-1' >
                        <Box className='text-indigo-700' size={18} strokeWidth={2} />
                        <p className='text-sm font-semibold' >Products</p>
                    </div>
               
            </div>
            {/* right side bar for the buttons */}
            <div className='flex gap-3 items-center mr-5' >
                <Button variant={'outline'} size={'lg'} >Logout</Button>
                <Button className='bg-indigo-700' size={'lg'} >Dashboard</Button>
            </div>

        </div>
    </div>
  )
}

export default NavBar