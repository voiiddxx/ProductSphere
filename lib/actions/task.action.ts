"use server"

import { AssignTasksParams } from "@/types";
import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const assigendMembers = [2,3];



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
                taskmembers:{
                    connect:assigendMembers.map(curr => ({id:curr}))
                }
            }
        });
        console.log(assignedtaks);
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


// members: {
//     connect: memberIds.map(memberid => ({id:memberid}))
// },

