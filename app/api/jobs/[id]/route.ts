

import { connectToDB } from "@/app/helper/connectDb";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/job/")[1];
    await connectToDB();
    const job = await prisma.jobs.findFirst({ where: { id } });
    console.log(job)
    if (!job)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", job }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};