"use client";
import { getProductAsperuseridAction } from "@/lib/actions/product.action";
import { getUserUsingClerkid, getUserUsinguserId } from "@/lib/actions/user.action";
import { ArrowRight, Box, Plus, Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type dashBoardHero = {};

const DashboardHome = ({}: dashBoardHero) => {
  const [Products, setProducts] = useState<any>(null);
  // const [JoinedProducts, setJoinedProducts] = useState<any>(null);
  const [User, setUser] = useState<any>(null);

  useEffect(() => {
    const Localuser = localStorage.getItem("x-auth-id");
    const userId = +Localuser!;

    const getUserProduct = async () => {
      const res = await getProductAsperuseridAction(userId!);
      console.log("value of res: ", res);

      if (!res) {
        setProducts(null);
      }
      setProducts(res);
    };

    const getUserWithId = async ()=>{
      const res = await getUserUsinguserId(userId!);
      if(res.status == 200){
        setUser(res.data);
      }
      console.log("thisisresdata:" , res);
    }
    getUserWithId();
    getUserProduct();
  }, []);
  return (
    <div className="w-full">
      {!Products && (
        <div className="h-40 w-full flex justify-center items-center flex-col border-dashed border mt-10 ">
          <p className="text-sm font-medium">No Projects </p>
          <p className="text-xs font-medium text-zinc-500">
            Get Start by creating your first project
          </p>

          <Link href={`/dashboard/products/create`}>
            <div className=" flex gap-1 mt-4 border px-2 py-2 rounded-md bg-indigo-700 text-white items-center">
              <Plus size={15} strokeWidth={1.5} />
              <p className="text-xs font-medium">New product</p>
            </div>
          </Link>
        </div>
      )}
  {/* <p>hey {User.data.username} </p> */}
      {User != null && (
        <>
        <div className="mt-5" >
         <div className="flex mb-8 gap-2" >
         <Link href={`/dashboard/products/create`} >
         <div className="px-2 py-2 border bg-indigo-700 rounded-md" >
            <p className="font-medium text-xs text-white" >New Product</p>
          </div>
         </Link>
         <div className="px-2 py-2 border  rounded-md" >
            <p className="font-medium text-xs text-zinc-800" >Join Product</p>
          </div>

          <div className=" w-80 border rounded-md bg-zinc-200 border-zinc-300 flex items-center px-4 gap-2" >
            <Search size={15} strokeWidth={1.5} />
            <input className="text-xs font-medium outline-none border-none bg-transparent text-zinc-800 placeholder:text-zinc-950" type="text" placeholder="search for a product" />

          </div>

         </div>
        <p className="text-sm font-medium" >Your Created Products</p>
        </div>
        <div className="flex gap-4 mt-5 flex-wrap border-b pb-5">
          {User.ownedProducts.map((curr: any) => {
            return (
             <Link href={`/dashboard/products/${curr.productId}`} >
              <div className="h-[250px] w-[400px] bg-zinc-100 rounded-lg border flex flex-col px-5 py-5 justify-between hover:bg-white">
                <div>
                  {/* <div className='h-16 w-16 rounded-full border bg-white' ></div> */}
                  <div
                    className="flex gap-1 items-center mt-2 text-indigo-700"
                    style={{ color: curr.productcolor }}
                  >
                    <Box strokeWidth={1.75} size={18} />
                    <p className="text-sm font-semibold ">{curr.name}</p>
                  </div>

                  {/* subtitle for the product */}
                  {/* upeer heading of the product */}

                  <p className="text-xs font-medium mt-2 text-zinc-800">
                    {curr.visibility} | Deadline: {curr.endDate}
                  </p>
                </div>

                {/* bottom bar div */}
                <div className=" flex justify-between items-center">
                  <p className="text-xs font-medium mt-2 text-zinc-600">

                    OwnerId:Nikhil
                  </p>
                  <ArrowRight style={{ color: curr.productcolor }} strokeWidth={1.5} size={16} />
                </div>
              </div></Link>
            );
          })}
        </div>
        </>
      )}
      {User != null && (
        <>
        <div className="mt-5" >
        <p className="text-sm font-medium" >Joined Products</p>
        </div>
        <div className="flex gap-4 mt-5 flex-wrap border-b pb-5">
          {User.memberOfProducts.map((curr: any) => {
            return (
             <Link href={`/dashboard/products/${curr.productId}`} >
              <div className="h-[250px] w-[400px] bg-zinc-100 rounded-lg border flex flex-col px-5 py-5 justify-between hover:bg-white">
                <div>
                  {/* <div className='h-16 w-16 rounded-full border bg-white' ></div> */}
                  <div
                    className="flex gap-1 items-center mt-2 text-indigo-700"
                    style={{ color: curr.productcolor }}
                  >
                    <Box strokeWidth={1.75} size={18} />
                    <p className="text-sm font-semibold ">{curr.name}</p>
                  </div>

                  {/* subtitle for the product */}
                  {/* upeer heading of the product */}

                  <p className="text-xs font-medium mt-2 text-zinc-800">
                    {curr.visibility} | Deadline: {curr.endDate}
                  </p>
                </div>

                {/* bottom bar div */}
                <div className=" flex justify-between items-center">
                  <p className="text-xs font-medium mt-2 text-zinc-600">

                    OwnerId:Nikhil
                  </p>
                  <ArrowRight style={{ color: curr.productcolor }} strokeWidth={1.5} size={16} />
                </div>
              </div></Link>
            );
          })}
        </div>
        </>
      )}

    </div>
  );
};

export default DashboardHome;
