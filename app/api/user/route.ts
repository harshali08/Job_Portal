import { connectToDB } from "@/app/helper/connectDb"
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET=async()=>{
try {
    await connectToDB();
    const users=await prisma.user.findMany();
    return NextResponse.json({users},{status:200})
} catch (error) {
    console.log(error);
    return NextResponse.json({message:"Server Error"},{status:500})
}
finally{
    await prisma.$disconnect();
}
}