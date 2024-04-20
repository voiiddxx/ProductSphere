"use client";

import React, { useRef, useState } from "react";
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
import {
  Box,
  CalendarIcon,
  Dot,
  File,
  Link,
  ListTodo,
  Plus,
  Trash,
  User,
  X,
} from "lucide-react";
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
import { Popover, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

//  assign task schema
const formSchema = z.object({
  name: z.string().min(2).max(50),
  detail: z.string().min(2).max(500),
  
});

const AssignTaskComponent = () => {
  const [TaskDocument, setTaskDocument] = useState<any>(null);
  const [TaskMembers, setTaskMembers] = useState<any>([1, 2, 3]);
  const [StartDate, setStartDate] = useState<any>(null);
  const AttachmentButton = useRef<any>(null);
  

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      detail:""
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

                          {/* trying */}

                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <input
                                    className="outline-none border-none w-[600px] font-medium text-zinc-950 text-lg mt-4 placeholder:text-zinc-950"
                                    placeholder="Assign new task"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <p className="text-sm font-normal mt-1">
                            Fill the necessry details for assigning tasks
                          </p>
                        </div>

                        <div className="h-[150px] w-full border rounded-lg px-2 py-2">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <input
                                    className="text-lg font-semibold w-[500px] text-zinc-900 outline-none border-none px-3 my-1"
                                    placeholder="Design a Logo"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="detail"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <textarea
                                    className="text-sm font-normal outline-none border-none w-[850px]  mt-2 ml-2 mr-10"
                                    placeholder="Design a logo for edtech company named edul clinic , edu clinic is a platform built to connect the educatinol organiation to the students"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* attachment section */}
                        <div className=" w-full border-t border-b pb-4">
                          <p className="text-sm font-medium text-zinc-900 mt-4">
                            Attachments
                          </p>

                          {!TaskDocument && (
                            <div onClick={()=>{
                              AttachmentButton.current.click();
                            }} className="flex mt-4 underline text-indigo-700 cursor-pointer">
                              <Link size={17} strokeWidth={2} />
                              <p className="text-xs font-medium">
                                Add Attachment
                              </p>
                              <input onChange={(e)=>{
                                setTaskDocument(e.target.files)
                              }}  type="file" hidden ref={AttachmentButton} />
                            </div>
                          )}

                          {/* div */}
                          <div className=" flex flex-col gap-2 items-center justify-center mt-4">
                            {TaskDocument && (
                              <div className="h-20 w-full rounded-lg border flex justify-between items-center px-5">
                                {/* left div */}
                                <div className="flex gap-2 items-center">
                                  <div className="h-12 w-12 flex justify-center items-center border rounded-md">
                                    <File strokeWidth={1.5} />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium ">
                                      {TaskDocument[0].name}
                                    </p>
                                  </div>
                                </div>
                                {/* right div */}
                                <div>
                                  <div onClick={()=>{
                                    setTaskDocument(null)
                                  }} className=" px-2 py-1 gap-2 bg-red-100 rounded-md flex justify-center items-center text-red-600">
                                    <Trash size={15} strokeWidth={1.5} />
                                    <p>Delete</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* attachment section ends here */}

                        {/* comment section starts here */}
                        <div className="border-b pb-3">
                          {/* comments input field */}
                          <div className="flex gap-2">
                            <div className="h-8 w-8 bg-zinc-200 rounded-full border"></div>
                            <input
                              className="outline-none w-[650px] border-none text-sm font-medium text-zinc-900"
                              placeholder="Pinned Comment"
                            />
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
                    <div className="border-b py-7 px-4 ">
                      <p className="text-sm font-medium text-zinc-800">
                        Assign members
                      </p>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {TaskMembers.length > 1 && (
                          <>
                            {TaskMembers.map((curr: any) => {
                              return (
                                <div className="h-10 w-10 rounded-full bg-indigo-700 flex justify-center items-center">
                                  <User
                                    size={25}
                                    strokeWidth={1.75}
                                    color="white"
                                  />
                                </div>
                              );
                            })}
                          </>
                        )}
                      </div>
                      <div className="h-10 w-10 border rounded-full flex justify-center items-center mt-4">
                        <Plus size={25} strokeWidth={2} />
                      </div>
                    </div>
                    {/* upper div for assiging the members ends here */}

                    {/* due date div starts here */}
                    <div className="px-7 py-4 border-b">
                      <p className="text-sm mb-4 font-medium text-zinc-900">
                        Task Deadline
                      </p>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !StartDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {StartDate ? (
                              format(StartDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={StartDate}
                            onSelect={setStartDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    {/* due date div ends here */}

                    {/* prority div starts here */}
                    <div className="px-4 py-7 border-b">
                      <p className="text-sm mb-4 font-medium text-zinc-900">
                        Task priority
                      </p>
                      <Select>
                        <SelectTrigger className="w-[180px] border-none">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">
                            <div className="flex gap-1 items-center">
                              <Dot
                                className="text-green-500"
                                strokeWidth={8}
                                absoluteStrokeWidth
                              />
                              <p className="text-zinc-900 font-medium" >Low</p>
                            </div>
                          </SelectItem>
                          <SelectItem value="dark">
                          <div className="flex gap-1 items-center">
                              <Dot
                                className="text-yellow-500"
                                strokeWidth={8}
                                absoluteStrokeWidth
                              />
                              <p className="text-zinc-900 font-medium" >Average</p>
                            </div>
                          </SelectItem>
                          <SelectItem value="system">
                          <div className="flex gap-1 items-center">
                              <Dot
                                className="text-red-500"
                                strokeWidth={8}
                                absoluteStrokeWidth
                              />
                              <p className="text-zinc-900 font-medium" >Very High</p>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* prority div ends here */}


                    {/* tags div starts here */}
                    <div className="px-4 py-7 border-b" >
                    <p className="text-sm mb-4 font-medium text-zinc-900">
                        Tags
                      </p>

                      <Button variant={"outline"} size={"sm"} className="text-indigo-700 flex gap-1 items-center" >
                        <Plus strokeWidth={1.5} size={17} />
                        <p className="text-xs font-medium " >Add Tags</p>
                      </Button>


                    </div>
                    {/* tags div ends here */}
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
