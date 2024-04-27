"use client";
import React, { useEffect, useState } from "react";
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
} from "@/components/ui/alert-dialog";
import { Check, GitBranch, Network, PlusCircle, Search, X } from "lucide-react";
import { getAllUsers } from "@/lib/actions/user.action";
import { ScrollArea } from "@/components/ui/scroll-area";

type AddmemebrsProps = {
  productId: number;
};
const hehe = [1,2,3,4,5,6,7,8,9,12,55,71,22,23,24,25,26,27,28,29,30]
const Addmemebr = ({ productId }: AddmemebrsProps) => {

  const [Users, setUsers] = useState<any>(null);
  const [Selectedmembers, setSelectedmembers] = useState<any>([]);
  const [ClickedMember, setClickedMember] = useState<any>(null);


  const handleUserChange = (curr:any)=>{
    setSelectedmembers([...Selectedmembers , curr])
  }


  const removeUserfromtheArray = (user:any)=>{
      const userIndex = Selectedmembers.findIndex((curr:any)=>curr===user);
      const updateUser = [...Selectedmembers];
      updateUser.splice(userIndex , 1);
      setSelectedmembers(updateUser);
  }
  // useEffect(() => {
  //   const getAllmembers = async () => {
  //     const res = await getAllUsers();
  //     setUsers(res);
  //   };
  //   getAllmembers();
  // }, []);
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="flex">
          <Network size={15} strokeWidth={1.5} />
          <p className="text-xs font-medium">Add members </p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex" >
              <GitBranch size={15}  />
              <p className="text-sm font-medium">Add team meber</p>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <p className="text-xs font-medium">Select members</p>

            {/* server option */}
            <div className="mt-4 flex border-b items-center gap-2" >
              <Search size={15} />
              <input className="outline-none border-none" type="text" placeholder="Search users" />
            </div>
          {/* selcted member div */}
          <div>
            {
              Selectedmembers.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4" >
                  {
                    Selectedmembers.map((curr:any)=>{
                      return <div className="h-10 w-10 relative rounded-full bg-slate-400" >
                        <div onClick={()=>{
                          removeUserfromtheArray(curr);
                        }} className="absolute right-[-5px] top-[-5px] h-4 w-4 border bg-red-100 rounded-full flex justify-center items-center " >
                          <X className="text-red-600" size={12} strokeWidth={1.5} />

                        </div>
                      </div>
                    })
                  }
                </div>
              )
            }
          </div>

        
            

            {/* mapping of all the users */}
            <ScrollArea className="h-[300px] w-full  p-4">
            {
              hehe.length > 1 && (
                <div>
                  {
                    hehe.map((curr)=>{
                      return <div onClick={()=>{
                        handleUserChange(curr);
                      }} className="mt-4 h-12 w-full  border-b flex justify-between items-center" >

                        {/* div */}
                        <div className="flex gap-2 items-center" >
                          <div className="h-8 w-8 bg-slate-500 rounded-full" >
                          </div>
                          <p className="text-sm font-medium" >void.tsx</p>

                        </div>
                        {/* div end */}

                        {
                          Selectedmembers.findIndex((user:any)=>user===curr)!= -1  ? <div>
                            <Check className="text-indigo-700" size={25} strokeWidth={1.5} />
                          </div> : <div>
                               <PlusCircle size={25} className="text-indigo-700" />
                          </div>
                        }
                     

                      </div>
                    })
                  }
                </div>
              )
            }
            </ScrollArea>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Addmemebr;
