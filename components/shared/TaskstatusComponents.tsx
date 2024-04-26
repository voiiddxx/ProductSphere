import React from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Dot } from "lucide-react";

const TaskstatusComponents = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Change task status</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex items-center">
              <Dot absoluteStrokeWidth strokeWidth={5} color="red" />
              <p className="text-sm font-medium">Product Status</p>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            update the status of your task and it get notified to product leader
            {/* select div */}
            <Select>
              <SelectTrigger className="w-full mt-4">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">
                  <div className="flex gap-1 items-center">
                    <Dot
                      className="text-teal-600"
                      strokeWidth={8}
                      absoluteStrokeWidth
                    />
                    <p className="text-zinc-900 font-medium">Started</p>
                  </div>
                </SelectItem>
                <SelectItem value="Low">
                  <div className="flex gap-1 items-center">
                    <Dot
                      className="text-orange-500"
                      strokeWidth={8}
                      absoluteStrokeWidth
                    />
                    <p className="text-zinc-900 font-medium">In progress</p>
                  </div>
                </SelectItem>
                <SelectItem value="Low">
                  <div className="flex gap-1 items-center">
                    <Dot
                      className="text-green-500"
                      strokeWidth={8}
                      absoluteStrokeWidth
                    />
                    <p className="text-zinc-900 font-medium">Completed</p>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
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

export default TaskstatusComponents;
