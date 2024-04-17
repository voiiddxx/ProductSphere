"use server"

import { createProductParams } from "@/types";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();




export const createProductAction =  async({data}:createProductParams)=>{
    try {
        const products = await prisma.product.create({
            data:{
                name:data.name,
                detail:data.detail,
                category:data.category,
                productlogo:data.productlogo,
                productcolor:data.productcolor,
                endDate: data.startDate,
                startDate:data.endDate,
                url:data.url,
                visibility:data.visibility,
                ownerId:data.ownerId,
                skills:data.skills,
                productCode:data.productCode
            }
        });

        if(!products){
            console.log("Some error occured");
            return JSON.parse(JSON.stringify({message:"Some error occured"}));
        }
        console.log("Product Created" , products);
        return JSON.parse(JSON.stringify({data:products}));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


// members: {
//     connect: memberIds.map(memberid => ({id:memberid}))
// },