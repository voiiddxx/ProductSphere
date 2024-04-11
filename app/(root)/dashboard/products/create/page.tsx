import DashBoardNav from "@/components/shared/DashBoardNav";
import { Github, Inbox } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
    

const page = () => {
  return (
    <div>
      <div className="h-16 w-full border-b flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            className="h-14 ml-5 w-auto"
            src={`/MainLogo.svg`}
            height={1500}
            width={1500}
            alt="logo"
          />
          <p className="text-xs text-zinc-400 mt-1"> / </p>
          <Breadcrumb> 
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                    <p className="text-xs font-medium" >Home</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">
                <p className="text-xs font-medium" >dashboard</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                <p className="text-xs font-medium" >add product</p></BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex gap-4 pr-10 items-center">
          <p className="px-2 py-1 border rounded-md cursor-pointer hover:bg-zinc-100 text-xs font-medium">
            feedback
          </p>
          <Github size={17} strokeWidth={1.5} />
          <Inbox size={17} strokeWidth={1.5} />
        </div>
      </div>
      this is crerate your product page.tsx file
    </div>
  );
};

export default page;
