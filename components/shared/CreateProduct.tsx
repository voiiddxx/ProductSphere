"use client";
import {
  Blocks,
  CalendarCheck,
  ChevronRight,
  ChevronsRightLeft,
  Github,
  Hash,
  Image,
  Link,
  Linkedin,
  Plus,
  Search,
  User,
  Volume1,
  Zap,
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

const productSkills = [
  {skill:"Typescript"},
  {skill:"Postgress"},
  {skill:"Flutter"},
  {skill:"Nextjs"}
]


const productteamMember = [
  {member:"Nikhil"},
  {member:"Rajjev"},
  {member:"Pankaj"},
  {member:"Govinda"},
]
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
                      <FormLabel>Product Description</FormLabel>
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
                        className="h-8 w-8 rounded-full"
                        style={{backgroundColor:curr.color}}
                      >
                      </div>
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
          {/* this is row 1 */}


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
          <div className="mt-5" >
            <p className="text-sm font-medium" >Product TechStack</p>
            {/* product add array */}
            <div className="w-full flex gap-4 mt-4"  >

              {
                productSkills.map((curr:any)=>{
                  return <div className="flex bg-zinc-100 text-indigo-700 px-2 py-2 rounded-sm gap-1" >
                  <Zap strokeWidth={1.5} size={17} />
                  <p className="text-xs font-medium" >{curr.skill}</p>
                </div>
                })
              }
            <div className="w-auto border flex items-center justify-center px-2 py-1 rounded-md cursor-pointer" >
              <Plus size={18} strokeWidth={1.5} />
              <p className="text-xs font-medium" >Add TechStack</p>
            </div>
            </div>
          </div>
          {/* row 3 */}
              <div className="mt-5" >
                <p className="text-sm font-medium" >Product Team members</p>
                <div className=" flex flex-col gap-2 mt-2" >
                  <div className="flex items-center gap-3" >
                    <div className="h-10 w-12 bg-zinc-100 rounded-md flex items-center justify-center" >
                      <Search className="text-indigo-700" strokeWidth={1.5} size={18} />
                    </div>
                    <Input placeholder="search members" />
                  </div>
                  {
                    productteamMember.map((curr:any)=>{
                      return <div className="flex justify-between  gap-2 border px-2 py-2 rounded-lg" >
                        <div className="flex items-center gap-2" >
                          <div className="h-7 w-7 rounded-full border flex justify-center items-center" >
                            <User size={17} strokeWidth={1.5} />
                          </div>
                          <p className="text-sm font-medium" >{curr.member}</p>
                        </div>
                        <div className="flex gap-4 items-center text-zinc-700" >
                          <Github size={16} strokeWidth={1.5} />
                          <Linkedin size={16} strokeWidth={1.5} />
                          <div className="px-2 py-2 bg-indigo-700 rounded-md" >
                            <Plus className="text-white" size={17} strokeWidth={1.5} />
                          </div>
                        </div>

                      </div>
                    })
                  }
                </div>
              </div>
          {/* row 4 */}
                <div className="mt-5" >
                  <p className="text-sm font-medium" >Product Code</p>
                  <Input className="mt-2" placeholder="Enter Your Code here"/>
                  <div className="flex text-zinc-600 mt-2" >
                    <Volume1 strokeWidth={1.5} size={17} />
                    <p className="text-xs font-normal" >You can share this team code to other members so that they can join the product and can contribute</p>
                  </div>


                </div>

          {/* row 5 */}


        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
