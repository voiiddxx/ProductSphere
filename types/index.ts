



export type CreateUseronSuperbaseParams = {
    username: string,
    email: string,
    avatar: string,
    clerkId: string
}


export type createProductParams = {
    data: {
        name: string
        detail: string
        category: string
        productlogo: string
        productcolor: string
        endDate: Date
        startDate: Date
        url: string
        visibility: string
        productdocumentone?: string
        productdocumenttwo?: string
        ownerId: any
        skills: []
        members?: []
        productCode: string
    }
}


export type AssignTasksParams = {
    data: {
        title: string,
        desc: string,
        dueDate: Date,
        priority: string,
        status: string,
        comment: string,
        tags: [],
        documents: string,
        creatorid: any,
        prodId: any,
        taskmembersNow: []
    }
}



export type JoinProductParams = {
    userdId: any
    productCode: any
    productId: number
}




export type GetUserJoindedProductParams = {
    userId: any
}


export type UpdateTaskStatusParams = {
    taskId: number,
    taskStatus: string
}

export type AddteamMembersParams = {
    prodId: number,
    teamMember: any[]
}


export type updateUserParams = {
    data: {
        username: string,
        avatar: string,
        clerkId: string
    }
}


export type addReviewParams = {
    data: {
        count: number,
        comment: string,
        prodId: number,
        userid: number
    }
}


export type updateProductStatusParams = {
    prodId: number,
    status: string
}


export type updateDataParamsForUser = {
    userid: number
    data: {
        about?: string,
        bio?: string,
        github?: string,
        linkedin?: string,
        skills?: string[],
    }
}