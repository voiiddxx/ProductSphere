import {
  Box,
  BoxesIcon,
  CodeXml,
  Dices,
  Dot,
  Hash,
  PackagePlus,
  Pyramid,
  Rabbit,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import Link from "next/link";

const OtherFold = () => {
  const userCases = [
    {
      icon: <Pyramid size={22} color="white" strokeWidth={1.5} />,
      heading: "Explore Like ProductHunt",
      desc: "The platform allows users to discover launched products and those in development, opportunities for exploration.",
    },
    {
      icon: <Rabbit size={22} color="white" strokeWidth={1.5} />,
      heading: "Be a Contributer",
      desc: "Easily contribute to any product by joining with a referral code, simplifying participation",
    },
    {
      icon: <Box size={22} color="white" strokeWidth={1.5} />,
      heading: "Build Product",
      desc: "Boost productivity and streamline product management by building with your team,  easy product management.",
    },
    {
      icon: <Zap size={22} color="white" strokeWidth={1.5} />,
      heading: "Manage Product",
      desc: "You can manage the product with easy , can assign tasks , add team members to your product",
    },
    {
      icon: <Dices size={22} color="white" strokeWidth={1.5} />,
      heading: "Assign Task And team",
      desc: "You can easily assign team mebers for a product and can assign the, tasks respectively , and can manage with ease",
    },
    {
      icon: <Hash size={22} color="white" strokeWidth={1.5} />,
      heading: "Themed product",
      desc: "While Assigning the product you can assign a theme to your product , it will give a better user experince",
    },
    {
      icon: <CodeXml size={22} color="white" strokeWidth={1.5} />,
      heading: "Developers Hunting",
      desc: "You can easily hunt for developers who are working on any saas product , and can connect with them.",
    },
    {
      icon: <TrendingUp size={22} color="white" strokeWidth={1.5} />,
      heading: "Go for review",
      desc: "You can review any products can upvote the products you like and can explore feedbacks of you created products",
    },
  ];
  return (
    <div className="min-h-screen w-full flex flex-col py-10 items-center">
      {/* upper div */}
      <div className=" flex flex-col items-center mt-12">
        <h1 className="text-3xl font-medium text-zinc-900">
          Real-world use-cases
        </h1>
        <p className="text-zinc-500 font-medium text-center mt-2 text-xs md:text-base">
          Take a look at some of the ways you can use Afforai to your advantage,{" "}
          <br /> <span className="hidden md:inline-block" > based on some real feedback from our users.</span>
        </p>

        {/* mapping the data and the icons */}
        <div className=" flex gap-8 flex-wrap items-center justify-center px-10 mt-16 border-b">
          {userCases.map((curr: any) => {
            return (
              <div className="h-52 w-80  px-3 py-3">
                <div className="h-12 w-12 bg-gradient-to-b from-indigo-700 to-indigo-400 rounded-md flex items-center justify-center">
                  {curr.icon}
                </div>
                <div>
                  <h1 className="text-lg font-medium mt-3">{curr.heading}</h1>
                  <p className="text-sm font-medium text-zinc-500 mt-2">
                    {curr.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* upper div end */}

      {/* upper second div */}
      <div className="w-full flex flex-col items-center mt-20">
        <h1 className="text-2xl font-medium text-zinc-900">
          Manage Products, Easily
        </h1>
        <p className="text-sm font-medium text-zinc-500 mt-3">
          Key feature of productsphere
        </p>

             {/* for mobile use case */}
             <div className="md:hidden" >
             <div className="h-[440px] mx-5 mt-10 bg-zinc-100 rounded-lg flex flex-col justify-between border ">
              <div className="ml-10 mt-5">
                <div className="flex items-center gap-1 mt-4">
                  <Rabbit size={18} color="black" />
                  <p className="text-sm font-medium text-zinc-900">
                    Hunt products anytime
                  </p>
                </div>
                <h1 className="text-lg font-medium mt-4 pr-10">
                  Share your chatbots with your team & collaboratively simplify
                  research.
                </h1>
              </div>
              <Image
                src={`/2.png`}
                className="h-[300px] w-full object-cover rounded-b-lg"
                height={1500}
                width={1500}
                alt="image"
              />
            </div>
             <div className="h-[440px] mx-5 mt-10 bg-zinc-100 rounded-lg flex flex-col justify-between border ">
              <div className="ml-10 mt-5">
                <div className="flex items-center gap-1 mt-4">
                  <Rabbit size={18} color="black" />
                  <p className="text-sm font-medium text-zinc-900">
                    Hunt products anytime
                  </p>
                </div>
                <h1 className="text-lg font-medium mt-4 pr-10">
                  Share your chatbots with your team & collaboratively simplify
                  research.
                </h1>
              </div>
              <Image
                src={`/x.png`}
                className="h-[300px] w-full object-cover rounded-b-lg"
                height={1500}
                width={1500}
                alt="image"
              />
            </div>
             </div>
            {/* for mobile use case end */}
            

        {/* image div */}
        <div className="md:flex h-[900px] w-full mt-8 items-center justify-center gap-2 hidden ">
          {/* left div */}
          <div className="flex flex-col w-1/2 gap-2">
            <div className="h-[440px]  ml-20 bg-zinc-100 rounded-lg flex flex-col justify-between border ">
              <div className="ml-10 mt-5">
                <div className="flex items-center gap-1 mt-4">
                  <div className="h-8 w-8 bg-gradient-to-b from-indigo-700 to-indigo-400 flex items-center justify-center rounded-full" >
                  <Rabbit size={18} color="white" />
                  </div>
                  <p className="text-sm font-medium text-indigo-700">
                    Hunt products anytime
                  </p>
                </div>
                <h1 className="text-lg font-medium mt-4 pr-10">
                ProductSphere offers a curated selection, akin to ProductHunt, facilitating discovery and exploration.
                </h1>
              </div>
              <Image
                src={`/product.png`}
                className="h-[280px] w-full object-cover rounded-b-lg"
                height={1500}
                width={1500}
                alt="image"
              />
            </div>
            <div className="h-[450px]  ml-20 bg-zinc-100 rounded-lg flex flex-col justify-between border ">
              <div className="ml-10 mt-5">
                <div className="flex items-center gap-1 mt-4">
                <div className="h-8 w-8 bg-gradient-to-b from-indigo-700 to-indigo-400 flex items-center justify-center rounded-full" >
                  <CodeXml size={18} color="white" />
                  </div>
                  <p className="text-sm text-indigo-700 font-medium">
                    Saas Developers Hub
                  </p>
                </div>
                <h1 className="text-lg font-medium mt-4 pr-10">
                Explore a diverse community of SaaS builders, unleashing innovation and collaboration in software development.
                </h1>
              </div>
              <Image
                src={`/x.png`}
                className="h-[300px] w-full object-cover rounded-b-lg"
                height={1500}
                width={1500}
                alt="image"
              />
            </div>
          </div>
          {/* right div */}
          <div className="flex w-1/2 h-[900px] bg-zinc-100 mr-20 border rounded-lg flex-col justify-between">
            <div className="h-[150px] w-full px-4 py-4">
              <div className="flex gap-1 items-center">
              <div className="h-8 w-8 bg-gradient-to-b from-indigo-700 to-indigo-400 flex items-center justify-center rounded-full" >
                  <PackagePlus size={18} color="white" />
                  </div>
                <p className="text-sm font-medium text-indigo-700">
                  Build Product with team
                </p>
              </div>
              <h1 className="text-lg font-medium mt-4 pr-10">
              Collaborate, develop, manage tasks, collect feedback, analyze data—streamlined processes for effective product lifecycle management.
              </h1>
            </div>
            <div className="h-[750px] w-full bg-yellow-200">
              <Image
                className="h-full w-full object-cover"
                src={`/form.png`}
                height={1500}
                width={1500}
                alt="image"
              />
            </div>
          </div>
          <div></div>
        </div>
        {/* image div end */}
      </div>

      {/* upper second div end */}

      {/* upper third div start */}
      <div className="flex flex-col justify-center items-center w-full mt-32">
        <h1 className="text-2xl font-medium text-zinc-900">
          An Alternate of Product Hunt
        </h1>
        <p className="text-sm font-medium text-zinc-500 mt-3">
          Hunt the product whenever you want
        </p>

        {/* card */}
        <div className="pb-4 md:w-[80rem] w-[25rem] mt-8 rounded-lg  mx-20 bg-zinc-100 border">
          <div className="w-full md:h-[300px] h-[200px] ">
            <Image
              className="h-full w-full object-contain"
              src={`/product.png`}
              height={1500}
              width={1500}
              alt="producthunt"
            />
          </div>
          <div className="flex md:px-10 px-4 gap-1 items-center">
            <BoxesIcon size={15} className="text-indigo-700" strokeWidth={2} />
            <p className="font-medium text-indigo-700 md:text-xl text-sm">Hunt Products</p>
          </div>
          <div className="ml-4 mr-2 md:ml-10">
            <p className="md:text-sm text-[10px] font-medium text-gray-600 mt-4">
              Productsphere helps you to find the product which are in development period so you can contrubute <br /> into them , as well you can hunt for the developers for your products too
            </p>
          </div>
        </div>

        <div className="h-48 w-full"></div>
      </div>
      {/* upper third div end */}

      {/* feedback sectionn */}
      <div className="w-full flex items-center justify-center flex-col">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-medium text-zinc-900">FAQs</h1>
          <p className="text-sm font-medium text-gray-600 mt-4">
            Get answers of your queries
          </p>
        </div>
        <div className="mt-10">
          <Accordion className="md:w-[80rem] w-[22rem]"  type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I join products without code?</AccordionTrigger>
              <AccordionContent>
                No, you can't join products without code , only the team leader can add you without product code
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>any pricing?</AccordionTrigger>
              <AccordionContent>
                NO, This platform is absolutely free.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What is prodAI</AccordionTrigger>
              <AccordionContent>
                ProdAI is an assistant which helps you to manage product easlily , prodAI will be comming soon.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-full mt-28 h-[400px] bg-gradient-to-b from-violet-700 to-indigo-700 flex items-center justify-between flex-col" >
           <div className="flex flex-col justify-center items-center mt-16 " >
           <h1 className="md:text-4xl text-xl text-center font-medium text-white" >Ready to level up you product management skills</h1>
            <h1 className="md:text-4xl text-xl font-medium text-white mt-1" >Upskill yourself with productsphere</h1>
          <div className="flex gap-2" >
         <Link href={`/dashboard`} >
         <Button className="bg-white text-violet-700 mt-5 hidden md:inline-block" size={"lg"} >Upskill With productsphere</Button>
         </Link>
         <Link href={`/dashboard`} >
         <Button className=" bg-transparent text-white mt-5" variant={"outline"} size={"lg"} >Register Now</Button>
         </Link>
           </div>

           <div>
           
           </div>
          </div>
          <div>
            <p className="text-white mb-4 text-sm font-light" >Productsphere - Product by voiiddxx </p>
           </div>
      </div>
      </div>


      {/* footer section */}
      
    </div>
  );
};

export default OtherFold;
