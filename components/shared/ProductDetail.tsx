"use client";

import {
  getProductWithProductIdAction,
  JoinProductAction,
} from "@/lib/actions/product.action";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { File, Star, Triangle } from "lucide-react";

type ProductDetailProps = {
  id: any;
};

const ProductDetail = ({ id }: ProductDetailProps) => {
  const [productCode, setproductCode] = useState<any>(null);
  const [Product, setProduct] = useState<any>(null);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const prodId = +id;
  //     const res = await getProductWithProductIdAction(prodId);
  //     if (res) {
  //       console.log("Product Detail: ", res);
  //       setProduct(res);
  //     }
  //   };
  //   getProduct();
  // }, []);

  // const JoinTeamNow = async () => {
  //   const token = localStorage.getItem("x-auth-id");
  //   const userId = +token!;
  //   const proId = +Product.productId;
  //   console.log("userId :" , userId , "product Id: " , proId);

  //   try {
  //     const res = await JoinProductAction({productCode:productCode , productId:proId , userdId:userId});
  //     if(res){
  //       console.log("Join Res: " , res);
  //     }else{
  //       console.log("Some error found");

  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="h-screen w-full px-12">
      {/* navbar */}
      <div className="h-20 w-full border-b"></div>

      {/* heading bar tab */}
      <div className=" w-full flex justify-between px-20 py-4 items-center border-b">
        {/* left div */}
        <div className="flex gap-2 items-center">
          {/* image div */}
          <div className="h-28 w-28 bg-indigo-700 rounded-md"></div>
          {/* text div */}
          <div>
            <h1 className="text-4xl font-bold text-zinc-900">ProductSphere</h1>
            <p className="mt-1 text-zinc-600 text-sm">
              Software for managing the product
            </p>
            <div className="flex items-center gap-10 mt-2">
              <div className="flex gap-1">
                <Star className="text-transparent" fill="orange" size={25} />
                <Star className="text-transparent" fill="orange" size={25} />
                <Star className="text-transparent" fill="orange" size={25} />
                <Star className="text-transparent" fill="orange" size={25} />
                <Star className="text-transparent" fill="orange" size={25} />
              </div>
              <div className="flex gap-2">
                <p className="text-zinc-800 text-sm font-medium">15 Reviews</p>
                <p className="text-zinc-800 text-sm font-medium">
                  2000 Upvotes
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="flex gap-2">
          <Button
            className="border rounded-full text-indigo-700"
            size={"icon"}
            variant={"link"}
          >
            <Triangle />
          </Button>
          <Button variant={"outline"} size={"lg"}>
            Visit Website
          </Button>
          <Button className="bg-indigo-700" size={"lg"}>
            Join Product Team
          </Button>
        </div>
      </div>

      {/* details div */}
      <div className="mt-5 px-20">
        {/* detail */}
        <div className="mr-96">
          <h1 className=" font-medium text-zinc-900">What is ProductSphere</h1>
          <p className="font-medium mt-3 tracking-wide leading-relaxed text-zinc-500 ">
            Producter is a product management software designed for
            customer-centric product teams 🚀 Over 2000+ product people use it
            to get feedback, manage tasks, create docs, and share a roadmap 🌍
            Make hard product decisions easy with Producter's all-in-one
            solution ✨
          </p>
          <h1 className="text-zinc-900 text-sm font-medium mt-10">
            ProductSphere Documents
          </h1>
          <div className=" flex gap-5 items-center mt-4">
            <div className="px-4 py-2 border rounded-md flex gap-2 items-center">
              <div className="h-10 w-10 border rounded-sm flex items-center justify-center">
                <File size={20} className="text-indigo-700" />
              </div>
              <h1 className="font-medium text-zinc-900 text-sm" >ProductSphere details</h1>
            </div>
            <div className="px-4 py-2 border rounded-md flex gap-2 items-center">
              <div className="h-10 w-10 border rounded-sm flex items-center justify-center">
                <File size={20} className="text-indigo-700" />
              </div>
              <h1 className="font-medium text-zinc-900 text-sm" >Team Members Data</h1>
            </div>
          </div>
        </div>
        {/* details end */}
      </div>
    </div>
  );
};

export default ProductDetail;
