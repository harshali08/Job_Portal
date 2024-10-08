import { connectToDB } from "@/app/helper/connectDb"
import prisma from "@/prisma";
import { NextResponse } from "next/server";
import * as z from 'zod'

const postSchema = z.object({
  position:z.string().min(1,"Required field"),
  category: z.string().min(1,"Required field"),
  mainCategory: z.string().min(1,"Required field"),

  company:z.string().min(1,"Required field"),
  description:z.string().min(1,"Required field"),
  experience: z.number().int().min(0, "Experience must be a non-negative integer"),
  location: z.string().min(1, "Required field"),
  salary: z.string().min(1,"Required field"),
})

export const GET=async()=>{
try {
    await connectToDB();
    const jobs=await prisma.jobs.findMany();
    return NextResponse.json({jobs},{status:200})
} catch (error) {
    console.log(error);
    return NextResponse.json({message:"Server Error"},{status:500})
}
finally{
    await prisma.$disconnect();
}
}


export const POST = async (req: Request, resp: NextResponse) => {
    try {
      // const { position, category, company, description, experience, salary,location, mainCategory } = await req.json();
      const body =await req.json();
      const { position, category, company, description, experience, salary,location, mainCategory } =postSchema.parse(body)
      // Ensure all required fields are present
      if (!position || !category || !company || !description || experience === undefined || !salary || !mainCategory ||!location) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
      }
  
      await connectToDB();
  
      const job = await prisma.jobs.create({
        data: { position, category, company, description, experience, salary, mainCategory ,location}
      });
  
      return NextResponse.json({ job }, { status: 201 });
    } catch (error) {
      console.error("Error creating job:", error);
      return NextResponse.json({ message: "Server Error!" }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
}