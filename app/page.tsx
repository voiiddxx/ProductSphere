
import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import { createProductAction } from "@/lib/actions/product.action";
import { currentUser, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default async function Home() {
  
  const user = await currentUser();

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    this is home page for now
   <Hero userid={user?.id} />
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
