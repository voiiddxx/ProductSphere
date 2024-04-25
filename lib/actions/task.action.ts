"use server"

import { AssignTasksParams } from "@/types";
import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


const task = [2]


// export const AssignTaskAction =async ({comment , creatorid , desc ,  documents , dueDate , priority , prodId , status , tags , taskmembersNow , title}: AssignTasksParams)=>{

//     console.log("This is the members list: " , taskmembersNow);
    
    
//     try {
//         const assignedtaks = await prisma.tasks.create({
//             data:{
//                 title:title,
//                 desc:desc,
//                 dueDate:dueDate,
//                 prioroty:priority,
//                 status:status,
//                 comment:comment,
//                 tags:tags,
//                 documents:documents,
//                 creatorid:creatorid,
//                 prodId:prodId,
//                 membersOfTasks:{
//                    connect: taskmembersNow.map((id=> ({id:id}))) 
//                 }
                
                
//             }
//         });
//         console.log(assignedtaks);
//         if(!assignedtaks) {
//             return JSON.parse(JSON.stringify({message:"Some error occured" , status:400}));
//         }
//         return JSON.parse(JSON.stringify({data:assignedtaks , status:200}));
//     } catch (error) {
//         console.log(error);
//         throw new Error(error as string);
        
//     }
// }


export const AssignTaskAction = async ({ comment, creatorid, desc, documents, dueDate, priority, prodId, status, tags, taskmembersNow, title }: AssignTasksParams) => {
    try {
        console.log(taskmembersNow);
        
        const assignedTask = await prisma.tasks.create({
            data: {
                title: title,
                desc: desc,
                dueDate: dueDate,
                prioroty: priority,
                status: status,
                comment: comment,
                tags: tags,
                documents: documents,
                creatorid: creatorid,
                prodId: prodId,
                membersOfTasks: {
                    connect: taskmembersNow.map(userId => ({ id: userId }))
                }
            }
        });
        return { data: assignedTask, status: 200 };
    } catch (error) {
        console.error("Error assigning task:", error);
        throw new Error("Failed to assign task.");
    }
}



// members: {
//     connect: memberIds.map(memberid => ({id:memberid}))
// },


// getting task for partiuclar product

// new server action for assigning the tasks

export const AssignNewTasks = async()=>{
    try {
        
    } catch (error) {
        console.log(error);
        
    }
}







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

