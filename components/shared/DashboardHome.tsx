"use client";
import { getProductAsperuseridAction } from "@/lib/actions/product.action";
import { ArrowRight, Box, Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type dashBoardHero = {};

const DashboardHome = ({}: dashBoardHero) => {
  const [Products, setProducts] = useState<any>(null);

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

      {Products != null && (
        <div className="flex gap-4 mt-10 flex-wrap">
          {Products.map((curr: any) => {
            return (
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
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DashboardHome;