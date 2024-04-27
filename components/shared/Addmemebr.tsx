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
import { ScrollArea } from "@/components/ui/scroll-area";

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
            <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
              Jokester began sneaking into the castle in the middle of the night
              and leaving jokes all over the place: under the king's pillow, in
              his soup, even in the royal toilet. The king was furious, but he
              couldn't seem to stop Jokester. And then, one day, the people of
              the kingdom discovered that the jokes left by Jokester were so
              funny that they couldn't help but laugh. And once they started
              laughing, they couldn't stop.
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
