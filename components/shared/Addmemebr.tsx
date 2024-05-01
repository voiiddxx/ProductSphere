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
import { Check, Dot, GitBranch, Network, PlusCircle, Search, X } from "lucide-react";
import { getAllUsers } from "@/lib/actions/user.action";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { AddteamMembersActions } from "@/lib/actions/product.action";
import { toast, Toaster } from "sonner";

type AddmemebrsProps = {
  productId: number;
};

const Addmemebr = ({ productId }: AddmemebrsProps) => {
  const [Users, setUsers] = useState<any>([]);
  const [Selectedmembers, setSelectedmembers] = useState<any>([]);
  const [ClickedMember, setClickedMember] = useState<any>(null);
  const [MemberstToAdd, setMemberstToAdd] = useState<any[]>([]);
  const [IsLoading, setIsLoading] = useState<boolean>(true);
  const handleUserChange = (curr: any) => {
    setMemberstToAdd([...MemberstToAdd, +curr.id]);
    setSelectedmembers([...Selectedmembers, curr]);
  };

  const removeUserfromtheArray = (user: any) => {
    const userIndex = Selectedmembers.findIndex((curr: any) => curr === user);
    const updateUser = [...Selectedmembers];
    updateUser.splice(userIndex, 1);
    setSelectedmembers(updateUser);
  };
  useEffect(() => {
    const getAllmembers = async () => {
      const res = await getAllUsers();
      console.log(res);

      setUsers(res);
    };
    getAllmembers();
  }, []);

  // add team mebers action
  const addteamMemeber = async () => {
    setIsLoading(true);
    console.log(MemberstToAdd);
    const res = await AddteamMembersActions({
      teamMember: MemberstToAdd,
      prodId: productId,
    });

    if(res.status == 400){
      toast.error("Some issue happend");
    }
    if(res.status == 200){
      toast.success("Members added");
    }

    console.log(res);
  };
  return (
    <AlertDialog>
      <Toaster position="top-right" richColors />
      <AlertDialogTrigger>
        <div className="flex">
          <Network size={15} strokeWidth={1.5} />
          <p className="text-xs font-medium">Add members </p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex items-center">
              <Dot className="text-indigo-700" absoluteStrokeWidth strokeWidth={8} />
              <p className="text-sm font-medium">Add Product Members</p>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <p className="text-xs font-medium">Select members</p>

            {/* server option */}
            <div className="mt-4 flex border-b items-center gap-2">
              <Search size={15} />
              <input
                className="outline-none border-none"
                type="text"
                placeholder="Search users"
              />
            </div>
            {/* selcted member div */}
            <div>
              {Selectedmembers.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {Selectedmembers.map((curr: any) => {
                    return (
                      <div className="h-10 w-10 relative rounded-full bg-slate-400">
                        <Image
                          src={curr.avatar}
                          className="h-10 w-10 rounded-full object-cover"
                          height={900}
                          width={900}
                          alt="userimage"
                        />
                        <div
                          onClick={() => {
                            removeUserfromtheArray(curr);
                          }}
                          className="absolute right-[-5px] top-[-5px] h-4 w-4 border bg-red-100 rounded-full flex justify-center items-center "
                        >
                          <X
                            className="text-red-600"
                            size={12}
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* mapping of all the users */}
            <ScrollArea className="h-[300px] w-full  p-4">
              {Users.length > 1 && (
                <div>
                  {Users.map((curr: any) => {
                    return (
                      <div
                        onClick={() => {
                          handleUserChange(curr);
                        }}
                        className="mt-4 h-12 w-full  border-b flex justify-between items-center"
                      >
                        {/* div */}
                        <div className="flex gap-2 items-center">
                          <div className="h-8 w-8 bg-slate-500 rounded-full">
                            <Image
                              src={curr.avatar}
                              className="h-8 w-8 rounded-full"
                              height={900}
                              width={900}
                              alt="userimage"
                            />
                          </div>
                          <p className="text-sm font-medium">{curr.username}</p>
                        </div>
                        {/* div end */}

                        {Selectedmembers.findIndex(
                          (user: any) => user === curr
                        ) != -1 ? (
                          <div>
                            <Check
                              className="text-indigo-700"
                              size={25}
                              strokeWidth={1.5}
                            />
                          </div>
                        ) : (
                          <div>
                            <PlusCircle size={25} strokeWidth={1.5} className="text-indigo-700" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </ScrollArea>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={addteamMemeber}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Addmemebr;
