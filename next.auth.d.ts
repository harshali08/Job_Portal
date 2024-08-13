// next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    // user: {
    //   name?: string | null;
    //   email?: string | null;
    // //   image?: string | null;
    //   role?: string | null; // Add role property
    // } & DefaultSession["user"];
    user:User & DefaultSession["user"]
  }

  interface User {
    role?: string | null; // Add role property to User
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string; // Add role property to JWT
  }
}
