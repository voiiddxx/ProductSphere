import React from "react";
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
import { Box, ListTodo } from "lucide-react";

const AssignTaskComponent = () => {
  return (
    <Drawer>
      <DrawerTrigger className="flex gap-1 " >
        <ListTodo size={15} strokeWidth={1.5} />
        <p className="text-xs font-medium">Assign Tasks</p>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerDescription>

            {/* main div for assiging the tasks start here */}
            <div className="min-h-[500px] w-full " >
              

              <div className="h-full w-full px-10" >
                {/* upper navi div */}
                <div className="h-10 w-full border-b flex justify-between items-center" >
                  {/* left div */}
                    <div className="flex" >
                       <p className="text-sm font-medium" >Dashboard</p> 
                       <p className="text-sm font-medium ml-2" >/</p>
                       <div className="flex ml-3 items-center gap-1" >
                        <Box size={15} strokeWidth={2} />
                        <p className="text-sm font-medium" >Productsphere</p>
                       </div>

                       <p className="text-sm font-medium ml-2" >/</p>

                       <div className="flex ml-3 items-center gap-1" >
                        <ListTodo size={15} strokeWidth={2} />
                        <p className="text-sm font-medium" >Assign tasks</p>
                       </div>
                       
                    </div>
                  {/* right div */}


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
