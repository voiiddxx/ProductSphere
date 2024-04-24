"use client";

import { createProductAction } from "@/lib/actions/product.action";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { getUserUsingClerkid } from "@/lib/actions/user.action";

type heroProps = {
  userid: string | undefined;
};

const Hero = ({ userid }: heroProps) => {
  const handleSubmit = async () => {
    // const res = await createProductAction();
    // console.log("Res: ", res);
  };
  useEffect(() => {
    const getUserData = async () => {
      console.log("this is the value of userid: " , userid);
      try {
        
      const res = await getUserUsingClerkid(userid!);
      console.log("Res: " , res , "resid val is: " , res.id);
      const userval = localStorage.setItem("x-auth-id", res.id);
      } catch (error) {
        console.log(error);
        
      }
    };
    getUserData();
  }, []);
  return (
    <div>
      <Button onClick={handleSubmit}>Testing the working</Button>
      <p> this is userid:{userid}</p>
    </div>
  );
};

export default Hero;
