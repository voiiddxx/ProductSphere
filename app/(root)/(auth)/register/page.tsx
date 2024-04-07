import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen w-full bg-white' >

        {/* overlayed div with some paddings */}
      <div className='mx-5 my-5 rounded-md min-h-screen bg-transparent flex justify-center items-center' >
        {/* dividing div into left and right div */}
        
        {/* left div */}
        <div className=' min-h-screen w-1/2 bg-white' >
            {/* upper div for logo */}
            <div className='h-20 w-full ' >
                <Image className='h-24 w-auto' src={`/Mainlogo.svg`} height={900} width={900} alt='productspherelogo' />
            </div>

            {/* upper heading and social button parts div */}
            <div className='px-20 mt-20' >
                <h1 className='text-2xl font-medium' >Get Start Now</h1>
                <p className='text-sm font-medium text-stone-800' >Enter your credential to create your account</p>

                {/* socials icons div */}
                <div className='flex gap-4 mt-10' >
                    <Button variant={'outline'} className='flex items-center justify-center gap-2'  >
                        <Github size={17} strokeWidth={1.75} /> <p className='text-sm text-slate-800' >Register with github</p>
                    </Button>
                    <Button variant={'outline'} className='flex items-center justify-center gap-2'  >
                        <Linkedin size={17} strokeWidth={1.75} /> <p className='text-sm text-slate-800' >Register with Linkedin</p>
                    </Button>
                   
                </div>

                <div className='mt-10 flex justify-center items-center' >
                    <hr className='h-1 w-full mr-10' />
                    <p>or</p>
                    <hr className='h-1 w-full ml-10' />
                </div>
            </div>


        </div>
        {/* right div */}
        <div className='min-h-screen w-1/2 bg-blue-700 rounded-md' ></div>

      </div>
      
    </div>
  )
}

export default page
