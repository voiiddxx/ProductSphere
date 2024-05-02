import DashBoardNav from '@/components/shared/DashBoardNav'
import { getUserUsinguserId } from '@/lib/actions/user.action'
import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const page = async({
    params:{ id },
  } : {params:{
    id : string
  }}) => {


    // const uset = await getUserUsinguserId(id);
  return (
   <div className='min-h-screen w-full bg-gradient-to-b from-slate-300 to-white ' >
   <div className='bg-white' >
   <DashBoardNav/>
   </div>
    {/* upper div */}
    <div className='h-full mx-96 mt-8 border-b pb-10 border-zinc-400' >
    <div className='w-full flex justify-between' >
        <div className='flex gap-4 items-center' >
        <div className='h-[150px] w-[150px] rounded-full bg-white' >
        </div>
        <div>
            <h1 className='text-zinc-800 text-4xl font-semibold mt-2' >Nikhil Kumar</h1>
           <div className='flex gap-2' >
           <p className='text-xs font-medium bg-slate-200 px-2 py-1 rounded-full mt-1' >nikhildesign00@gmail.com</p>
           </div>
            <p className='mt-1 font-medium' >I create product that matters | Full stack developers | building saas products</p>
            <div className='flex gap-4 mt-4'  >
                <Github size={18} strokeWidth={1.75} />
                <Linkedin size={18} strokeWidth={1.75} />
                <Mail size={18} strokeWidth={1.75} />
            </div>
        </div>
        </div>
      
    </div>

    </div>

    {/* products section */}
    <div className='mx-96 mt-5' >
    <Tabs defaultValue="account" className="">
  <TabsList>
    <TabsTrigger value="account">Owned Products</TabsTrigger>
    <TabsTrigger value="password">Joined Products</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

    </div>

   </div>
  )
}

export default page