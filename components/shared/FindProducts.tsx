import { Box, Calendar, Dot, Rabbit, Search, User } from "lucide-react";
import React from "react";


const products = ["NextJs" , "TypeScript" , "Prisma" , "MongoDb" , "Postgress" , "Clerk"]

const FindProducts = () => {
  return (
    <div className="h-screen w-full px-5">
      {/* upper bar for heading of the products */}
      <div>
        <div className="flex items-start gap-2 mt-5">
          {/* <Rabbit className='' size={25} strokeWidth={1.75} /> */}
          <div>
            <p className="text-xl font-medium text-zinc-900">Find Products</p>
            <p className="text-sm font-medium text-zinc-500">
              Find products upvote and join for build them
            </p>
          </div>
        </div>
      </div>

      {/* upper bar for search and filter */}
      <div>
        <div className="h-10 mt-10  border-b flex items-center">
          <Search size={20} />
          <input
            className="outline-none border-none px-2 text-sm"
            placeholder="Search for products"
          />
        </div>
      </div>

      {/* products collections */}
      <div className="mt-5">
        <p className="text-xs font-medium text-zinc-700">Collection</p>
      </div>


            {/* mapping of the products */}
            <div className="flex gap-4 flex-wrap mt-5" >
                {
                    products.map((curr:any)=>{
                        return <div className="h-[350px] w-[400px] border rounded-md px-4 py-4" >
                                {/* upper part of card */}
                                <div className="flex justify-between items-start" >
                                    {/* image div */}
                                    <div>
                                        <div className="h-16 w-16 border rounded-lg bg-indigo-700 flex justify-center items-center" >
                                            <Rabbit color="white" strokeWidth={1.75} size={30} />

                                        </div>
                                    </div>

                                    <div className="flex items-center text-green-700" >
                                        <Dot absoluteStrokeWidth strokeWidth={5}  />
                                        <p className="text-xs font-medium" >Under Development</p>
                                    </div>
                                </div>
                                {/* upper part ends */}


                                {/* title and subtitle part */}
                                <div>
                                    <h1 className="mt-5 font-semibold text-indigo-700" >ProductSphere <span className="text-xs text-zinc-500 font-medium" >(saas)</span> </h1>
                                    <p className="text-sm font-medium text-zinc-700 mt-1" >Manage Product Easily and Inovate</p>
                                </div>

                                {/* start date and end data */}

                                <div className="flex mt-2 gap-2 items-center" >
                                    <Calendar className="text-zinc-500" size={15} strokeWidth={2} />
                                    <p className="text-sm font-medium text-zinc-500" >5 April 2024   -   20 April 2025</p>
                                </div>

                                {/* skill part or techstack */}
                                <div className="mt-4" >
                                    <p className="text-sm font-medium" >TechStack</p>

                                    <div className="flex gap-4 mt-2 flex-wrap" >
                                        {
                                            products.map((curr:any)=>{
                                                return <div className="flex items-center  text-indigo-700" >
                                                        {/* <Dot absoluteStrokeWidth strokeWidth={4} /> */}
                                                        <p className="text-xs font-medium" >{curr}</p>

                                                </div>
                                            })
                                        }
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
                                </div>
                        </div>
                    })
                }
            </div>
    </div>
  );
};

export default FindProducts;
