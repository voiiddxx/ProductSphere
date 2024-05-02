import { Calendar, ChevronUp, Dot, Rabbit, Star, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


    type findProducCardProps = {
        productData:any
    }

const FindProductCard = ({productData}:findProducCardProps) => {
      console.log("this is the value of product members: " , productData.members);
      
  return (
    <Link href={`/products/${productData.productId}`} >
    <div className=" md:w-[1300px] w-[330px]  bg-white border rounded-md px-4  py-4 flex justify-between">

      {/* first div */}
      <div className='flex gap-8' >
        {/* image div */}
        <div className='h-[100px] w-[100px] rounded-md' style={{backgroundColor:productData.productcolor}} >
        <Image src={productData.productlogo} className='h-[100px] w-[100px] rounded-md object-cover' height={1500} width={1500} alt='image' />
        </div>
        {/* heading and subheading div */}
        <div className='' >
          <p className='text-xs font-medium text-zinc-400' >Productivity</p>
          <h1 className='text-2xl mt-1 font-semibold' style={{color:productData.productcolor}} >{productData.name}</h1>
          <p className='text-xs font-normal text-zinc-500 mt-1 leading-relaxed tracking-wide' >{productData.detail}</p>
    <div className='flex gap-2 mt-2' >
    <Star className='' color='orange' fill='orange' size={15} />
    <p className='text-xs font-medium' >{productData.reviews.length} reviews</p>
    </div>
        </div>

      </div>
      {/* second div */}
      <div>
        <div className='h-[100px] w-[100px] border rounded-md flex flex-col justify-center items-center' style={{color:productData.productcolor}} >
            <ChevronUp size={20} absoluteStrokeWidth strokeWidth={2} />
            <p className='text-xl font-medium' >{productData.Upvote.length}</p>

        </div>
      </div>

            </div>
            </Link>
  )
}

export default FindProductCard