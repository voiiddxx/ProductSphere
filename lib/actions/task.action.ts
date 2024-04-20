"use server"

import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const assigendMembers = [2,3];

const comments = [
    "Do this work before evening",
    "try wo write clean code",
]
const tagsforTask = [
    "Design",
    "code",
    "Creativity"
]

const documentsforTask = [
    "heyyllloo",
    "howww are youu"
]


export const AssignTaskAction =async ()=>{
    try {
        const assignedtaks = await prisma.tasks.create({
            data:{
                title:"Testing",
                desc:"this is testing",
                dueDate:new Date,
                prioroty:"High",
                status:"Not Started yet",
                comment:comments,
                tags:tagsforTask,
                documents:documentsforTask,
                creatorid:1,
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

