import DetailsSidebar from '@/components/shared/DetailsSidebar'
import { getProductWithProductIdAction } from '@/lib/actions/product.action'
import { Box } from 'lucide-react'
import React from 'react'

const page = async ({
  params:{ id },
} : {params:{
  id : string
}}) => {

  // const prodId = +id;
  // const productData = await getProductWithProductIdAction(prodId);  

  // if(!productData){
  //   return <div className='h-screen w-full flex justify-center items-center' >
  //     <p>Sorry , No product found</p>
  //   </div>
  // }

  
  
  return (
    <div className='h-screen w-full flex' >
        <DetailsSidebar/>
        {/* middle part */}
        <div className='h-screen w-full' >
          {/* middle upper navbar */}
          <div className='h-24 w-full bg-zinc-100 flex flex-col justify-center pt4 px-5' >

            {/* upper div product name and other sections */}
            <div className='flex w-full justify-between ' >

              {/* left upper part */}
              <div className='flex items-center gap-2' >
                <div className='h-10  w-10 bg-indigo-700 flex justify-center items-center rounded-lg' >
                  <Box strokeWidth={1.5} color='white' size={25} />
                </div>

                <div>
                <p className='text-zinc-900  font-medium' >ProductSphere</p>
                <p className='text-xs font-medium text-zinc-500' >Product id: 51581101518</p>
                </div>
              </div>
              {/* right upper part */}
              <div>

              </div>

            </div>

          </div>


        </div>
        {/* middle div */}
      
    </div>
  )
}

export default page
