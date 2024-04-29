"use server"

import { AddteamMembersParams, createProductParams, GetUserJoindedProductParams, JoinProductParams, updateProductStatusParams } from "@/types";
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
        return JSON.parse(JSON.stringify({ data: products , status:200 }));
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
        const productResponse = await prisma.product.findMany({
            include:{
                members:true,
                owner:true,
                reviews:true,
                Upvote:true,
            }
        });
        if (!productResponse) {
            return JSON.parse(JSON.stringify({ message: "No Product Found"  , status:400}));
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
                owner:true,
                members:true,
                reviews:{
                    include:{
                        productrelated:true,
                        userwhoreviewed:true,
                    }
                },
                Upvote:true,
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
                    productId:productId,
                    productCode:productCode
                },
                include:{
                    members:true
                }
            });

            if(!product){
                return JSON.parse(JSON.stringify({message:"Invalid Code" , status:400}));
            }


            // checking if user is already part of the product
            const IsUserAlreadyMember = product.members.some(members => members.id === userdId);

            if(IsUserAlreadyMember){
                return JSON.parse(JSON.stringify({message:"User is already member of this product" , status:401}));
            }

            // adding user as a member of the product

            const updatedProduct = await prisma.product.update({
                where:{
                    productId:productId,
                    productCode:productCode,
                },
                data:{
                    members:{
                        connect:{id: userdId}
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




//  server action for adding the team mebers 

export const AddteamMembersActions = async({prodId , teamMember}: AddteamMembersParams)=>{
    try {
       const res = await prisma.product.update({
        where:{
            productId:prodId,
        },
        data:{
            members:{
                connect:teamMember.map(curr => ({id:curr}))
            }
        }
       });
       if(!res){
        return JSON.parse(JSON.stringify({data:"Some issue occured" , status:400}));
       }

       return JSON.parse(JSON.stringify({data:res , status:200}));
        
    } catch (error) {
        console.log(error);
        
    }
}




// server action for updating the prducts status 

export const UpdateProductStatus = async({prodId , status}:updateProductStatusParams)=>{
    try {
        const res = await prisma.product.update({
            where:{
                productId:prodId,
            },
            data:{
                productStatus:status
            }
        });

        if(!res){
            return JSON.parse(JSON.stringify({data:"Some issue in updation" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:res , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}