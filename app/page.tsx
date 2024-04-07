import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    this is home page for now
    <div className="flex gap-5" >
      <Link href={`/login`} ><Button>Login Page</Button></Link>
      <Link href={`/register`} ><Button>Register Page</Button></Link>
  </div>
    </main>
  );
}
