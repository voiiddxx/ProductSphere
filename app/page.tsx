import Hero from "@/components/shared/Hero";
import NavBar from "@/components/shared/NavBar";
import OtherFold from "@/components/shared/OtherFold";
import { Button } from "@/components/ui/button";
import { currentUser, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default async function Home() {
  
  const user = await currentUser();

  
  return (
    <>
    <main className="flex h-screen w-full flex-col items-center bg-gradient-to-b from-slate-200 to-white">
      <NavBar/>
    <Hero userid={user?.id}/>
    <OtherFold/>
    {/* <div className="flex gap-5" > */}
      {/* <Link href={`/dashboard`} ><Button>Login Page</Button></Link> */}
      {/* <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn> */}
      {/* <Link href={`/dashboard`} ><Button>Register Page</Button></Link> */}
  {/* </div> */}
    </main>
    </>
  );
}
