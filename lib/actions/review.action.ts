"use server"

import { addReviewParams } from "@/types";
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();



// server action for adding the review 

export const addreview = async ({data}:addReviewParams)=>{
    try {
        const res = await prisma.reviews.create({
            data:{
                count:data.count,
                comment:data.comment,
                prodid:data.prodId,
                userid:data.userid,
            }
        });
        if(!res){
            return JSON.parse(JSON.stringify({message:"Some error occuered" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:res , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}


