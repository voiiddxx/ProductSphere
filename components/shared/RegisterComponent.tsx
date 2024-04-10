"use client"
import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
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
  email: z.string().min(2).max(50),
  password: z.string().min(6).max(10),
})
const RegisterComponent = () => {


    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email:"",
      password:""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div className='h-screen w-full bg-white' >

    {/* overlayed div with some paddings */}
  <div className='mx-5 py-2 rounded-md min-h-screen bg-transparent flex justify-center items-center' >
    {/* dividing div into left and right div */}
    
    {/* left div */}
    <div className=' min-h-screen w-1/2 bg-white' >
        {/* upper div for logo */}
        <div className='h-20 w-full ' >
            <Image className='h-16 w-auto' src={`/Mainlogo.svg`} height={900} width={900} alt='productspherelogo' />
        </div>

        {/* upper heading and social button parts div */}
        <div className='px-20 mt-10' >
            <h1 className='text-2xl font-medium' >Get Start Now</h1>
            <p className='text-sm font-medium text-stone-600' >Enter your credential to create your account</p>

            {/* socials icons div */}
            <div className='flex gap-4 mt-10' >
                <Button variant={'outline'} className='flex items-center rounded-xl text-indigo-700 w-full justify-center gap-2'  >
                    <Github size={17} strokeWidth={1.75} /> <p className='text-sm text-slate-800' >Register with github</p>
                </Button>
                <Button variant={'outline'} className='flex items-center text-orange-700 w-full justify-center gap-2 rounded-xl'  >
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

              {/* using react hook form with zod validation for registering the users */}
            <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">


    {/* username */}
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* email */}
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-sm font-medium ' >Email address</FormLabel>
          <FormControl>
            <Input placeholder="johndev@gmail.com" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />


    {/* password */}
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input placeholder="********" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <Button className='w-full rounded-xl bg-indigo-700'  type="submit">Submit</Button>
    <p className='text-sm font-medium' >Have an account? <span className='text-indigo-700' >Sign in</span> </p>
  </form>
</Form>

<div className=' w-full flex justify-center items-center mt-16' >
  <p className=' font-medium text-[12px] text-zinc-700' >2023 ProductSphere, All right reserved</p>

</div>
            </div>
        </div>


    </div>
    {/* right div */}
    <div className='min-h-screen w-1/2 bg-blue-700 rounded-md flex items-center  pl-8 flex-col' >
    <div>
    <p className='text-2xl font-medium  mt-10 text-white ' >Inovate and Create with your cool teams</p>
    <p className='text-sm font-light text-zinc-200 text-start' >Create your account and build cool stuff</p>
    </div>
      <Image className='h-[600px] w-auto mt-10' src={`/dashboard.svg`} height={900} width={900} alt='dashboard' />
    </div>

  </div>
  
</div>
  )
}

export default RegisterComponent
