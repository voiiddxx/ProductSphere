"use client";
import { Blocks, ChevronRight, ChevronsRightLeft, Hash } from "lucide-react";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const CreateProduct = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full min-h-screen ">
      <div className="h-12 w-full bg-zinc-100 flex pl-10 gap-2 items-center">
        <Hash size={15} strokeWidth={1.5} />
        <p className="text-sm font-medium">Create a new product</p>
      </div>

      <div className="w-full h-screen ">
        {/* left div */}

        <div className="w-3/5 h-full  px-10 py-5">
          <p className="text-sm font-medium" >Genreal Information</p>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


        {/* row 1 */}
        <div className="flex justify-between gap-5 mt-5" >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full" >
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="ProductSphere" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full" >
              <FormLabel>Product Tagline</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
       
        <Button type="submit">Submit</Button>
      </form>
    </Form>

          


        </div>
        {/* right div */}
        <div></div>
      </div>
    </div>
  );
};

export default CreateProduct;
