"use server"


import { CreateUseronSuperbaseParams } from '@/types';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


// server action for saving the user data to superbase using prisma and postgress

export const createUseronSuperbase = async({avatar , email , username}:CreateUseronSuperbaseParams)=>{
    try {
        const res = await prisma.user.create({
            data:{
              username:username,
              avatar:avatar,
              email:email,  
            },
            
        });
        console.log("the data is created:" , res);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
        
    }
}
