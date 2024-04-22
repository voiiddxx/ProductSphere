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

type ProductDetailProps = {
  id: any;
};

const ProductDetail = ({ id }: ProductDetailProps) => {
  const [productCode, setproductCode] = useState<any>(null);
  const [Product, setProduct] = useState<any>(null);

  useEffect(() => {
    const getProduct = async () => {
      const prodId = +id;
      const res = await getProductWithProductIdAction(prodId);
      if (res) {
        console.log("Product Detail: ", res);
        setProduct(res);
      }
    };
    getProduct();
  }, []);

  const JoinTeamNow = async () => {
    const token = localStorage.getItem("x-auth-id");
    const userId = +token!;
    const proId = +Product.productId;
    console.log("userId :" , userId , "product Id: " , proId);
    
    try {
      const res = await JoinProductAction({productCode:productCode , productId:proId , userdId:userId});
      if(res){
        console.log("Join Res: " , res);
      }else{
        console.log("Some error found");
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-full px-12">
      {/* navbar */}
      <div className="h-20 w-full border-b"></div>

      {/* heading bar tab */}
      <div className="h-40   px-5 py-5  w-full bg-indigo-700 rounded-lg mt-5">
        {/* upper bar details */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl text-white font-semibold">ProductSphere</p>
            <p className="text-sm text-zinc-400">Saas</p>
          </div>

          <div>
            <div className="h-28 w-28 bg-white rounded-lg">
              <Image
                className="h-28 w-28 object-cover rounded-lg"
                src="http://res.cloudinary.com/drqhibhiv/image/upload/v1713601228/v8skgxg51aq1iosf34os.svg"
                height={1500}
                width={1500}
                alt="productlogo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* join team button */}
      <div className="w-full flex items-center justify-center h-40">
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-sm font-medium"  >Join Team of productsphere</DialogTitle>
              <DialogDescription>
                <p className="text-xs font-medium" >Join team of  and build in team</p>

                <div>
                  <input onChange={(e)=>{
                    setproductCode(e.target.value);
                  }} className="outline-none border-none mt-5 font-medium text-2xl text-zinc-900 placeholder:text-zinc-500" placeholder="Enter Secret Code" />
                </div>

                {/* buttons */}
                <div className="flex mt-10 justify-end gap-2" >
                  <Button variant={"outline"} >Cancel</Button>
                  <Button onClick={JoinTeamNow}  className="bg-indigo-700">Join Now</Button>

                </div>
                {/* product join dialogue box */}

              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductDetail;
