import { connectToDB } from "@/app/helper/connectDb"
import prisma from "@/prisma";
import { NextResponse } from "next/server";

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
      const { position, category, company, description, experience, salary,location, mainCategory } = await req.json();
  
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