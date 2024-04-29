"use client"

import { Box, Calendar, Dot, Rabbit, Search, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import FindProductCard from "./FindProductCard";
import { getAllProductAction } from "@/lib/actions/product.action";




const FindProducts =  () => {

  const [products, setproducts] = useState<any>(null)
  
    const getProducts = async()=>{
      const productRes = await getAllProductAction();
      console.log("This is Res: " , productRes);
      setproducts(productRes);
    }

    useEffect(()=>{
      getProducts();
    } , [])
  
  return (
    <div className="h-screen w-full md:px-5 bg-slate-100">
      {/* upper bar for heading of the products */}
      <div>
        <div className="flex items-start gap-2 mt-5">   
          {/* <Rabbit className='' size={25} strokeWidth={1.75} /> */}
          <div>
            <p className="md:text-xl text-sm font-medium text-zinc-900">Find Products</p>
            <p className="md:text-sm text-xs font-medium text-zinc-500">
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
            className="outline-none border-none px-2 text-sm bg-transparent"
            placeholder="Search for products"
          />
        </div>
      </div>

      {/* products collections */}
      <div className="mt-5">
        <p className="text-xs font-medium text-zinc-700">Collection</p>
      </div>

      {/* mapping of the products */}
      <div className="flex gap-4 flex-wrap mt-5">
       {
        products!= null && (
          <div className="flex gap-4 flex-wrap" >
             {products.map((curr: any) => {
          return (
            <FindProductCard productData={curr} />
          );
        })}
          </div>
        )
       }
      </div>
    </div>
  );
};

export default FindProducts;
