"use server"

import { RegisterParams } from "@/types";
import { createSupebaseServerClient } from "../superbase/server";


export async function RegisterUserUsingSuperbase({email , password , username} : RegisterParams) {
    const superbase = createSupebaseServerClient();
    try {
        const res = (await superbase).auth.signUp({
            email:email,
            password:password
        });
        const data = await res;
        console.log("Value of data:" , data);
        
        
        return JSON.parse(JSON.stringify(data));
        
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }

    
}