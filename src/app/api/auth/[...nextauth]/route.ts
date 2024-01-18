import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// Define a user interface
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
}

// Mock user data
const users: User[] = [
  // Example users
  { id: "1", email: "user1@example.com", password: "password123", name: "James", lastName: "Bond" },
  { id: "2", email: "user2@example.com", password: "password456", name: "John", lastName: "Doe" },
  // Add more users as needed
];

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
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        const user = users.find(
          (item: User) => item.email === credentials.email
        );
        if (user && user.password === credentials.password) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
