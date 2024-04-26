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
import { GitBranch, Network } from "lucide-react";
import { getAllUsers } from "@/lib/actions/user.action";

type AddmemebrsProps = {
  productId: number;
};

const Addmemebr = ({ productId }: AddmemebrsProps) => {
  const [Users, setUsers] = useState<any>(null);

  useEffect(() => {
    const getAllmembers = async () => {
      const res = await getAllUsers();
      setUsers(res);
    };
    getAllmembers();
  }, []);
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
            <div>
              <GitBranch />
              <p className="text-sm font-medium">Add team meber</p>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <p className="text-xs font-medium">Select members</p>

            {/* mapping of all the users */}
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
