"use client"

import { getProductWithProductIdAction } from "@/lib/actions/product.action";
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

  return <div>This is product details .tsx </div>;
};

export default ProductDetail;
