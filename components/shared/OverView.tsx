import React from "react";
import { Button } from "../ui/button";
import {
  BoxIcon,
  Leaf,
  ListTodoIcon,
  Loader,
  MoreHorizontal,
  Network,
  StarIcon,
  Zap,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";

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

const feedbacks = [
  {
    comment: "this is good product",
    star: 3,
  },
  {
    comment: "this is good product",
    star: 3,
  },
  {
    comment: "this is good product",
    star: 3,
  },
  {
    comment: "this is good product",
    star: 3,
  },
  {
    comment: "this is good product",
    star: 3,
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
              <div className="w-full">
                <p className="text-xl font-medium">Product Members</p>
                {users.map((curr: any) => {
                  return (
                    <div className="w-full h-20 flex justify-between items-center border-b">
                      <div className="flex gap-2">
                        <div className="h-10 w-10 rounded-full bg-slate-400"></div>
                        <div>
                          <p className="text-sm font-medium text-zinc-900">
                            {curr.username}
                          </p>
                          <p className="text-xs font-normal text-zinc-600">
                            {curr.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-5">
                        <div className="px-3 py-1 bg-indigo-100 rounded-full">
                          <p className="text-indigo-700 font-medium text-xs">
                            5 Assigned tasks
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-green-100 rounded-full">
                          <p className="text-green-700 font-medium text-xs">
                            4 completed tasks
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-yellow-100 rounded-full">
                          <p className="text-yellow-700 font-medium text-xs">
                            4 completed tasks
                          </p>
                        </div>
                      </div>

                      <div>
                        <MoreHorizontal className="text-zinc-800" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Feedbacks">
            <div className="px-4 py-4">
              <p className="text-2xl font-medium text-zinc-800">
                Product feedback
              </p>

              <div className="mt-5">
                {feedbacks.map((curr: any) => {
                  return (
                    <div className="min-h-20 border-b flex items-start justify-center flex-col ">
                      <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-slate-400"></div>
                        <div>
                          <p className="text-sm font-medium text-zinc-900">
                            Nikhil
                          </p>
                          <p className="text-xs font-normal text-zinc-600">
                            nikhildesign00@gmail.com
                          </p>
                        </div>
                      </div>

                      {/* second div */}

                      <div className="mt-3">
                        <div>
                          <div className="px-3 py-1 flex rounded-full">
                            <Star  size={15} color="orange" fill="orange" />
                            <StarIcon  size={15} color="orange" fill="orange" />
                            <StarIcon  size={15} color="orange" fill="orange" />
                            <StarIcon  size={15} color="gray" fill="gray" />
                            <StarIcon  size={15} color="gray" fill="gray" />
                            <p className="text-xs font-medium text-yellow-700">
                              4/5 rating
                            </p>
                          </div>
                        </div>

                        <p className="text-sm mt-3 mb-3 leading-relaxed tracking-wider" >
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Id dolorem pariatur dolore sapiente animi?
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* tabs div end */}
    </div>
  );
};

export default OverView;
