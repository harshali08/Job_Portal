

import { connectToDB } from "@/app/helper/connectDb";
import prisma from "@/prisma";
import { NextResponse } from "next/server";



export async function GET(req: Request) {
  try {
    // Extract job ID from URL
    const url = new URL(req.url);
    const id = url.pathname.split('/jobs/')[1];

    // Connect to the database
    await connectToDB();

    // Fetch job from database
    const job = await prisma.jobs.findUnique({ where: { id } });
    console.log(job);

    if (!job) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Success", job }, { status: 200 });
  } catch (error) {
    console.error('Error fetching job data:', error);
    return NextResponse.json({ message: "Error", error: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    
    const id = req.url.split("/jobs/")[1];
    console.log(id)
    const {position,company,category,mainCategory,description,salary,experience,posted,location} =await req.json();
    await connectToDB();
    const job = await prisma.jobs.update({
         data:{position,company,category,mainCategory,salary,description,experience,posted,location},
         where:{id}
    }
     );
    console.log(job)
    // if (!job)
    //   return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", job }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};


export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    
    const id = req.url.split("/jobs/")[1];
     await connectToDB();
    const job = await prisma.jobs.delete({
         where:{id}
    }
     );
    console.log(job)
    // if (!job)
    //   return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", job }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

