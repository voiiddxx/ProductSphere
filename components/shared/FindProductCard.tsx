import { Calendar, Dot, Rabbit, User } from 'lucide-react';
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
    <div className=" w-[400px] border rounded-md px-4 py-4">
              {/* upper part of card */}
              <div className="flex justify-between items-start">
                {/* image div */}
                <div>
                  <div className="h-16 w-16 border rounded-lg  flex justify-center items-center" style={{backgroundColor:productData.productcolor}} >
                    <Image className='h-16 w-16 object-cover rounded-lg' src={productData.productlogo} height={1500} width={1500}alt='productlogo' />
                  </div>
                </div>

                <div className="flex items-center text-green-700">
                  <Dot absoluteStrokeWidth strokeWidth={5} />
                  <p className="text-xs font-medium">{productData.status}</p>
                </div>
              </div>
              {/* upper part ends */}

              {/* title and subtitle part */}
              <div>
                <h1 className="mt-5 font-semibold " style={{color:productData.productcolor}}>
                  {productData.name}{" "}
                  <span className="text-xs text-zinc-500 font-medium">
                    (saas)
                  </span>{" "}
                </h1>
                <p className="text-sm font-medium text-zinc-700 mt-1">
                  {productData.detail}
                </p>
              </div>

              {/* start date and end data */}

              <div className="flex mt-2 gap-2 items-center">
                <Calendar className="text-zinc-500" size={15} strokeWidth={2} />
                <p className="text-sm font-medium text-zinc-500">
                  5 April 2024 - 20 April 2025
                </p>
              </div>

              {/* skill part or techstack */}
              <div className="mt-4">
                <p className="text-sm font-medium text-zinc-500 ">TechStack</p>

                <div className="flex gap-4 mt-2 flex-wrap">
                  {productData.skills.map((curr: any) => {
                    return (
                      <div className="flex items-center" style={{color:productData.productcolor}}>
                        {/* <Dot absoluteStrokeWidth strokeWidth={4} /> */}
                        <p className="text-xs font-medium">{curr}</p>
                      </div>
                    );
                  })}
                </div>

                

                {/* product memebrs */}
                {
                  productData.members.length > 0 && (
                    <div>
                      <p className='text-sm font-medium mt-4' >Members</p>

                      <div className='relative mt-4 flex ' >
                        <div className='h-8 w-8  rounded-full flex items-center justify-center' style={{backgroundColor:productData.productcolor}} >
                        <Image className='h-8 w-8 rounded-full absolute'  src={productData.members[0].avatar} height={900} width={900} alt='members imagee' />
                        </div>
                        <div className='h-8 w-8 bg-indigo-700 rounded-full flex items-center justify-center absolute left-5' >
                        {
                          productData.members.length  > 1 ? <Image className='h-8 w-8 rounded-full'  src={productData.members[1].avatar} height={900} width={900} alt='members imagee' /> : <p className='text-white text-sm font-medium' >{productData.members.length}+</p>
                        }
                        </div>
                        <div className='h-8 w-8 bg-transparent rounded-full flex items-center justify-center absolute left-10' >
                        {
                          productData.members.length  > 1 ? <div className='h-8 w-8  flex justify-center items-center text-white rounded-full' style={{backgroundColor:productData.productcolor}} >
                            <p className='text-sm font-medium' >{productData.members.length}+</p>
                          </div> : <p className='text-white text-sm font-medium' ></p>
                        }
                        </div>

                        
                      </div>

                      
                    </div>
                  )
                }
                
                {/* created by div */}
                <div className="h-10 w-full flex items-end justify-end " >
                    <p className="text-xs text-zinc-500" >Createdby | nikhilkumar</p>

                </div>
              </div>
            </div>
            </Link>
  )
}

export default FindProductCard