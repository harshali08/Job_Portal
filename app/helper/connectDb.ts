import prisma from "@/prisma";

export  const connectToDB= async ()=>{
       try {
        await prisma.$connect();
        console.log("connected to db")
       } catch (error) {
        console.log(error)

        throw new Error("Unable to connect DB")
       }
}