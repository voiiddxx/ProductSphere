"use client"
import { getProductAsperuseridAction } from '@/lib/actions/product.action'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

    type dashBoardHero = {

    }

const DashboardHome = ({}: dashBoardHero) => {
    const [Products, setProducts] = useState<any>(null);

    useEffect(()=>{
        const Localuser = localStorage.getItem("x-auth-id");
        const userId = +Localuser!;

        const getUserProduct = async ()=>{
            const res = await getProductAsperuseridAction(userId!);
            console.log("value of res: " , res);
            
            if(!res){
                setProducts(null);
            }
            setProducts(res);
        }

        getUserProduct();
    } , [])
  return (
    <div className='w-full' >
        {
            !Products && (
                <div className='h-40 w-full flex justify-center items-center flex-col border-dashed border mt-10 ' >
                <p className='text-sm font-medium' >No Projects </p>
                <p className='text-xs font-medium text-zinc-500' >Get Start by creating your first project</p>

                   <Link href={`/dashboard/products/create`} >
                   <div className=' flex gap-1 mt-4 border px-2 py-2 rounded-md bg-indigo-700 text-white items-center' >
                        <Plus size={15} strokeWidth={1.5} />
                        <p className='text-xs font-medium' >New product</p>
                    </div></Link>

            </div>
            )
        }

        {
            Products!=null && (
                <div className='flex gap-4 mt-10' >
                {
                    Products.map((curr:any)=>{
                        return <div className='h-[350px] w-[350px] bg-slate-100 rounded-lg' ></div>
                    })
                }
            </div>
            )
        }
    
    </div>
  )
}

export default DashboardHome
