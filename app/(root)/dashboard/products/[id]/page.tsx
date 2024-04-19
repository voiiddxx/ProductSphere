import DetailsSidebar from '@/components/shared/DetailsSidebar'
import { getProductWithProductIdAction } from '@/lib/actions/product.action'
import React from 'react'

const page = async ({
  params:{ id },
} : {params:{
  id : string
}}) => {

  const prodId = +id;
  const productData = await getProductWithProductIdAction(prodId);  

  if(!productData){
    return <div className='h-screen w-full flex justify-center items-center' >
      <p>Sorry , No product found</p>
    </div>
  }

  
  
  return (
    <div className='h-screen w-full flex' >
        <DetailsSidebar/>
      
    </div>
  )
}

export default page
