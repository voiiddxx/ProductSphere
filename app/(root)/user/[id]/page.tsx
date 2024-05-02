import DashBoardNav from '@/components/shared/DashBoardNav'
import { getUserUsinguserId } from '@/lib/actions/user.action'
import { Dot, Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'


const page = async({
    params:{ id },
  } : {params:{
    id : string
  }}) => {


    const user = await getUserUsinguserId(id);
    const res = [1,2,65,4,5];
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
            <h1 className='text-zinc-800 text-4xl font-semibold mt-2' >{user.username}</h1>
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
  <TabsContent value="account">
    {
        res.length > 0 && (
            <div className='flex gap-8 flex-wrap ' >
                {
                    res.map((curr:any)=>{
                        return  <Link href={`/user/${curr.id}`} >
                        <div className="h-[350px] w-[350px] bg-white rounded-md">
                          {/* upper div */}
                          <div className="h-[150px] w-full rounded-t-md bg-gradient-to-tr from-zinc-900 to-zinc-700 relative">
                            <div className="absolute h-[90px] w-[90px] bg-white rounded-full bottom-[-30px]  left-5 border-solid border-[10px] border-white flex items-center justify-center">
                              {/* <Image
                                src={curr.avatar}
                                className="h-[70px] w-[70px] rounded-full object-cover"
                                height={1500}
                                width={1500}
                                alt="userimage"
                              /> */}
                            </div>
                          </div>
                          
                          {/* bottom div */}
                          <div className="mt-10 px-6" >
                             <div className='flex gap-2' >
                             <h1 className="text-lg font-semibold text-zinc-950" >Productsphere</h1>
                             <div className='bg-yellow-100 flex justify-center text-yellow-700 items-center rounded-full px-2 py-1' >
                                <Dot absoluteStrokeWidth strokeWidth={5} size={20} />
                                <p className='text-xs font-medium' >Under development</p>
                             </div>
                             </div>
                              <p className="mt-2 text-sm font-medium text-zinc-600" >Platform to improve the product management practise</p>
                              <p className="mt-10 text-indigo-700 text-xs" >view more</p>
                          </div>
                        </div>
                        </Link>
                    })
                }
            </div>
        )
    }
  </TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

    </div>

   </div>
  )
}

export default page