import DetailsSidebar from '@/components/shared/DetailsSidebar'
import ProductdashBoard from '@/components/shared/ProductdashBoard'
import { Button } from '@/components/ui/button'
import { getProductWithProductIdAction } from '@/lib/actions/product.action'
import { Box, User } from 'lucide-react'
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
   <ProductdashBoard/>
  )
}

export default page
