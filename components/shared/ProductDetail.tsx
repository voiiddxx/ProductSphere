"use client"

import { getProductWithProductIdAction } from "@/lib/actions/product.action";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type ProductDetailProps = {
  id: any;
};

const ProductDetail = ({ id }: ProductDetailProps) => {
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

  return (
    <div className="h-screen w-full px-12" >
        {/* navbar */}
        <div className="h-20 w-full border-b" >
        </div>


        {/* heading bar tab */}
        <div className="h-40   px-5 py-5  w-full bg-indigo-700 rounded-lg mt-5" >
            {/* upper bar details */}
            <div className="flex justify-between items-center" >
                <div>
                <p className="text-xl text-white font-semibold" >ProductSphere</p>
                <p className="text-sm text-zinc-400" >Saas</p>
                </div>

                <div>
                    <div className="h-28 w-28 bg-white rounded-lg" >
                        <Image className="h-28 w-28 object-cover rounded-lg"   src="http://res.cloudinary.com/drqhibhiv/image/upload/v1713601228/v8skgxg51aq1iosf34os.svg" height={1500} width={1500} alt="productlogo" />

                    </div>
                </div>
                
            </div>

        </div>

    </div>
  );
};

export default ProductDetail;
