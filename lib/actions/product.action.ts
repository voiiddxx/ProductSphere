"use server"

import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

const memberIds = [2]; // IDs of team members to be added


export const createProductAction =  async()=>{
    try {
        console.log("this is working");
        
        const products = await prisma.product.create({
            data:{
                name:"ProductSphere",
                detail:"this is new product",
                category:"Saas",
                productlogo:"thisislogourl",
                productcolor:"blue",
                endDate: new Date(),
                startDate:new Date(),
                url:"thisismyutl",
                visibility:"private",
                productdocumentone:"thisisdocumentone",
                productdocumenttwo:"thisisseconddecumet",
                ownerId:1,
                members: {
                    connect: memberIds.map(memberid => ({id:memberid}))
                },
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