"use client"
import { Button } from "@/components/ui/button";
import { createProductAction } from "@/lib/actions/product.action";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default function Home() {

  const handleSubmit = async ()=>{
    const res = await createProductAction();
    console.log("Res: " , res);
    
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    this is home page for now
    <Button onClick={handleSubmit} >Testing the working</Button>
    <div className="flex gap-5" >
      <Link href={`/dashboard`} ><Button>Login Page</Button></Link>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <Link href={`/dashboard`} ><Button>Register Page</Button></Link>
  </div>
    </main>
  );
}
