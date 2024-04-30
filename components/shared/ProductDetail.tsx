"use client";

import {
  getProductWithProductIdAction,
  JoinProductAction,
} from "@/lib/actions/product.action";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowDown,  Sparkle, Star, Triangle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AddReviewAction } from "@/lib/actions/review.action";

type ProductDetailProps = {
  id: any;
};

const makers = [
  {
    name: "iamvoid",
    email: "thisismyemail@gmail.com",
  },
  {
    name: "iamvoid",
    email: "thisismyemail@gmail.com",
  },
  {
    name: "iamvoid",
    email: "thisismyemail@gmail.com",
  },
  {
    name: "iamvoid",
    email: "thisismyemail@gmail.com",
  },
  {
    name: "iamvoid",
    email: "thisismyemail@gmail.com",
  },
  {
    name: "iamvoid",
    email: "thisismyemail@gmail.com",
  },
];



const ProductDetail = ({ id }: ProductDetailProps) => {
  const [reviewRate, setreviewRate] = useState<number>(0);
  const [reviewComment, setreviewComment] = useState<string>("");
  const [AllReviews, setAllReviews] = useState<any>(null);

  const handleProductReview = async () => {
    const localuser = localStorage.getItem("x-auth-id");
    const userid = +localuser!;
    if (!userid) {
      alert("Unauthorized , please login first");
    } else {
      const res = await AddReviewAction({
        data: {
          comment: reviewComment,
          count: reviewRate,
          prodId: +id,
          userid: userid,
        },
      });
      if (res) {
        console.log(res.data);
        // setAllReviews([...AllReviews , res.data]);
        
      } else {
        console.log("Some Error occured");
      }
    }
  };
  const [productCode, setproductCode] = useState<any>(null);
  const [Product, setProduct] = useState<any>(null);

  useEffect(() => {
    const getProduct = async () => {
      const prodId = +id;
      const res = await getProductWithProductIdAction(prodId);
      if (res) {
        console.log("Product Detail: ", res);
        setAllReviews(res.reviews);
        setProduct(res);
      }
    };
    getProduct();
  }, []);

  const JoinTeamNow = async () => {
    const token = localStorage.getItem("x-auth-id");
    const userId = +token!;
    // alert(userId);
    const proId = +Product.productId;
    console.log("userId :" , userId , "product Id: " , proId);

    try {
      const res = await JoinProductAction({productCode:productCode , productId:proId , userdId:userId});
      if(res){
        console.log("Join Res: " , res);
      }else{
        console.log("Some error found");

      }
    } catch (error) {
      console.log(error);
    }
  };

  if(Product == null) return <div className="min-h-screen w-full flex justify-center items-center" >Loading , please wait</div>

  return (
    <div className="h-screen w-full md:px-16">
        
      {/* navbar */}
      <div className="h-15 w-full border-b"></div>

      {/* heading bar tab */}
      <div className=" w-full flex justify-between md:flex-row flex-col md:px-15 py-4 px-4 items-center border-b">
        {/* left div */}
        <div className="flex gap-6 items-center">
          {/* image div */}
          <div className="md:h-28 h-16 w-16 md:w-28  bg-indigo-700 rounded-md">
          {
              Product!= null && (
                <Image className="md:h-28 h-16 w-16 md:w-28  object-cover rounded-lg" src={Product.productlogo} height={1500} width={1500} alt="productlogo" />   
              )
            }
          </div>
          {/* text div */}
          <div>
            <h1 className="md:text-4xl text-lg font-bold text-zinc-900" style={{color:Product.productcolor}} >{Product.name}</h1>
            <p className="mt-1 text-zinc-600 md:text-sm text-xs">
              Software for managing the product
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-1">
                <Star className="text-transparent" fill="orange" size={15} />
                <Star className="text-transparent" fill="orange" size={15} />
                <Star className="text-transparent" fill="orange" size={15} />
                <Star className="text-transparent" fill="orange" size={15} />
                <Star className="text-transparent" fill="orange" size={15} />
              </div>
              <div className="flex gap-2">
                <p className="text-zinc-600 md:text-sm text-xs font-medium">15 Reviews</p>
                <p className="text-zinc-600 md:text-sm text-xs font-medium">
                  2000 Upvotes
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right div */}
        <div className="flex gap-2 mt-8 md:mt-0">
          <Button
            className="border rounded-full text-indigo-700 h-10 w-10" style={{color:Product.productcolor}}
            size={"icon"}
            variant={"link"}
          >
            <div>
              <Triangle size={15} />
              <p className="text-xs font-medium" >15</p>
            </div>
          </Button>
          <Button variant={"outline"} size={"lg"}>
            Visit Website
          </Button>
          <div className="">
        <Dialog>
          <DialogTrigger>
              <Button className="bg-indigo-700" style={{backgroundColor:Product.productcolor}}  size={"lg"}>
            Join Product
          </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-sm font-medium"  >Join Team of {Product.name}</DialogTitle>
              <DialogDescription>
                <p className="text-xs font-medium" >Join team of  and build in team</p>

                <div>
                  <input onChange={(e)=>{
                    setproductCode(e.target.value);
                  }} className="outline-none border-none mt-5 font-medium text-2xl text-zinc-900 placeholder:text-zinc-500" placeholder="Enter Secret Code" />
                </div>

                {/* buttons */}
                <div className="flex mt-10 justify-end gap-2" >
                  <Button variant={"outline"} >Cancel</Button>
                  <Button onClick={JoinTeamNow}  className="bg-indigo-700" style={{backgroundColor:Product.productcolor}}>Join Now</Button>

                </div>
                {/* product join dialogue box */}

              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
          {/* <Button className="bg-indigo-700" style={{backgroundColor:Product.productcolor}}  size={"lg"}>
            
          </Button> */}
        </div>
      </div>

      {/* details div */}
      <div className="mt-5 md:px-15 px-4 border-b py-4">
        {/* detail */}
        <div className="md:mr-96">
          <h1 className=" font-medium text-zinc-900 md:text-base text-sm">What is ProductSphere</h1>
          <p className="font-medium mt-3 tracking-wide leading-relaxed md:text-sm text-xs text-zinc-500 ">
            Producter is a product management software designed for
            customer-centric product teams 🚀 Over 2000+ product people use it
            to get feedback, manage tasks, create docs, and share a roadmap 🌍
            Make hard product decisions easy with Producter's all-in-one
            solution ✨
          </p>
          <h1 className="text-zinc-900 md:text-sm text-xs font-medium mt-10">
            ProductSphere Documents
          </h1>
          <div className=" flex gap-5 items-center mt-4">
            <div className="md:px-4 px-2 py-2 border rounded-md flex gap-2 items-center">
              <div className="h-10 w-10 border rounded-sm flex items-center justify-center">
                <ArrowDown size={15} className="text-indigo-700" style={{color:Product.productcolor}} />
              </div>
              <h1 className="font-medium text-zinc-900 md:text-sm text-[10px]">
                ProductSphere details
              </h1>
            </div>
            <div className="px-4 py-2 border rounded-md flex gap-2 items-center">
              <div className="h-10 w-10 border rounded-sm flex items-center justify-center">
                <ArrowDown size={15} className="text-indigo-700" style={{color:Product.productcolor}} />
              </div>
              <h1 className="font-medium text-zinc-900 md:text-sm text-[10px]">
                Team Members Data
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* details end */}
      <div className="mt-5 md:px-15 px-4 border-b py-4">
        <h1 className="font-medium text-zinc-950 md:text-xl text-sm">Techstack</h1>
        <p className="md:text-sm text-xs font-medium text-zinc-600">
          The techstack used in the product
        </p>

        <div className="md:mr-96 flex gap-5 flex-wrap mt-5">
          {
            Product.skills.map((curr:any)=>{
              return <div className="md:px-6 px-4 py-2 border rounded-full flex justify-center items-center gap-2">
              <Sparkle className="text-indigo-700" style={{color:Product.productcolor}} strokeWidth={1.5} size={18} />
              <p className="text-indigo-700 text-sm md:text-base font-medium" style={{color:Product.productcolor}} >{curr}</p>
            </div>
            })
          }
          
        </div>
      </div>

      {/* makers div */}
      <div className="mt-10  px-4 md:px-15">
        <h1 className="text-xl font-medium">The Makers Behind ProductSphere</h1>
        <p className="text-sm font-medium text-zinc-600 mt-2">
          List of developers who help to build this product
        </p>

        {/* mapping of the team mebers */}
        <div className="mr-96 border-b py-4">
          <div className="flex gap-8 flex-wrap mt-5">
            {Product.members.map((curr: any) => {
              return (
                <div
                  className="h-15 md:w-96 w-full pb-2 flex items-center gap-2
                   border-b"
                >
                  <div>
                  <div className="h-10 w-10 bg-slate-500 rounded-full">
                    <Image src={curr.avatar} className="h-10 w-10 rounded-full object-cover" height={900} width={900} alt="userslogo" />
                  </div>
                  </div>
                  <div>
                    <h1 className="font-medium text-indigo-700" style={{color:Product.productcolor}} >{curr.username}</h1>
                    <p className="text-sm font-medium text-zinc-600">
                      {curr.email}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* reviews component */}

      <div className=" py-5 border-b md:px-15 px-4">
        <h1 className="md:text-xl text-sm font-medium text-zinc-900">
          ProductSphere Reviews ({AllReviews.length}){" "}
        </h1>
        <p className="text-zinc-600 md:text-sm text-xs font-medium">
          Chcekout all the reviews given by users
        </p>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button size={"lg"} className="bg-indigo-700 mt-4 mb-8" style={{backgroundColor:Product.productcolor}}>
              Leave a review
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                <h1 className="text-xl font-bold">Give your review</h1>
              </AlertDialogTitle>
              <AlertDialogDescription>
                Give the review based on the expreince , design , creativity and
                on other factors for this product and
                <div className="mt-4">
                  <input
                    onChange={(e) => {
                      const data = e.target.value;
                      setreviewRate(+data);
                    }}
                    type="number"
                    className="outline-none border-none text-xl text-indigo-700 placeholder:text-zinc-500 font-semibold"
                    placeholder="Rate Between 1-5 Here"
                  />
                  <br />
                  <input
                    onChange={(e) => {
                      setreviewComment(e.target.value);
                    }}
                    className="outline-none h-16 border-none font-medium  mt-4 w-full text-sm placeholder:text-indigo-700"
                    placeholder="Write your review here"
                    type="text"
                  />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleProductReview}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* mapping of revies */}

        {AllReviews != null && AllReviews.length > 0 && (
          <div>
            {AllReviews.map((curr: any) => {
              return (
                <div className="py-2 border-b">
                  <div className="flex gap-4">
                    {/* image div */}
                    <div className="h-10 w-10 bg-indigo-700 rounded-full">
                      <Image className="h-10 w-10 rounded-full" src={curr.userwhoreviewed.avatar} height={900} width={900} alt="userimage" />
                    </div>
                    {/* text div */}
                    <div>
                      <h1 className="text-zinc-900 font-medium">
                        {curr.userwhoreviewed.username}
                      </h1>
                      <p className="text-zinc-600 font-medium text-sm">
                        {curr.userwhoreviewed.email}
                      </p>
                    </div>
                  </div>

                  {/* starts */}
                  <div className="flex mt-4">
                    {curr.count > 0 ? (
                      <Star
                        className="text-transparent"
                        fill="blue"
                        size={15}
                      />
                    ) : (
                      <Star
                        className="text-transparent"
                        fill="gray"
                        size={15}
                      />
                    )}
                    {curr.count > 1 ? (
                      <Star
                        className="text-transparent"
                        fill="blue"
                        size={15}
                      />
                    ) : (
                      <Star
                        className="text-transparent"
                        fill="gray"
                        size={15}
                      />
                    )}
                    {curr.count > 2 ? (
                      <Star
                        className="text-transparent"
                        fill="blue"
                        size={15}
                      />
                    ) : (
                      <Star
                        className="text-transparent"
                        fill="gray"
                        size={15}
                      />
                    )}
                    {curr.count > 3 ? (
                      <Star
                        className="text-transparent"
                        fill="blue"
                        size={15}
                      />
                    ) : (
                      <Star
                        className="text-transparent"
                        fill="gray"
                        size={15}
                      />
                    )}
                    {curr.count > 4 ? (
                      <Star
                        className="text-transparent"
                        fill="blue"
                        size={15}
                      />
                    ) : (
                      <Star
                        className="text-transparent"
                        fill="gray"
                        size={15}
                      />
                    )}

                    {/* {
                    starscount.map((curr:any)=>{
                      return <h1>nkcnccmd</h1>
                    })
                  } */}
                    {/* {starscount.map((curr: any) => {
                      return (
                       
                      );
                    })} */}
                  </div>

                  {/* review */}
                  <p className="md:text-lg text-sm text-zinc-700 mt-4 italic"
                  >
                    {curr.comment}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

// {Product.reviews.length > 1 && (
//   <div>
//
//   </div>
// )}
