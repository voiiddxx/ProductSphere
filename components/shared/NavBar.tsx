import { Box, Diamond, Gem, Menu, Rabbit, Workflow } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='md:h-40 h-20 w-full md:py-6 py-2 md:px-28 px-4 flex items-center justify-center' >
        <div className='md:h-20 h-14 w-full bg-white rounded-lg flex justify-between' >
            {/* left side icons for logo */}
            <div className='flex items-center justify-center' >
                <Image className='md:h-20 h-14 w-auto ml-5'  src={`/MainLogo.svg`} height={900} width={900} alt='"productspherelogo' />
            </div>
            {/* middle for navbar elements */}
            <div className='gap-8 items-center hidden md:flex' >
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
            <div className='md:flex gap-3 items-center mr-5 hidden' >
                <Button  variant={'outline'} size={'lg'} >Logout</Button>
                <Link href={`/dashboard`} ><Button className='bg-indigo-700' size={'lg'} >Dashboard</Button></Link>
            </div>
            <div className='flex items-center pr-4 md:hidden' >
                <Menu/>
            </div>

        </div>
    </div>
  )
}

export default NavBar