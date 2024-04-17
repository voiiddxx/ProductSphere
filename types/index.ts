



export type CreateUseronSuperbaseParams = {
    username:string,
    email:string,
    avatar:string,
    clerkId:string
}


export type createProductParams = {
    name:string
    detail:string
    category:string
    productlogo:string
    productcolor:string
    endDate: Date
    startDate: Date
    url:string
    visibility:string
    productdocumentone?:string
    productdocumenttwo?:string
    ownerId:any
    members?:[]
}



