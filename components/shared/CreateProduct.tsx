import { Blocks, ChevronRight, ChevronsRightLeft, Hash } from 'lucide-react'
import React from 'react'

const CreateProduct = () => {
  return (
    <div className='w-full min-h-screen ' >
      <div className='h-12 w-full bg-zinc-100 flex pl-10 gap-2 items-center' >
        <Hash size={15} strokeWidth={1.5} />
        <p className='text-sm font-medium' >Create a new product</p>
      </div>
      
      <div className='w-full h-screen ' >
        {/* left div */}
        <div className='w-3/5 h-full ' >
            
        </div>
        {/* right div */}
        <div></div>
      </div>
    </div>
  )
}

export default CreateProduct
