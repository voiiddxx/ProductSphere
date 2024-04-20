"use client";
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
            <div className="min-h-[500px] w-full ">
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

                        <div className="h-[150px] w-full border rounded-lg">
                          <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <input className="text-lg font-semibold w-[500px] text-zinc-900 outline-none border-none px-3 my-1"  placeholder="Task title" {...field} />
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
                                  <textarea className="text-sm font-medium outline-none border-none w-[700px]" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button type="submit">Submit</Button>
                      </form>
                    </Form>
                  </div>
                  {/* right div */}
                  <div className="w-1/3 h-full bg-blue-700"></div>
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
