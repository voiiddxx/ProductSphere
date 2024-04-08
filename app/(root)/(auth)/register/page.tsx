"use client"

import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const page = () => {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }





  return (
    <div className='min-h-screen w-full bg-white' >

        {/* overlayed div with some paddings */}
      <div className='mx-5 my-5 rounded-md min-h-screen bg-transparent flex justify-center items-center' >
        {/* dividing div into left and right div */}
        
        {/* left div */}
        <div className=' min-h-screen w-1/2 bg-white' >
            {/* upper div for logo */}
            <div className='h-20 w-full ' >
                <Image className='h-24 w-auto' src={`/Mainlogo.svg`} height={900} width={900} alt='productspherelogo' />
            </div>

            {/* upper heading and social button parts div */}
            <div className='px-20 mt-20' >
                <h1 className='text-2xl font-medium' >Get Start Now</h1>
                <p className='text-sm font-medium text-stone-800' >Enter your credential to create your account</p>

                {/* socials icons div */}
                <div className='flex gap-4 mt-10' >
                    <Button variant={'outline'} className='flex items-center w-full justify-center gap-2'  >
                        <Github size={17} strokeWidth={1.75} /> <p className='text-sm text-slate-800' >Register with github</p>
                    </Button>
                    <Button variant={'outline'} className='flex items-center w-full justify-center gap-2'  >
                        <Linkedin size={17} strokeWidth={1.75} /> <p className='text-sm text-slate-800' >Register with Linkedin</p>
                    </Button>
                   
                </div>

                <div className='mt-8 flex justify-center items-center' >
                    <hr className='h-1 w-full mr-10' />
                    <p>or</p>
                    <hr className='h-1 w-full ml-10' />
                </div>


                {/* components for the form */}
                <div>
                <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
                </div>
            </div>


        </div>
        {/* right div */}
        <div className='min-h-screen w-1/2 bg-blue-700 rounded-md' ></div>

      </div>
      
    </div>
  )
}

export default page
