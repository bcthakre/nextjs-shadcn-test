import { connectToDatabase } from "@/app/helpers/server-helpers";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma";
import bcrypt from "bcrypt";

// Define a user interface
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
}



export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        try {
          await connectToDatabase();
          const user = await prisma.user.findFirst({ where: { email: credentials.email } });
          if (!user?.hashedPassword){
            return null;
          }
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.hashedPassword || '');
          if (isPasswordCorrect){
            return user;
          }
        } catch (error) {
          console.log(error);
          return null;
        } finally {
          await prisma.$disconnect();
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST };
