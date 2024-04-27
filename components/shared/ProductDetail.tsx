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
import { File, Sparkle, Star, Triangle } from "lucide-react";

type ProductDetailProps = {
  id: any;
};

const makers = [
  {
    name:"iamvoid",
    email:"thisismyemail@gmail.com"
  },
  {
    name:"iamvoid",
    email:"thisismyemail@gmail.com"
  },
  {
    name:"iamvoid",
    email:"thisismyemail@gmail.com"
  },
  {
    name:"iamvoid",
    email:"thisismyemail@gmail.com"
  },
  {
    name:"iamvoid",
    email:"thisismyemail@gmail.com"
  },
  {
    name:"iamvoid",
    email:"thisismyemail@gmail.com"
  },
]


const review = [
  {
    name:"nikhil",
    review:"this is preety good product , hope it will help more in future",
    star:2
  },
  {
    name:"Void",
    review:"Loved this product geniuenly it is good product",
    star:4
  },
  {
    name:"nikhil",
    review:"Great Stuff , want to contribute,",
    star:5
  },
  {
    name:"nikhil",
    review:"this is preety good product , hope it will help more in future",
    star:4
  },
]

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
      <div className="mt-5 px-20 border-b py-4">
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
      </div>
        {/* details end */}
      <div className="mt-5 px-20 border-b py-4" >
          <h1 className="font-medium text-zinc-950 text-xl" >Techstack</h1>
          <p className="text-sm font-medium text-zinc-600" >The techstack used in the product</p>

          <div className="mr-96 flex gap-5 flex-wrap mt-5" >
            <div className="px-6 py-2 border rounded-full flex justify-center items-center gap-2" >
              <Sparkle className="text-indigo-700"  strokeWidth={1.5} size={18}/>
              <p className="text-indigo-700 font-medium" >TypeScript</p>

            </div>
            <div className="px-6 py-2 border rounded-full flex justify-center items-center gap-2" >
              <Sparkle className="text-indigo-700"  strokeWidth={1.5} size={18}/>
              <p className="text-indigo-700 font-medium" >Nextjs</p>

            </div>
            <div className="px-6 py-2 border rounded-full flex justify-center items-center gap-2" >
              <Sparkle className="text-indigo-700"  strokeWidth={1.5} size={18}/>
              <p className="text-indigo-700 font-medium" >javascript</p>

            </div>
            <div className="px-6 py-2 border rounded-full flex justify-center items-center gap-2" >
              <Sparkle className="text-indigo-700"  strokeWidth={1.5} size={18}/>
              <p className="text-indigo-700 font-medium" >PostgresSql</p>

            </div>
            <div className="px-6 py-2 border rounded-full flex justify-center items-center gap-2" >
              <Sparkle className="text-indigo-700"  strokeWidth={1.5} size={18}/>
              <p className="text-indigo-700 font-medium" >Vercel</p>

            </div>
            <div className="px-6 py-2 border rounded-full flex justify-center items-center gap-2" >
              <Sparkle className="text-indigo-700"  strokeWidth={1.5} size={18}/>
              <p className="text-indigo-700 font-medium" >Shadcn-ui</p>

            </div>
           

          </div>

        </div>

        {/* makers div */}
        <div className="mt-10 px-20" >
          <h1 className="text-xl font-medium" >The Makers Behind ProductSphere</h1>
          <p className="text-sm font-medium text-zinc-600 mt-2" >List of developers who help to build this product</p>

    {/* mapping of the team mebers */}
          <div className="mr-96 border-b py-4" >
            <div className="flex gap-8 flex-wrap mt-5" >
              {
                makers.map((curr:any)=>{
                  return <div className="h-20 w-96 rounded-full  flex items-center gap-2
                  " >

                    <div className="h-14 w-14 bg-slate-500 rounded-full" >
                    </div>
                    <div>
                      <h1 className="font-medium text-indigo-700" >{curr.name}</h1>
                      <p className="text-sm font-medium text-zinc-600" >{curr.email}</p>
                    </div>

                  </div>
                })
              }
            </div>
          </div>
        </div>

           {/* reviews component */}

           <div className=" py-5 border-b px-20" >
            <h1 className="text-xl font-medium text-zinc-900" >ProductSphere Reviews</h1>
            <p className="text-zinc-600 text-sm font-medium" >Chcekout all the reviews given by users</p>

          </div>
    </div>
  );
};

export default ProductDetail;
