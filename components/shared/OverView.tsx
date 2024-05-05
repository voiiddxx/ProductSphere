import React from "react";
import { Button } from "../ui/button";
import {
  BoxIcon,
  Leaf,
  ListTodoIcon,
  Loader,
  MoreHorizontal,
  MousePointerClick,
  Network,
  StarIcon,
  Triangle,
  UsersRound,
  Zap,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Image from "next/image";
import Link from "next/link";

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

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
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

type OverViewProps = {
  data: any;
};
const OverView = ({ data }: OverViewProps) => {
  console.log("This is product Data: ", data, "size:");
  console.log(data.tasks.length);

  return (
    <div className="w-full px-8 py-4 ">
      {/* upper heading bar */}
      <div className="w-full flex justify-between mt-4">
        <h1 className="text-2xl font-semibold">Overall Insights</h1>
        <div className="flex gap-2 mr-20">
          
        </div>
      </div>
      {/* upper heading bar end */}

      {/* cards div */}
      <div className="w-full flex flex-wrap gap-4 mt-5">
        <div className="h-[170px] w-[250px] bg-orange-500  rounded-md px-5 py-4 flex flex-col justify-between">
          {/* first row */}
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded-full bg-orange-50 flex justify-center items-center">
              <ListTodoIcon className="text-orange-500" size={20} />
            </div>
          </div>
          <div>
            {/* second row */}
            <div>
              <h1 className="text-4xl mt-4 text-white font-medium ">
                {data.tasks.length}
              </h1>
            </div>

            {/* bottom row */}
            <div>
              <p className="text-xs mt-2 font-normal text-white">
                Total Assigned Tasks
              </p>
            </div>
          </div>
        </div>

        {/* second card=================== */}
        <div className="h-[170px] w-[250px] bg-green-500  rounded-md px-5 py-4 flex flex-col justify-between">
          {/* first row */}
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded-full bg-green-50 flex justify-center items-center">
              <Leaf className="text-green-500" size={20} />
            </div>
          </div>
          <div>
            {/* second row */}
            <div>
              <h1 className="text-4xl mt-4 text-white font-medium ">
                {data.tasks.length}+
              </h1>
            </div>

            {/* bottom row */}
            <div>
              <p className="text-xs mt-2 font-normal text-white">
                Total completed tasks
              </p>
            </div>
          </div>
        </div>
        {/* third card ====================== */}
        <div className="h-[170px] w-[250px] bg-pink-500  rounded-md px-5 py-4 flex flex-col justify-between">
          {/* first row */}
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded-full bg-pink-50 flex justify-center items-center">
              <Loader className="text-pink-500" size={20} />
            </div>
          </div>
          <div>
            {/* second row */}
            <div>
              <h1 className="text-4xl mt-4 text-white font-medium ">
                {data.tasks.length}+{" "}
              </h1>
            </div>

            {/* bottom row */}
            <div>
              <p className="text-xs mt-2 font-normal text-white">
                Total Pending Tasks
              </p>
            </div>
          </div>
        </div>
        {/* fourth card ==================== */}
        <div className="h-[170px] w-[250px] bg-yellow-500  rounded-md px-5 py-4 flex flex-col justify-between">
          {/* first row */}
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded-full bg-yellow-50 flex justify-center items-center">
              <Network className="text-yellow-500" size={20} />
            </div>
          </div>
          <div>
            {/* second row */}
            <div>
              <h1 className="text-4xl mt-4 text-white font-medium ">
                {data.members.length}+
              </h1>
            </div>

            {/* bottom row */}
            <div>
              <p className="text-xs mt-2 font-normal text-white">
                Total Product members
              </p>
            </div>
          </div>
        </div>
        {/* fifth card============================== */}
        <div className="h-[170px] w-[250px] bg-violet-500  rounded-md px-5 py-4 flex flex-col justify-between">
          {/* first row */}
          <div className="w-full flex justify-between">
            <div className="h-10 w-10 rounded-full bg-violet-50 flex justify-center items-center">
              <Zap className="text-violet-500" size={20} />
            </div>
          </div>
          <div>
            {/* second row */}
            <div>
              <h1 className="text-4xl mt-4 text-white font-medium ">
                {data.reviews.length}
              </h1>
            </div>

            {/* bottom row */}
            <div>
              <p className="text-xs mt-2 font-normal text-white">
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
            <TabsTrigger value="Members">
              <div className="flex gap-1" >
                <UsersRound size={17} />
                <p className="font-medium text-sm" >Members ({data.members.length}) </p>
              </div>
            </TabsTrigger>
            <TabsTrigger value="Feedbacks">
            <div className="flex gap-1" >
                <Star size={17} />
                <p className="font-medium text-sm" >Reviews ({data.reviews.length}) </p>
              </div>
            </TabsTrigger>
            <TabsTrigger value="Upvotes">
            <div className="flex gap-1" >
                <Triangle size={17} />
                <p className="font-medium text-sm" >Upvotes ({data.Upvote.length}) </p>
              </div>
            </TabsTrigger>

          </TabsList>
          <TabsContent value="Members">
            <div className="mt-4 px-3">
              <div className="w-full">
                <p className="text-xl font-medium">Product Members</p>
                {data.members.map((curr: any) => {
                  return (
                    <Link href={`/user/${curr.id}`} >
                    <div className="w-full h-20 flex justify-between items-center border-b">
                      <div className="flex gap-2">
                        <div className="h-10 w-10 rounded-full bg-slate-400">
                          <Image
                            src={curr.avatar}
                            className="h-10 w-10 rounded-full object-cover"
                            height={900}
                            width={900}
                            alt="users"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-900">
                            {curr.username}
                          </p>
                          <p className="text-xs font-normal text-zinc-500">
                            {curr.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-5">
                        <div className="px-3 py-1 bg-indigo-50 rounded-full">
                          <p className="text-indigo-700 font-medium text-xs">
                            {curr.membersOftasks.length} Assigned tasks
                          </p>
                        </div>
                        <div className="px-3 py-1 bg-green-50 rounded-full">
                          <p className="text-green-700 font-medium text-xs">
                            {curr.taskCreated.length} Created Tasks
                          </p>
                        </div>
                      
                      </div>

                      <div>
                        <MoreHorizontal className="text-zinc-800" />
                      </div>
                    </div>
                    </Link>
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
                {data.reviews.map((curr: any) => {
                  return (
                    <div className="min-h-20 border-b flex items-start justify-center flex-col ">
                      <div className="flex gap-4">
                        <div className="h-10 w-10 rounded-full bg-slate-400">
                          <Image
                            src={curr.userwhoreviewed.avatar}
                            className="h-10 w-10 rounded-full object-cover"
                            height={900}
                            width={900}
                            alt="user"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-900">
                            {curr.userwhoreviewed.username}
                          </p>
                          <p className="text-xs font-normal text-zinc-500">
                            {curr.userwhoreviewed.email}
                          </p>
                        </div>
                      </div>

                      {/* second div */}

                      <div className="mt-3">
                        <div>
                          <div className="px-3 py-1 flex rounded-full">
                            {curr.count > 0 ? (
                              <Star
                                className="text-transparent"
                                fill="orange"
                                size={15}
                              />
                            ) : (
                              <Star
                                className="text-transparent"
                                fill="gray"
                                size={15}
                              />
                            )}
                            {curr.count > 1 ? (
                              <Star
                                className="text-transparent"
                                fill="orange"
                                size={15}
                              />
                            ) : (
                              <Star
                                className="text-transparent"
                                fill="gray"
                                size={15}
                              />
                            )}
                            {curr.count > 2 ? (
                              <Star
                                className="text-transparent"
                                fill="orange"
                                size={15}
                              />
                            ) : (
                              <Star
                                className="text-transparent"
                                fill="gray"
                                size={15}
                              />
                            )}
                            {curr.count > 3 ? (
                              <Star
                                className="text-transparent"
                                fill="orange"
                                size={15}
                              />
                            ) : (
                              <Star
                                className="text-transparent"
                                fill="gray"
                                size={15}
                              />
                            )}
                            {curr.count > 4 ? (
                              <Star
                                className="text-transparent"
                                fill="orange"
                                size={15}
                              />
                            ) : (
                              <Star
                                className="text-transparent"
                                fill="gray"
                                size={15}
                              />
                            )}

                            <p className="text-xs font-medium text-yellow-700">
                              {curr.count}/5 rating
                            </p>
                          </div>
                        </div>

                        <p className="text-sm mt-3 mb-3 leading-relaxed tracking-wider">
                          {curr.comment}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
          {/* upvotes content */}
          <TabsContent value="Upvotes">
            <div className="pt-5 px-4 py-4">
              <p className="text-2xl font-medium text-zinc-900">Folks</p>
            </div>
            <div className="flex gap-3 flex-wrap w-full mt-5">
              
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* tabs div end */}
    </div>
  );
};

export default OverView;
