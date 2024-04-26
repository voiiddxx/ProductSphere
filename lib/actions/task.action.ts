"use server"

import { AssignTasksParams, UpdateTaskStatusParams } from "@/types";
import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



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


// export const AssignTaskAction = async ({ comment, creatorid, desc, documents, dueDate, priority, prodId, status, tags, taskmembersNow, title }: AssignTasksParams) => {
//     try {
//         console.log(taskmembersNow);

//         const assignedTask = await prisma.tasks.create({
//             data: {
//                 title: title,
//                 desc: desc,
//                 dueDate: dueDate,
//                 prioroty: priority,
//                 status: status,
//                 comment: comment,
//                 tags: tags,
//                 documents: documents,
//                 creatorid: creatorid,
//                 prodId: prodId,
//                 membersOfTasks: {
//                     connect: taskmembersNow.map(userId => ({ id: userId }))
//                 }
//             }
//         });
//         return { data: assignedTask, status: 200 };
//     } catch (error) {
//         console.error("Error assigning task:", error);
//         throw new Error("Failed to assign task.");
//     }
// }



// members: {
//     connect: memberIds.map(memberid => ({id:memberid}))
// },


// getting task for partiuclar product

// new server action for assigning the tasks

export const AssignNewTasks = async ({ data }: AssignTasksParams) => {
    try {
        const res = await prisma.assignTasks.create({
            data: {
                title: data.title,
                comment: data.comment,
                desc: data.desc,
                document: data.documents,
                dueDate: new Date,
                priority: data.priority,
                status: data.status,
                tags: data.tags,
                prodId: data.prodId,
                creatorid: data.creatorid,
                AssignMembers: {
                    connect: data.taskmembersNow.map(assignedId => ({ id: assignedId }))
                }
            },
        });
        console.log("this is log value", res);

        if (!res) {
            return JSON.parse(JSON.stringify({ message: "Some error occured", status: 400 }));
        }
        return JSON.parse(JSON.stringify({ data: res, status: 200 }));
    } catch (error) {
        console.log(error);

    }
}



// server action for getting the tasks of productid

export const getTaskAsperProductId = async (prodId: number) => {
    try {
        console.log(prodId);
        
        const res = await prisma.assignTasks.findMany({
            where: {
                prodId: prodId
            },
            include: {
                AssignMembers: true,
                createdBy: true,
            }
        });

        if (!res) {
            return JSON.parse(JSON.stringify({ message: "Some error occured", status: 400 }));
        }
        console.log('Tasks Response: ', res);
        return JSON.parse(JSON.stringify({ data: res, status: 200 }));
    } catch (error) {
        console.log(error);

    }
}




// server action for getting the task as per the taskid
export const getTaskAspertaskId =async (taskId: number)=>{
    try {
        const taskRes = await prisma.assignTasks.findUnique({
            where:{
                assignId:taskId
            },
            include:{
                AssignMembers:true,
                createdBy:true,
            }
        });

        if(!taskRes){
            return JSON.parse(JSON.stringify({message:"Some error occured , no tasks found , invalid task id" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:taskRes , status:200}));

    } catch (error) {
        console.log(error);
        
    }
}



// server action for deleting the task as per task id

export const deleteTaskAsperTaskId = async (taskId:number)=>{
    try {
        const res = await prisma.assignTasks.delete({
            where:{
                assignId:taskId
            }
        });
        if(!res){
            return JSON.parse(JSON.stringify({message:"Some issue while deleting the task" , status:400}));
        }
        return JSON.parse(JSON.stringify({data:"Deleted" , status:200}));
    } catch (error) {
        console.log(error);
    }
}


// server action for updating the status of task as per taskid 


export const updateTaskStatusasPertaskId = async ({taskId , taskStatus}:UpdateTaskStatusParams)=>{

    console.log("this is taskid:",taskId);
    
    try {
        const res = await prisma.assignTasks.update({
            where:{
                assignId:taskId,
            },
            data:{
                status:taskStatus
            }
        });

        if(!res){
            return JSON.parse(JSON.stringify({message:"Some issue occured", status:400}));
        }
        return JSON.parse(JSON.stringify({data:res , status:200}));
    } catch (error) {
        console.log(error);
        
    }
}



// server action for adding the new team members into the task

export const addTaskMemeners = async ()=>{
    try {
        const task = await prisma.assignTasks.findFirst({
            where:{
                assignId:1
            },
            include:{
                AssignMembers:true,
            }
        });
        if(!task){
            return JSON.parse(JSON.stringify({message:"No Task found" , status:400}));
        }

        const userAlreadyPresent = task.AssignMembers.some(curr=>curr.id);
        if(userAlreadyPresent){
            return JSON.parse(JSON.stringify({message:"User already assigned to this task" , status:401}));
        }

        const updatedTaskRes = await prisma.assignTasks.update({
            where:{
                assignId:1
            },
            data:{
                AssignMembers:{
                    connect:{id:2}
                }
            },
            include:{
                AssignMembers:true
            }
        });
        if(!updatedTaskRes){
            return JSON.parse(JSON.stringify({message:"Some issue occured" , status:402}));
        }
        return JSON.parse(JSON.stringify({data:updatedTaskRes , status:200}));
        

    } catch (error) {
        console.log(error);
        
    }
}
