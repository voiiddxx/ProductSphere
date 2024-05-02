"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Loader, MousePointerClickIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { updateUserProfile } from '@/lib/actions/user.action'
import { toast, Toaster } from 'sonner'
  

const UpdateUserform = () => {
    const [gitub, setgitub] = useState<any>(null)
  const [linkedin, setlinkedin] = useState<any>(null)
  const [bio, setbio] = useState<any>(null)
  const [about, setabout] = useState<any>(null)
  const [skills, setskills] = useState<any>([])
  const [skillstobeadded, setskillstobeadded] = useState<any>(null);
  const [isLoading, setisLoading] = useState<boolean>(false);


  const handleSkill = ()=>{
    setskills([...skills , skillstobeadded]);
  }

  
  const handleUpdateSubmit = async ()=>{
        setisLoading(true);
        const userid = localStorage.getItem("x-auth-id");
        const res = await updateUserProfile({userid:+userid! , data:{about:about , bio:bio , github:gitub , linkedin:linkedin , skills:skills}});
        if(res.status==200){
            toast.success("Profile updated")
            setisLoading(false);
            console.log(res);
            
        }else{
            toast.error("Some error occured");
            setisLoading(false);
            console.log(res);
            
            console.log("Some error occured");
            
        }
  }
  return (
    <Dialog>
        <Toaster position='top-right' richColors />
    <DialogTrigger>
      {" "}
      <Button variant={"outline"}>Edit profile</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <div className="flex items-center" >
              <MousePointerClickIcon size={20}  />
              <p className="text-sm font-semibold text-zinc-900" >Edit your profile</p>
          </div>
        </DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete
          your account and remove your data from our servers.
          <div className="flex gap-4 mt-4" >
            <Input onChange={(e)=>{
              setbio(e.target.value)
            }} placeholder="Please write your 20-50 words bio" />
            <Input onChange={(e)=>{
                setgitub(e.target.value)
            }} placeholder="your github url" />
          </div>
          <div className="flex gap-4 mt-4" >
            <Input onChange={(e)=>{
                setlinkedin(e.target.value)
            }} placeholder="Your linedin url" />
            {/* <Input placeholder="your github url" /> */}
          </div>
        <div className="flex gap-2 mt-4" >
            <Input onChange={(e)=>{
              setskillstobeadded(e.target.value)
            }} placeholder="write your skill" />
            <Button onClick={handleSkill} className="border bg-zinc-800" >Add Skill</Button>
        </div>
          <div className="flex gap-2 mt-2" >
            {
              skills && (
                <div className='flex gap-2 mt-4' >
                  {
                    skills.map((curr:any)=>{
                      return <div className="bg-gray-100 px-2 py-1 rounded-full flex items-center justify-center" >
                        <p className="font-medium text-sm text-indigo-800" >{curr}</p>
                      </div>
                    })
                  }
                </div>
              )
            }
          </div>


          <div>
            <Textarea onChange={(e)=>{
                setabout(e.target.value);
            }} className='mt-4' placeholder='write about you here' />
          </div>

          <div className='mt-8 w-full flex justify-between ' >
            <div></div>
            <div>
               {
                isLoading == true ?  <Button  className='bg-indigo-700 flex gap-2' disabled >
                    <Loader className='text-zinc-300 animate-spin' />
                    <p className='text-zinc-300 font-medium' >Please wait...</p>
                </Button> :  <Button onClick={handleUpdateSubmit} className='bg-indigo-700' >Update now</Button>
               }
            </div>
          </div>
          

        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default UpdateUserform