// import { connectToDatabase } from "@/app/helpers/server-helpers";
// import { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "../../../../../prisma";
// import bcrypt from "bcrypt";
// import { FirestoreAdapter } from "@auth/firebase-adapter";
// import { cert } from "firebase-admin/app";
// import GoogleProvider from "next-auth/providers/google";
// import { randomBytes, randomUUID } from "crypto";

// // Define a user interface
// interface User {
//   id: string;
//   email: string;
//   password: string;
//   name: string;
//   lastName: string;
// }

// declare module "next-auth" {
//   interface Session {
//     accessToken?: string;
//   }
// }

// const googleClientId = process.env.GOOGLE_CLIENT_ID;
// const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

// if (!googleClientId || !googleClientSecret) {
//   throw new Error(
//     "Please define GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET environment variables inside .env.local"
//   );
// }

// export const authOptions: NextAuthOptions = {
//   // providers: [
//   //   CredentialsProvider({
//   //     name: "Credentials",
//   //     credentials: {
//   //       email: { label: "Email", type: "text", placeholder: "Enter Email" },
//   //       password: {
//   //         label: "Password",
//   //         type: "password",
//   //         placeholder: "Enter Password",
//   //       },
//   //     },
//   //     async authorize(credentials, req) {
//   //       if (!credentials || !credentials.email || !credentials.password) {
//   //         return null;
//   //       }
//   //       try {
//   //         await connectToDatabase();
//   //         const user = await prisma.user.findFirst({ where: { email: credentials.email } });
//   //         if (!user?.hashedPassword){
//   //           return null;
//   //         }
//   //         const isPasswordCorrect = await bcrypt.compare(credentials.password, user.hashedPassword || '');
//   //         if (isPasswordCorrect){
//   //           return user;
//   //         }
//   //       } catch (error) {
//   //         console.log(error);
//   //         return null;
//   //       } finally {
//   //         await prisma.$disconnect();
//   //       }
//   //     },
//   //   }),
//   // ],
//   providers: [
//     GoogleProvider({
//       clientId: googleClientId,
//       clientSecret: googleClientSecret,
//     }),
//   ],
//   adapter: FirestoreAdapter({
//     credential: cert({
//       projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
//     }),
//   }),
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: "/app/login",
//   },
//   session: {
//     // Choose how you want to save the user session.
//     // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
//     // If you use an `adapter` however, we default it to `"database"` instead.
//     // You can still force a JWT session by explicitly defining `"jwt"`.
//     // When using `"database"`, the session cookie will only contain a `sessionToken` value,
//     // which is used to look up the session in the database.
//     strategy: "database",
  
//     // Seconds - How long until an idle session expires and is no longer valid.
//     maxAge: 1 * 24 * 60 * 60, // 30 days
  
//     // Seconds - Throttle how frequently to write to database to extend a session.
//     // Use it to limit write operations. Set to 0 to always update the database.
//     // Note: This option is ignored if using JSON Web Tokens
//     updateAge: 24 * 60 * 60, // 24 hours

//   },

// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import { authOptions } from "../../../../../auth";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}
