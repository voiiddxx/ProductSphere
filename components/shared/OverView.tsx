import React from "react";
import { Button } from "../ui/button";
import {
  BoxIcon,
  Leaf,
  ListTodoIcon,
  Loader,
  MoreHorizontal,
  Network,
  Zap,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const users = [
  {
    username: "void",
    email: "void@gmail.com",
  },
  {
    username: "void",
    email: "void@gmail.com",
  },
  {
    username: "void",
    email: "void@gmail.com",
  },
  {
    username: "void",
    email: "void@gmail.com",
  },
  {
    username: "void",
    email: "void@gmail.com",
  },
  {
    username: "void",
    email: "void@gmail.com",
  },
];
const OverView = () => {
  return (
    <div className="w-full px-8 py-4 ">
      {/* upper heading bar */}
      <div className="w-full flex justify-between">
        <h1 className="text-2xl font-semibold">Overall Insights</h1>
        <div className="flex gap-2">
          <Button>Edit Product</Button>
        </div>
      </div>
      {/* upper heading bar end */}

      {/* cards div */}
      <div className="w-full flex flex-wrap gap-4 mt-5">
        <div className="h-[170px] w-[250px] bg-white  rounded-md px-5 py-4 flex flex-col justify-between">
          {/* first row */}
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded-full bg-orange-100 flex justify-center items-center">
              <ListTodoIcon className="text-orange-600" size={20} />
            </div>
          </div>
          <div>
            {/* second row */}
            <div>
              <h1 className="text-4xl mt-4 text-orange-600 font-medium ">
                10+
              </h1>
            </div>

            {/* bottom row */}
            <div>
              <p className="text-xs mt-2 font-normal text-gray-500">
                Total Assigned Tasks
              </p>
            </div>
          </div>
        </div>

        {/* second card=================== */}
        <div className="h-[170px] w-[250px] bg-white  rounded-md px-5 py-4 flex flex-col justify-between">
          {/* first row */}
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded-full bg-green-100 flex justify-center items-center">
              <Leaf className="text-green-600" size={20} />
            </div>
          </div>
          <div>
            {/* second row */}
            <div>
              <h1 className="text-4xl mt-4 text-green-600 font-medium ">5+</h1>
            </div>

            {/* bottom row */}
            <div>
              <p className="text-xs mt-2 font-normal text-gray-500">
                Total completed tasks
              </p>
            </div>
          </div>
        </div>
        {/* third card ====================== */}
        <div className="h-[170px] w-[250px] bg-white  rounded-md px-5 py-4 flex flex-col justify-between">
          {/* first row */}
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded-full bg-pink-100 flex justify-center items-center">
              <Loader className="text-pink-600" size={20} />
            </div>
          </div>
          <div>
            {/* second row */}
            <div>
              <h1 className="text-4xl mt-4 text-pink-600 font-medium ">25+</h1>
            </div>

            {/* bottom row */}
            <div>
              <p className="text-xs mt-2 font-normal text-gray-500">
                Total Pending Tasks
              </p>
            </div>
          </div>
        </div>
        {/* fourth card ==================== */}
        <div className="h-[170px] w-[250px] bg-white  rounded-md px-5 py-4 flex flex-col justify-between">
          {/* first row */}
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded-full bg-yellow-100 flex justify-center items-center">
              <Network className="text-yellow-600" size={20} />
            </div>
          </div>
          <div>
            {/* second row */}
            <div>
              <h1 className="text-4xl mt-4 text-yellow-600 font-medium ">
                16+
              </h1>
            </div>

            {/* bottom row */}
            <div>
              <p className="text-xs mt-2 font-normal text-gray-500">
                Total Product members
              </p>
            </div>
          </div>
        </div>
        {/* fifth card============================== */}
        <div className="h-[170px] w-[250px] bg-white  rounded-md px-5 py-4 flex flex-col justify-between">
          {/* first row */}
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded-full bg-violet-100 flex justify-center items-center">
              <Zap className="text-violet-600" size={20} />
            </div>
          </div>
          <div>
            {/* second row */}
            <div>
              <h1 className="text-4xl mt-4 text-violet-600 font-medium ">
                10+
              </h1>
            </div>

            {/* bottom row */}
            <div>
              <p className="text-xs mt-2 font-normal text-gray-500">
                Total Product feedbacks
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* cards div end */}

      {/* tabs div */}
      <div className="mt-5 border-t pt-5">
        <Tabs defaultValue="Members" className="w-full">
          <TabsList>
            <TabsTrigger value="Members">Members</TabsTrigger>
            <TabsTrigger value="Feedbacks">Feedbacks</TabsTrigger>
            <TabsTrigger value="Upvotes">Upvotes</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="Members">
            <div className="mt-4 px-3">
              <div className="w-full" >
                <p className="text-xl font-medium" >Product Members</p>
                {users.map((curr: any) => {
                  return <div className="w-full h-20 flex justify-between items-center border-b" >
                    <div className="flex gap-2" >
                    <div className="h-10 w-10 rounded-full bg-slate-400" ></div>
                    <div>
                        <p className="text-sm font-medium text-zinc-900" >{curr.username}</p>
                        <p className="text-xs font-normal text-zinc-600" >{curr.email}</p>
                    </div>
                    </div>

                    <div className="flex gap-5" >
                        <div className="px-3 py-1 bg-indigo-100 rounded-full" >
                            <p className="text-indigo-700 font-medium text-xs" >5 Assigned tasks</p>
                        </div>
                        <div className="px-3 py-1 bg-green-100 rounded-full" >
                            <p className="text-green-700 font-medium text-xs" >4 completed tasks</p>
                        </div>
                        <div className="px-3 py-1 bg-yellow-100 rounded-full" >
                            <p className="text-yellow-700 font-medium text-xs" >4 completed tasks</p>
                        </div>
                    </div>

                    <div>
                        <MoreHorizontal className="text-zinc-800" />
                    </div>
                  </div>;
                })}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
      {/* tabs div end */}
    </div>
  );
};

export default OverView;
