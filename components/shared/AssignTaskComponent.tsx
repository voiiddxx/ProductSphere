"use client";


import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Box, File, Link, ListTodo, Plus, Trash, User, X } from "lucide-react";
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
import { Textarea } from "../ui/textarea";

//  assign task schema
const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const AssignTaskComponent = () => {

  const [TaskDocument, setTaskDocument] = useState<any>(null);
  const [TaskMembers, setTaskMembers] = useState<any>([1,2,3]);

  
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
    <Drawer>
      <DrawerTrigger className="flex gap-1 ">
        <ListTodo size={15} strokeWidth={1.5} />
        <p className="text-xs font-medium">Assign Tasks</p>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerDescription>
            {/* main div for assiging the tasks start here */}
            <div className="min-h-[500px] w-full pb-20 ">
              <div className="h-full w-full px-10">
                {/* upper navi div */}
                <div className="h-10 w-full border-b flex justify-between items-center">
                  {/* left div */}
                  <div className="flex">
                    <p className="text-sm font-medium">Dashboard</p>
                    <p className="text-sm font-medium ml-2">/</p>
                    <div className="flex ml-3 items-center gap-1">
                      <Box size={15} strokeWidth={2} />
                      <p className="text-sm font-medium">Productsphere</p>
                    </div>
                    <p className="text-sm font-medium ml-2">/</p>
                    <div className="flex ml-3 items-center gap-1">
                      <ListTodo size={15} strokeWidth={2} />
                      <p className="text-sm font-medium">Assign tasks</p>
                    </div>
                  </div>
                  {/* right div */}
                </div>
                {/* upper nav div ends here */}

                {/* main form div starts here */}

                <div className="min-h-[500px] h-[500px]  w-full bg-red-500 flex">
                  {/* left div */}
                  <div className="h-full w-2/3 bg-white pr-5">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                      >
                        <div>
                          <p className="font-medium text-zinc-950 text-lg mt-4">
                            Assign New task
                          </p>
                          <p className="text-sm font-normal mt-1">
                            Fill the necessry details for assigning tasks
                          </p>
                        </div>

                        <div className="h-[150px] w-full border rounded-lg px-2 py-2">
                          <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <input className="text-lg font-semibold w-[500px] text-zinc-900 outline-none border-none px-3 my-1"  placeholder="Design a Logo" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <textarea className="text-sm font-normal outline-none border-none w-[850px]  mt-2 ml-2 mr-10"  placeholder="Design a logo for edtech company named edul clinic , edu clinic is a platform built to connect the educatinol organiation to the students" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* attachment section */}
                        <div className=" w-full border-t border-b pb-4" >
                          <p className="text-sm font-medium text-zinc-900 mt-4" >Attachments</p>
                          
                          {
                              !TaskDocument && (
                                <div className="flex mt-4 underline text-indigo-700" >

                                  <Link size={17} strokeWidth={2} />
                                  <p className="text-xs font-medium" >Add Attachment</p>
                                  {/* <input type="file" hidden /> */}
                                </div>
                              )
                            }

                          {/* div */}
                          <div className=" flex flex-col gap-2 items-center justify-center" >
                            
                            
                          {
                            TaskDocument && (
                              <div className="h-20 w-full rounded-lg border flex justify-between items-center px-5" >
                                  {/* left div */}
                                  <div className="flex gap-2 items-center" > 
                                    <div className="h-12 w-12 flex justify-center items-center border rounded-md" >
                                    <File strokeWidth={1.5}/>
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium " >Logo.svg</p>
                                      
                                    </div>
                                  </div>
                                  {/* right div */}
                                  <div>
                                    <div className=" px-2 py-1 gap-2 bg-red-100 rounded-md flex justify-center items-center text-red-600" >
                                  <Trash size={15} strokeWidth={1.5} />
                                  <p>Delete</p>
                                    </div>
                                  </div>
                                </div>
                            )
                          }
                          </div>

                        </div>
                        {/* attachment section ends here */}

                        {/* comment section starts here */}
                        <div className="border-b pb-3" >



                          {/* comments input field */}
                          <div className="flex gap-2" >
                            <div className="h-8 w-8 bg-zinc-200 rounded-full border" ></div>
                            <input  className="outline-none w-[650px] border-none text-sm font-medium text-zinc-900" placeholder="Pinned Comment" />

                          </div>

                        </div>
                        {/* comment section ends here */}
                        

                        <Button type="submit">Submit</Button>
                      </form>
                    </Form>
                  </div>
                  {/* right div */}
                  <div className="w-1/3 h-full bg-white border-l">

                    {/* upper div for assigning the members */}
                    <div className="border-b py-7 px-4 " >
                      <p className="text-sm font-medium text-zinc-800" >Assign members</p>
                        <div className="mt-4 flex gap-4 flex-wrap" >
                          {
                            TaskMembers.length > 1 && (
                              <>
                              {
                                TaskMembers.map((curr:any)=>{
                                  return <div className="h-10 w-10 rounded-full bg-indigo-700 flex justify-center items-center" >
                                  <User size={25} strokeWidth={1.75} color="white"/>
                                </div>
                                })
                              }
                              </>
                            )
                          }
                        </div>
                      <div className="h-10 w-10 border rounded-full flex justify-center items-center mt-4" >
                        <Plus  size={25} strokeWidth={2} />

                      </div>

                    </div>
                    {/* upper div for assiging the members ends here */}

                  </div>
                </div>
              </div>
            </div>
            {/* main div for assiging the tasks ends here */}
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default AssignTaskComponent;
