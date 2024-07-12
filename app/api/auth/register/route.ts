import { NextResponse } from "next/server"
import { connectToDB } from "@/app/helper/connectDb" 
import prisma from "@/prisma"
import bcrypt from 'bcrypt'
import * as z from 'zod'

const userSchema = z.object({
   userName:z.string().min(1,"Username is Required"),
    email: z.string().min(1,"Email is Required").email("Invalid Email!"),
    password:z.string().min(1,"Password is Required").min(8,"Minimum 8 characters are required")
  })

export const POST=async(req:Request)=>{
    try {
        // const {userName,email,password}=await req.json()
        const body =await req.json();
        const {userName,email,password}= userSchema.parse(body)
        console.log('Received data:', { userName, email, password });
        if(!userName || !email || !password){
           return NextResponse.json({message:"Invalid Data!"},{status:422})
        }

        await connectToDB();
        const hashedPassword=await bcrypt.hash(password,10);
        
        const newUser=await prisma.user.create({data:{userName,email,password:hashedPassword}});

        return NextResponse.json({newUser},{status:201})
    } catch (error) {
        console.log(error)

        return NextResponse.json({message:"Server Eroor!"},{status:500})
    } finally{
        await prisma.$disconnect();
    }
}

