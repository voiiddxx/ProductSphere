import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import Image from "next/image";
import { ArrowBigDown, ArrowDown, ChevronDown, CupSoda, Dot, File } from "lucide-react";
import TaskstatusComponents from "./TaskstatusComponents";
import TaskAssignedCard from "./TaskAssignedCard";


  type taskData= {
    data:any
  }

const TaskDetail = ({data}:taskData) => {


  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <TaskAssignedCard data={data} />
        </DialogTrigger>
        <DialogContent className="w-[1400px]">
          <DialogHeader className="border-b pb-4">
            <DialogTitle>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </DialogTitle>
          </DialogHeader>

          {/* content of the tasks */}

          <div className="flex justify-between w-full h-full min-h-44" >
            {/* left div */}
            <div className="w-3/5 h-full border-r" >

                {/* headibg */}
                <h1 className="text-5xl font-bold mt-2" >{data.title}</h1>
                <p className="text-sm font-medium mt-4 -tracking-wide leading-relaxed text-zinc-600" >{data.desc}</p>


                {/* sub detail div */}
                <div className="mt-10 border-b pb-5" >
                    {/* status */}
                    <div className="flex gap-16 items-center" >
                        <p className="text-zinc-700 font-medium text-sm" >Status:</p>
                        <div className="flex justify-center items-center px-4 py-1 bg-yellow-100 rounded-full">
                            <p className="text-yellow-600 text-sm font-medium" >{data.status}</p>
                        </div>
                    </div>

                    {/* assigned to */}
                    <div className="flex gap-16 items-center mt-5" >
                        <p className="text-zinc-700 font-medium text-sm" >Assigned to:</p>
                        <div className="flex justify-center items-center  rounded-full gap-4">
                           {
                            data.AssignMembers.map((curr:any)=>{
                                return <div className="px-4 py-1 flex  items-center gap-2 bg-slate-100 rounded-full">
                                    <div className="h-6 w-6 rounded-full bg-indigo-800" >
                                        <Image src={curr.avatar} className="h-6 w-6 object-cover rounded-full" height={900} width={900} alt="userimage" />
                                    </div>
                                    <p className="text-sm font-semibold" >{curr.username}</p>
                                    

                                </div>
                            })
                           }
                        </div>
                    </div>

                    {/* due date */}
                    <div className="flex gap-16 items-center mt-5" >
                        <p className="text-zinc-700 font-medium text-sm" >Due date</p>
                        <div className="flex justify-center items-center px-4 py-1  rounded-full">
                            <p className="text-zinc-800 font-semibold" >{data.dueDate}</p>
                        </div>
                    </div>

                    {/* priority */}
                    <div className="flex gap-16 items-center mt-5" >
                        <p className="text-zinc-700 font-medium text-sm" >Priority:</p>
                        <div className="flex justify-center items-center px-4 py-1 bg-red-100 rounded-full">
                            <Dot className="text-red-600" absoluteStrokeWidth strokeWidth={8} />
                            <p className="text-red-600 text-sm font-medium" >{data.priority}</p>
                        </div>
                    </div>

                </div>


                {/* highlighted comments */}
                <div className="mt-5 border-b pb-4" >
                    <p className="text-sm font-semibold" >Note:</p>
                    <div className="flex gap-2 mt-5" >
                          <div>
                          <div className="h-10 w-10 rounded-full bg-indigo-700" >
                            <Image src={data.createdBy.avatar} className="h-10 w-10 rounded-full object-cover" height={900} width={900} alt="commentuser" />
                          </div>
                          </div>
                           <div>
                            <p className="text-sm font-medium" >{data.createdBy.username}</p>
                            <p className="text-xs font-medium italic mt-2 text-zinc-600" >{data.comment}</p>
                           </div>
                    </div>
                </div>

                {/* document section */}

                <div className="mt-5 border-b pb-10" >
                    
                <p className="text-sm font-semibold" >Attachments</p>

                <div className="w-full h-16 border mt-4 rounded-lg flex justify-between items-center px-4" >
                    <div className="flex items-center gap-2" >
                           <div className="h-10 w-10 rounded-md border flex justify-center items-center" >
                           <File  className="text-indigo-700" size={18} strokeWidth={1.75} />
                           </div>
                           <p className="text-zinc-700 font-medium text-sm" >Task Document.pdf</p>
                    </div>

                    <div className="h-10 w-10 bg-indigo-700 rounded-full flex items-center justify-center" >
                           <ArrowDown color="white" size={18} />
                    </div>

                </div>
                </div>




            </div>
            {/* right div */}
            <div className="w-2/5" >
                <div className="px-6 mt-5" >
                <p className="text-sm font-medium" >Tags</p>

                <div className="flex gap-1 flex-wrap mt-5 border-b pb-4" >
                    {
                        data.tags.map((curr:any)=>{
                            return <div className=" px-3 py-2 border rounded-sm flex justify-center items-center gap-2" >
                                <Dot className="text-green-600"  absoluteStrokeWidth strokeWidth={8} />
                                <p className="text-gray-700 text-sm font-medium" >{curr}</p>

                            </div>
                        })
                    }
                </div>


                {/* created by dicv */}
                <div className=" pb-4 border-b" >
                    <p className="text-sm font-medium text-zinc-600 mt-4" >Created By</p>
                    <div className="flex gap-2 items-center mt-3" >
                    <div className="h-8 w-8 bg-slate-400 rounded-full" >
                      <Image src={data.createdBy.avatar} className="h-8 w-8 rounded-full object-cover"  height={900} width={900} alt="ownerimage" />
                    </div>
                    <p className="text-sm font-medium" >{data.createdBy.username}</p>
                    </div>

                </div>


                {/* update product status */}
                <TaskstatusComponents taskId={data.assignId} />
                </div>
              
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TaskDetail;
