"use client";
import { Blocks, CalendarCheck, ChevronRight, ChevronsRightLeft, Hash } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"






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
          <p className="text-sm font-medium">Genreal Information</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* row 1 */}
              <div className="flex justify-between gap-5 mt-5">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="w-full">
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
                    <FormItem className="w-full">
                      <FormLabel>Product Visibility</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}  >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="private">Private</SelectItem>
                            <SelectItem value="public">Public</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>


              {/* second row */}

            <div>
            <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Product Visibility</FormLabel>
                      <FormControl>
                      <Textarea className="h-[150px]" placeholder="Platform build to enhance the product building experience in team , using this product you can enhanced the experince of product building experince⚡" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
              {/* third row */}
                  <div className="w-full flex gap-4" >
                    <div className="w-full" >
                      <p className="font-medium text-sm mb-2" >Start date</p>
                    <div className="w-full h-10 flex rounded-lg border items-center px-2 text-zinc-500" >
                      <CalendarCheck size={17} strokeWidth={1.5} />
                      <p className="text-sm ml-3" >Thursday 5 nov , 2021</p>
                      
                    </div>
                    </div>
                    <div className="w-full" >
                      <p className="font-medium text-sm mb-2" >Product Deadline</p>
                    <div className="w-full h-10 flex rounded-lg border items-center px-2 text-zinc-500" >
                      <CalendarCheck size={17} strokeWidth={1.5} />
                      <p className="text-sm ml-3" >Thursday 5 nov , 2021</p>
                      
                    </div>
                    </div>
                    
                    
                  </div>


              {/* fourth row */}
              {/* fifth row */}

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
