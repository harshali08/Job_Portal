import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from '@/app/helper/constants';
import { connectToDB } from '@/app/helper/connectDb';
import prisma from '@/prisma';
import bcrypt from 'bcrypt'
import {PrismaAdapter} from '@next-auth/prisma-adapter'

// console.log(prisma); // Add this line to debug the prisma object

const authOptions:NextAuthOptions={
    
    providers:[
        CredentialsProvider({
            name:"Credential",
            credentials:{
               
                email:{label: "Email", type: "email", placeholder: "Enter your Email Address" },
                password: { label: "Password", type: "password", placeholder:"***********" }
            },
            async authorize(credentials) {
                if(!credentials || !credentials.email || !credentials.password) 
                    return null;
                await connectToDB();
                try {
                    const user=await prisma.user.findFirst({
                        where:{
                            email:credentials.email
                        }
                    })
                 if(!user?.password){
                    return null
                 }
                 const isPasswordCorrect=await bcrypt.compare(credentials.password,user.password)

                 if(isPasswordCorrect){
                    return user
                 }
                
                 return null;
                } catch (error) {
                    console.log(error);
                    return null
                }
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:'/auth/signin',
        
    }
    
};
const handler=NextAuth(authOptions);

export {handler as GET,handler as POST}