import { Calendar, Dot, Rabbit, User } from 'lucide-react';
import React from 'react'


    type findProducCardProps = {
        productData:any
    }

const FindProductCard = ({productData}:findProducCardProps) => {
    const products = [
        "NextJs",
        "TypeScript",
        "Prisma",
        "MongoDb",
        "Postgress",
        "Clerk",
      ];
  return (
    <div className=" w-[400px] border rounded-md px-4 py-4">
              {/* upper part of card */}
              <div className="flex justify-between items-start">
                {/* image div */}
                <div>
                  <div className="h-16 w-16 border rounded-lg  flex justify-center items-center" style={{backgroundColor:productData.productcolor}} >
                    <Rabbit color="white" strokeWidth={1.75} size={30} />
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
                <p className="text-sm font-medium">TechStack</p>

                <div className="flex gap-4 mt-2 flex-wrap">
                  {productData.skills.map((curr: any) => {
                    return (
                      <div className="flex items-center  text-indigo-700">
                        {/* <Dot absoluteStrokeWidth strokeWidth={4} /> */}
                        <p className="text-xs font-medium">{curr}</p>
                      </div>
                    );
                  })}
                </div>

                {/* members */}
                <div className="relative mt-4">
                  <div className=" absolute h-8 w-8 border bg-zinc-700 rounded-full flex justify-center items-center">
                    <User strokeWidth={1.5} color="white" size={17} />
                  </div>
                  <div className=" absolute h-8 w-8 left-5 border bg-zinc-700 rounded-full flex justify-center items-center">
                    <User strokeWidth={1.5} color="white" size={17} />
                  </div>
                  <div className=" absolute h-8 w-8 left-10 border bg-zinc-700 rounded-full flex justify-center items-center">
                    <p className="text-sm font-medium text-white">5+</p>
                  </div>
                </div>


                {/* created by div */}
                <div className="h-10 w-full flex items-end justify-end mt-16" >
                    <p className="text-xs text-zinc-500" >Createdby | nikhilkumar</p>

                </div>
              </div>
            </div>
  )
}

export default FindProductCard