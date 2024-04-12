import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

type ProductFormProps = {
  type: "ADD" | "EDIT";
};

const ProductForm = ({ type }: ProductFormProps) => {
  
  return <div className="h-full w-full">
    
  </div>;
};

export default ProductForm;
