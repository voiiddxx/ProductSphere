"use server"


import { CreateUseronSuperbaseParams, updateUserParams } from '@/types';
import { PrismaClient } from '@prisma/client'
import { string } from 'zod';

const prisma = new PrismaClient()


// server action for saving the user data to superbase using prisma and postgress

export const createUseronSuperbase = async({avatar , email , username , clerkId}:CreateUseronSuperbaseParams)=>{
    try {
        console.log("The Data for creating account: " , avatar , email , username , clerkId);
        
        const res = await prisma.user.create({
            data:{
              username:username,
              avatar:avatar,
              email:email,  
              clerkId:clerkId
            },
        });
        console.log("the data is created:" , res);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);   
    }
}




// server action for getting the user data using clerkid

export const getUserUsingClerkid = async (id:string)=>{
    try {
        console.log("this is data of user id : " , id);
        const userResponse  = await prisma.user.findFirst({
            where:{
                clerkId:id
            },
            include:{
                memberOfProducts:true,
                ownedProducts:true,   
            }
        });
        if(!userResponse){
            return JSON.parse(JSON.stringify({message:"No User Exist"}));
        }
        console.log("User Found: " , userResponse);
        return JSON.parse(JSON.stringify(userResponse));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}




// server action for updating the user

export const UpdateuserAction = async ({data}:updateUserParams)=>{
    try {
        const res = await prisma.user.update({
            where:{
                clerkId:data.clerkId
            },
            data:{
                avatar:data.avatar,
                username:data.username,
            }
        });

        if(!res){
            return JSON.parse(JSON.stringify({message:"Some issue while updating the data" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:res , status:200}));

    } catch (error) {
        console.log(error);
        
    }
}





// server action for getting the list of all users

export const getAllUsers = async()=>{
    try {
        const allusersResponse = await prisma.user.findMany({});
        if(!allusersResponse){
            return JSON.parse(JSON.stringify({messae:"No Users Found"}));
        }
        console.log("Users List: " , allusersResponse);
        return JSON.parse(JSON.stringify(allusersResponse));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


// server action for getting the user with id
 export const getUserUsinguserId =async(id:any)=>{
    try {
        const res = await prisma.user.findFirst({
            where:{
                id:id
            },
            include:{
                memberOfProducts:true,
                ownedProducts:true,
            }
        });
        if(!res){
            return JSON.parse(JSON.stringify({message:"Invalid id" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:res , status:200}))
    } catch (error) {
        console.log(error);
        
    }
 }

