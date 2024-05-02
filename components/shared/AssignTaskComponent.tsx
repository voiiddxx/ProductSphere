"use client";

import React, { useEffect, useRef, useState } from "react";
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
  Hash,
  Link,
  ListTodo,
  Pin,
  Plus,
  TagsIcon,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getProductWithProductIdAction } from "@/lib/actions/product.action";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AssignNewTasks } from "@/lib/actions/task.action";
import { Toaster, toast } from 'sonner'


//  assign task schema
const formSchema = z.object({
  name: z.string().min(2).max(50),
  detail: z.string().min(2).max(500),
});



  type AssignTasksProps = {
    prodId:string
  }

const AssignTaskComponent = ({prodId}:AssignTasksProps) => {
  const [TaskDocument, setTaskDocument] = useState<any>(null);
  const [TaskMembers, setTaskMembers] = useState<any>([]);
  const [StartDate, setStartDate] = useState<any>(null);
  const AttachmentButton = useRef<any>(null);
  const [PinnedComment, setPinnedComment] = useState<any>(null);
  const [Tags, setTags] = useState<any>([]);
  const [TagToBeAdded, setTagToBeAdded] = useState<any>(null);
  const [Priority, setPriority] = useState<any>(null);
  const [ProdMembers, setProdMembers] = useState<any>(null);
  const [TaskmembersforPost, setTaskmembersforPost] = useState<any>([]);


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      detail: "",
    },
  });

  const handleAddTaskMembers = (curr:any)=>{
    toast.info("Added");
      setTaskmembersforPost([...TaskmembersforPost , curr.id])
      setTaskMembers([...TaskMembers , curr.avatar]);
  }


  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const userid = localStorage.getItem("x-auth-id");
    const creatorid = +userid!;
    const productId = +prodId;
    if(StartDate && Tags && PinnedComment && TaskDocument && Priority){
      console.log({...values , StartDate , Tags , TaskDocument , PinnedComment , Priority}); 
      const res = await AssignNewTasks({ data:{
        title:values.name , desc:values.detail , dueDate:StartDate , documents:"thisisdocunment" , comment:PinnedComment , creatorid:creatorid , priority:Priority , prodId:productId , status:"Not Started yet" , tags:Tags , taskmembersNow   :TaskmembersforPost
      }});
      if(res){
        console.log("Task Assigned: " , res);
      }else{
        console.log("Some error occured");
        
      }
    }else{
      console.log("Please fill all details");
      
    }
    
  }

  const handleTags = () => {
    setTags([...Tags , TagToBeAdded]);
    toast.info(`${TagToBeAdded} added`)
  };


  // getting the product data for rendering the task members

  useEffect(()=>{
    
  const getProductForTaskmembers = async ()=>{
    const productId = +prodId;
    const ProdRes = await getProductWithProductIdAction(productId);
    setProdMembers(ProdRes.members);
  }

  getProductForTaskmembers();
  } , [])

  return (
    <Drawer>
      <Toaster position="top-right" richColors />
      <DrawerTrigger className="flex gap-1 ">
        <ListTodo size={15} strokeWidth={1.5} />
        <p className="text-xs font-medium">Assign Tasks</p>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerDescription>
            {/* main div for assiging the tasks start here */}
            <div className="min-h-[700px] w-full pb-20 ">
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
                                <input
                                  className="outline-none border-none w-[600px] font-medium text-zinc-950 text-lg mt-4 placeholder:text-zinc-950"
                                  placeholder="Assign new task"
                                  {...field}
                                />

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
                            <div
                              onClick={() => {
                                AttachmentButton.current.click();
                              }}
                              className="flex mt-4 underline text-indigo-700 cursor-pointer"
                            >
                              <Link size={17} strokeWidth={2} />
                              <p className="text-xs font-medium">
                                Add Attachment
                              </p>
                              <input
                                onChange={(e) => {
                                  setTaskDocument(e.target.files);
                                }}
                                type="file"
                                hidden
                                ref={AttachmentButton}
                              />
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
                                  <div
                                    onClick={() => {
                                      setTaskDocument(null);
                                    }}
                                    className=" px-2 py-1 gap-2 bg-red-100 rounded-md flex justify-center items-center text-red-600"
                                  >
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
                          {PinnedComment && (
                            <div className="flex mb-8 items-center gap-2">
                              <div className="h-8 w-8 bg-zinc-200 rounded-full border"></div>
                              <p className="font-semibold text-zinc-950">
                                {PinnedComment}
                              </p>
                              <Pin size={15} />
                            </div>
                          )}
                          {/* comments input field */}
                          <div className="flex gap-2">
                            <div className="h-8 w-8 bg-zinc-200 rounded-full border"></div>
                            <input
                              onChange={(e) => {
                                setPinnedComment(e.target.value);
                              }}
                              className="outline-none w-[650px] border-none text-sm font-medium text-zinc-900"
                              placeholder="Pinned Comment"
                            />
                          </div>
                        </div>
                        {/* comment section ends here */}

                        <Button className="bg-indigo-700 mt-5" type="submit">
                          Submit
                        </Button>
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
                        {ProdMembers != null && (
                          <>
                            <AlertDialog>
                              <AlertDialogTrigger>
                                <div className="h-10 w-10 flex justify-center items-center rounded-full border" >
                                  <Plus size={18} strokeWidth={1.5} />
                                </div>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    <p className="text-xl font-medium text-zinc-800" >Assing task members</p>
                                    <p className="text-sm font-medium text-zinc-500" >Select your task team members</p>

                                    {
                              TaskMembers.length > 0 && (
                                <div className="flex gap-3 flex-wrap mt-4 mb-4" >
                                   {TaskMembers.map((curr: any) => {
                              return (
                                <div className="h-10 w-10 relative rounded-full bg-indigo-700 flex justify-center items-center">
                                  
                                  <Image className="h-10 w-10 rounded-full object-cover" src={curr} height={900} width={900} alt="avatar" />
                                </div>
                              );
                            })}
                                </div>
                              )
                            }
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                  <div className="border-t w-full " >

                                    <div className="flex gap-4" >
                                 
                                    </div>

                                   {
                                      ProdMembers.map((curr:any)=>{
                                        return <div className="border-b w-full flex justify-between py-4" >

                                          {/* left div */}
                                          <div className="flex gap-2" >
                                            <Image className="h-10 w-10 rounded-full object-cover"  src={curr.avatar} height={900} width={900} alt="avatar" />
                                            <p className="text-sm font-medium" >{curr.username}</p>
                                          </div>
                                          {/* right div */}

                                          <div onClick={()=>{
                                            handleAddTaskMembers(curr);
                                          }} className="flex gap-1" >
                                            <Plus size={17} strokeWidth={1.5}/>
                                            <p className="text-sm font-medium" >Add {curr.username}</p>
                                          </div>

                                        </div>
                                      })
                                    }
                                  </div>
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction>
                                    Continue
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                            {
                              TaskMembers.length > 0 && (
                                <div className="flex gap-3 flex-wrap" >
                                   {TaskMembers.map((curr: any) => {
                              return (
                                <div onClick={()=>{
                                  console.log(TaskmembersforPost);
                                  
                                }} className="h-10 w-10 rounded-full bg-indigo-700 flex justify-center items-center">
                                  <Image className="h-10 w-10 rounded-full object-cover" src={curr} height={900} width={900} alt="avatar" />
                                </div>
                              );
                            })}
                                </div>
                              )
                            }
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
                      <Select
                        onValueChange={(val) => {
                          setPriority(val);
                        }}
                      >
                        <SelectTrigger className="w-[180px] border-none">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Low">
                            <div className="flex gap-1 items-center">
                              <Dot
                                className="text-green-500"
                                strokeWidth={8}
                                absoluteStrokeWidth
                              />
                              <p className="text-zinc-900 font-medium">Low</p>
                            </div>
                          </SelectItem>
                          <SelectItem value="Average">
                            <div className="flex gap-1 items-center">
                              <Dot
                                className="text-yellow-500"
                                strokeWidth={8}
                                absoluteStrokeWidth
                              />
                              <p className="text-zinc-900 font-medium">
                                Average
                              </p>
                            </div>
                          </SelectItem>
                          <SelectItem value="High">
                            <div className="flex gap-1 items-center">
                              <Dot
                                className="text-red-500"
                                strokeWidth={8}
                                absoluteStrokeWidth
                              />
                              <p className="text-zinc-900 font-medium">
                                Very High
                              </p>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* prority div ends here */}

                    {/* tags div starts here */}
                    <div className="px-4 py-7 border-b ">
                      <p className="text-sm mb-4 font-medium text-zinc-900">
                        Tags
                      </p>

                      {Tags.length > 1 && (
                        <div className="flex flex-wrap gap-4">
                          {Tags.map((curr: any) => {
                            return (
                              <div className="px-4 py-2 border rounded-md flex justify-center items-center gap-1 text-indigo-700 ">
                                <Dot className="text-indigo-700" size={15} strokeWidth={4} absoluteStrokeWidth />
                                <p>{curr}</p>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <Dialog>
                        <DialogTrigger>
                          <div className="flex gap-1 border px-2 py-2 rounded-lg border-dashed items-center text-indigo-700 mt-2">
                            <Plus size={16} strokeWidth={1.5} />
                            <p className="text-xs font-semibold">
                              Add Tags
                            </p>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div className="flex gap-2" >
                                  <Hash/>
                          <p className="text-zinc-900 font-medium text-sm" >Add Tags</p>
                              </div>
                            </DialogTitle>
                            <DialogDescription>
                              add the tags which is related to the assigned tasks
                              <Input
                                onChange={(e) => {
                                  setTagToBeAdded(e.target.value);
                                }}
                                className="mt-4 outline-none border-none"
                                placeholder="Enter your techstack here"
                              />
                              <div className="w-full flex justify-end">
                                <Button
                                  onClick={handleTags}
                                  className="bg-indigo-700 mt-4"
                                >
                                  Submit
                                </Button>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
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
