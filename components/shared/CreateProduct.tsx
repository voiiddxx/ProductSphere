"use client";
import {
  Blocks,
  CalendarCheck,
  ChevronRight,
  ChevronsRightLeft,
  Hash,
  Image,
  Link,
} from "lucide-react";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const colortheme = [
  { color: "#534bff" },
  { color: "#09a57f" },
  { color: "#eb007a" },
  { color: "#eb0d00" },
  { color: "#000000" },
  { color: "#a300d1" },
  { color: "#478d00" },
];

const CreateProduct = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const rendercalender = () => {
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  };

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

      <div className="w-full h-screen flex">
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
                        <Select onValueChange={field.onChange}>
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
                        <Textarea
                          className="h-[150px]"
                          placeholder="Platform build to enhance the product building experience in team , using this product you can enhanced the experince of product building experince⚡"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* third row */}

              <div>
                <p className="text-sm font-medium">Select theme</p>

                <div className="flex gap-3 mt-2">
                  {colortheme.map((curr: any) => {
                    return (
                      <div
                        className={`h-8 w-8 rounded-full bg-[${curr.color}]`}
                      ></div>
                    );
                  })}
                </div>
              </div>
              {/* fourth row */}

              <div className="w-full flex gap-4">
                <div className="w-full">
                  <p className="font-medium text-sm mb-2">Start date</p>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div className="w-full">
                  <p className="font-medium text-sm mb-2">Start date</p>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border w-full"
                  />
                </div>
              </div>
              {/* fifth row */}

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        {/* right div */}
        <div className=" w-2/5 h-screen bg-white border-l my-4 px-4 pt-2" >
          {/* row1 */}
          <div  >
            <p className="text-sm font-medium" >product image/document</p>

            <div className="flex justify-start  gap-4  mt-4" >
              {/* product image */}
              <div className="h-60 w-60 border border-dashed rounded-lg flex justify-center items-center flex-col" >
                <Image className="text-indigo-800 mb-2" size={19} strokeWidth={1.5} />
                <p className="text-xs font-medium text-center mx-4 text-zinc-700" >Upload your product logo or any relavent image</p>
              </div>
              {/* product other documents */}
              <div className=" flex flex-col gap-2" >
              <div className="h-28 w-72 rounded-lg flex justify-center flex-col items-center border" >
              <Link className="text-indigo-800 mb-2" size={19} strokeWidth={1.5} />
                <p className="text-xs font-medium text-center mx-4 text-zinc-700" >Attach any product relavent details file</p>
              </div>
              <div className="h-28 w-72 rounded-lg flex justify-center flex-col items-center border" >
              <Link className="text-indigo-800 mb-2" size={19} strokeWidth={1.5} />
                <p className="text-xs font-medium text-center mx-4 text-zinc-700" >Attach any product relavent details file</p>
              </div>
              </div>
              
            </div>

          </div>
          {/* row2 */}
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
