"use server"

import { AssignTasksParams } from "@/types";
import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



export const AssignTaskAction =async ({comment , creatorid , desc ,  documents , dueDate , priority , prodId , status , tags , taskmembers , title}: AssignTasksParams)=>{

    
    try {
        const assignedtaks = await prisma.tasks.create({
            data:{
                title:title,
                desc:desc,
                dueDate:dueDate,
                prioroty:priority,
                status:status,
                comment:comment,
                tags:tags,
                documents:documents,
                creatorid:creatorid,
                prodId:prodId,
            }
        });
        console.log(assignedtaks);
        if(!assignedtaks) {
            return JSON.parse(JSON.stringify({message:"Some error occured" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:assignedtaks , status:200}));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


// members: {
//     connect: memberIds.map(memberid => ({id:memberid}))
// },


// getting task for partiuclar product

export const GetTaskAsperProductId = async( prodId: any)=>{
    try {
        
        const TaskRes = await prisma.tasks.findMany({
            where:{
                prodId:prodId,
            }
        });
        if(!TaskRes){
            return JSON.parse(JSON.stringify({message:"No Product Found" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:TaskRes , status:200}));
    } catch (error) {
        console.log(error);
        throw new Error(error as string)
        
    }
}

