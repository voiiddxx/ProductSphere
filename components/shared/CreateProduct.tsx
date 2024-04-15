"use client";
import {
  Check,
  CheckCheck,
  Github,
  Hash,
  ImagePlus,
  Link,
  Linkedin,
  Plus,
  Search,
  User,
  Volume1,
  Zap,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";


const formSchema = z.object({
  username: z.string().min(2).max(50),
  name: z.string().min(2).max(15),
  visibility: z.enum(["public", "private"]),
  detail: z.string().min(15).max(150),
});

const colortheme = [
  { color: "#534bff", colorid: 1 },
  { color: "#09a57f", colorid: 2 },
  { color: "#eb007a", colorid: 3 },
  { color: "#eb0d00", colorid: 4 },
  { color: "#000000", colorid: 5 },
  { color: "#a300d1", colorid: 6 },
  { color: "#478d00", colorid: 7 },
];

const productSkills = [
  { skill: "Typescript" },
  { skill: "Postgress" },
  { skill: "Flutter" },
  { skill: "Nextjs" },
];

const productteamMember = [
  { member: "Nikhil" },
  { member: "Rajjev" },
  { member: "Pankaj" },
  { member: "Govinda" },
];






const CreateProduct = () => {

  const handleProductlogoButton = useRef<any>(null);
  const handleProductDocumentone = useRef<any>(null);
  const handleProductDocumentSecond = useRef<any>(null);
  const [productdocumentone, setproductdocumentone] = useState<any>(null);
  const [productdocumentsecond, setproductdocumentsecond] = useState<any>(null);
  const [colorCode, setcolorCode] = useState<number>(2);
  const [ProductColor, setProductColor] = useState<string>("");
  const [productTechStack, setproductTechStack] = useState<[]>([]);
  const [productLogo, setproductLogo] = useState<string>("");
  const [ProductDocument, setProductDocument] = useState<[]>([]);
  const [members, setmembers] = useState<[]>([]);
  const [StartDate, setStartDate] = useState<Date>();
  const [endDate, setendDate] = useState<Date>();
  const [showLogo, setshowLogo] = useState<any>(null);


  const hanldeProcuctImage = (e:any)=>{
    setproductLogo(e.target.files);
    const file = e.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onloadend = ()=>{
            setshowLogo(reader.result);
        }
        reader.readAsDataURL(file);
    }

  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      detail: "",
      name: "",
      visibility: "private",
    },
  });
  

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (StartDate) {
      console.log(StartDate);
    } else {
      console.log("Please select date");
    }
    console.log(values);
  }

  const handleData = () => {
    console.log("this is start data", StartDate);
  };

  return (
    <div className="w-full min-h-screen ">
      <div className="h-12 w-full bg-zinc-100 flex pl-10 gap-2 items-center">
        <Hash size={15} strokeWidth={1.5} />
        <p className="text-sm font-medium">Create a new product</p>
      </div>
      <div className="w-full h-screen flex">
        {/* left div */}
        <div className="w-3/5 h-full  px-10 py-5">
          <p className="text-sm font-medium">Genreal Information</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* row 1 */}
              <div className="flex justify-between gap-5 mt-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="ProductSphere" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="visibility"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Product Visibility</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="private">Private</SelectItem>
                            <SelectItem value="public">Public</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* second row */}
              <div>
                <FormField
                  control={form.control}
                  name="detail"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Product Description</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-[150px]"
                          placeholder="Platform build to enhance the product building experience in team , using this product you can enhanced the experince of product building experince⚡"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* third row */}

              <div>
                <p className="text-sm font-medium">Select theme</p>
                <div className="flex gap-3 mt-2">
                  {colortheme.map((curr: any) => {
                    return (
                      <>
                        <div
                          className="h-8 w-8 rounded-full"
                          style={{ backgroundColor: curr.color }}
                          onClick={() => {
                            setcolorCode(curr.colorid);
                            setProductColor(curr.color);
                          }}
                        >
                          {colorCode == curr.colorid && (
                            <div className="h-full text-white w-full flex justify-center items-center rounded-full">
                              <CheckCheck size={18} strokeWidth={1.5} />
                            </div>
                          )}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              {/* fourth row */}

              <div className="w-full flex gap-4">
                <div className="w-full">
                  <p className="font-medium text-sm mb-2">Start date</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !StartDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {StartDate ? (
                          format(StartDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={StartDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="w-full">
                  <p className="font-medium text-sm mb-2">Product Deadline</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !endDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? (
                          format(endDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setendDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              {/* fifth row */}

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        {/* right div */}
        <div className=" w-2/5 h-screen bg-white border-l my-4 px-4 pt-2">
          {/* this is row 1 */}

          <div>
            <p className="text-sm font-medium">product image/document</p>

            <div className="flex justify-start  gap-4  mt-4">
              {/* product image */}
              <input onChange={hanldeProcuctImage}  type="file" hidden ref={handleProductlogoButton} />

              {
                showLogo && (
                  <div onClick={()=>{
                    handleProductlogoButton.current.click();
                  }}  className="h-60 w-60 border border-dashed rounded-lg flex justify-center items-center flex-col">
                    <Image className="h-full w-full object-cover rounded-md"  src={showLogo} height={1500} width={1500} alt="productimage" />
                    
                  </div>
                )
              }
              {
                showLogo == null && (
                  <div onClick={()=>{
                    handleProductlogoButton.current.click();
                  }}  className="h-60 w-60 border border-dashed rounded-lg flex justify-center items-center flex-col">
                    <ImagePlus
                      className="text-indigo-800 mb-2"
                      size={19}
                      strokeWidth={1.5}
                    />
                    <p className="text-xs font-medium text-center mx-4 text-zinc-700">
                      Upload your product logo or any relavent image
                    </p>
                  </div>
                )
              }
              {/* product other documents */}


              {/* document one input field for selecting image */}
              <input onChange={(e)=>{
                setproductdocumentone(e.target.files);
              }} type="file" hidden ref={handleProductDocumentone} />
              {/* second document input field for selecting imahe */}
              <input onChange={(e)=>{
                setproductdocumentsecond(e.target.files);
              }} type="file" hidden ref={handleProductDocumentSecond} />
              <div className=" flex flex-col gap-2">
                <div onClick={()=>{
                  handleProductDocumentone.current.click();
                }} className="h-28 w-72 rounded-lg flex justify-center flex-col items-center border">
                  <Link
                    className="text-indigo-800 mb-2"
                    size={19}
                    strokeWidth={1.5}
                  />
                  {
                    productdocumentone!= null ? <p className="text-xs font-medium text-center mx-4 text-zinc-700">
                    Selected
                  </p> : <p className="text-xs font-medium text-center mx-4 text-zinc-700">
                    Attach any product relavent details file
                  </p>
                  }
                  
                </div>
                <div onClick={()=>{
                  handleProductDocumentSecond.current.click();
                }} className="h-28 w-72 rounded-lg flex justify-center flex-col items-center border">
                  <Link
                    className="text-indigo-800 mb-2"
                    size={19}
                    strokeWidth={1.5}
                  />
                   {
                    productdocumentsecond!= null ? <p className="text-xs font-medium text-center mx-4 text-zinc-700">
                    Selected
                  </p> : <p className="text-xs font-medium text-center mx-4 text-zinc-700">
                    Attach any product relavent details file
                  </p>
                  }
                </div>
              </div>
            </div>
          </div>
          {/* row2 */}
          <div className="mt-5">
            <p className="text-sm font-medium">Product TechStack</p>
            {/* product add array */}
            <div className="w-full flex gap-4 mt-4">
              {productSkills.map((curr: any) => {
                return (
                  <div className="flex bg-zinc-100 text-indigo-700 px-2 py-2 rounded-sm gap-1">
                    <Zap strokeWidth={1.5} size={17} />
                    <p className="text-xs font-medium">{curr.skill}</p>
                  </div>
                );
              })}
              <div className="w-auto border flex items-center justify-center px-2 py-1 rounded-md cursor-pointer">
                <Plus size={18} strokeWidth={1.5} />
                <p className="text-xs font-medium">Add TechStack</p>
              </div>
            </div>
          </div>
          {/* row 3 */}
          <div className="mt-5">
            <p className="text-sm font-medium">Product Team members</p>
            <div className=" flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-3">
                <div className="h-10 w-12 bg-zinc-100 rounded-md flex items-center justify-center">
                  <Search
                    className="text-indigo-700"
                    strokeWidth={1.5}
                    size={18}
                  />
                </div>
                <Input placeholder="search members" />
              </div>
              {productteamMember.map((curr: any) => {
                return (
                  <div className="flex justify-between  gap-2 border px-2 py-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full border flex justify-center items-center">
                        <User size={17} strokeWidth={1.5} />
                      </div>
                      <p className="text-sm font-medium">{curr.member}</p>
                    </div>
                    <div className="flex gap-4 items-center text-zinc-700">
                      <Github size={16} strokeWidth={1.5} />
                      <Linkedin size={16} strokeWidth={1.5} />
                      <div className="px-2 py-2 bg-indigo-700 rounded-md">
                        <Plus
                          className="text-white"
                          size={17}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* row 4 */}
          <div className="mt-5">
            <p className="text-sm font-medium">Product Code</p>
            <Input className="mt-2" placeholder="Enter Your Code here" />
            <div className="flex text-zinc-600 mt-2">
              <Volume1 strokeWidth={1.5} size={17} />
              <p className="text-xs font-normal">
                You can share this team code to other members so that they can
                join the product and can contribute
              </p>
            </div>
          </div>

          {/* row 5 */}
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
