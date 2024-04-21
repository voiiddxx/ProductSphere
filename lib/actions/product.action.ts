"use server"

import { createProductParams, JoinProductParams } from "@/types";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();




export const createProductAction = async ({ data }: createProductParams) => {
    try {
        const products = await prisma.product.create({
            data: {
                name: data.name,
                detail: data.detail,
                category: data.category,
                productlogo: data.productlogo,
                productcolor: data.productcolor,
                endDate: data.startDate,
                startDate: data.endDate,
                url: data.url,
                visibility: data.visibility,
                ownerId: data.ownerId,
                skills: data.skills,
                productCode: data.productCode
            }
        });

        if (!products) {
            console.log("Some error occured");
            return JSON.parse(JSON.stringify({ message: "Some error occured" }));
        }
        console.log("Product Created", products);
        return JSON.parse(JSON.stringify({ data: products }));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);

    }
}

// members: {
//     connect: memberIds.map(memberid => ({id:memberid}))
// },



// server action for fetching all the product present in db

export const getAllProductAction = async () => {
    try {
        const productResponse = await prisma.product.findMany({});
        if (!productResponse) {
            return JSON.parse(JSON.stringify({ message: "No Product Found" }));
        }
        console.log("Products Found: ", productResponse);
        return JSON.parse(JSON.stringify(productResponse));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);

    }
}


// server action for getting the product created by the user

export const getProductAsperuseridAction = async (ownerIdofproduct: number) => {
    console.log("This is thr value of the useid by which we are getting the list of product :" , ownerIdofproduct);
    
    try {
        const ProductRes = await prisma.product.findMany({
            where: {
                ownerId: ownerIdofproduct
            }
        });

        if (!ProductRes) {
            return JSON.parse(JSON.stringify({ message: "User never crerated a product" }));
        }
        return JSON.parse(JSON.stringify(ProductRes));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);

    }
}


// server action for getting the product as per the product id 


export const getProductWithProductIdAction = async (productId: number) => {
    try {
        const productRes = await prisma.product.findFirst({
            where: {
                productId: productId
            },
            include:{
                owner:true
            }
        });

        if (!productRes) {
            return JSON.parse(JSON.stringify({ message: "User never crerated a product" }));
        }
        return JSON.parse(JSON.stringify(productRes));

    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}





// server action for joining the product using the product code
export const JoinProductAction = async ({productId , userdId  , productCode}:JoinProductParams)=>{
    try {
        // fetching the product using product code
            const product = await prisma.product.findUnique({
                where:{
                    productId:2,
                    productCode:"21540548121"
                },
                include:{
                    members:true
                }
            });

            if(!product){
                return JSON.parse(JSON.stringify({message:"Invalid Code" , status:400}));
            }


            // checking if user is already part of the product
            const IsUserAlreadyMember = product.members.some(members => members.id === 1);

            if(IsUserAlreadyMember){
                return JSON.parse(JSON.stringify({message:"User is already member of this product" , status:401}));
            }

            // adding user as a member of the product

            const updatedProduct = await prisma.product.update({
                where:{
                    productId:2,
                    productCode:"21540548121",
                },
                data:{
                    members:{
                        connect:{id: 1}
                    }
                },
                include:{
                    members:true
                }
            });

            if(!updatedProduct){
                return JSON.parse(JSON.stringify({message:"Some error found" , status:402}));
            }

            return JSON.parse(JSON.stringify({data:updatedProduct , status:200}));



    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}