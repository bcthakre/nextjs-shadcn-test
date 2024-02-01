

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app";
import { adminAuth, adminDb } from "./firebase-admin";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      //   Add ID to user field
      if (session?.user) {
        if (token?.sub) {
          session.user.id = token.sub;

          // Add firebase token to session
          // SOLUTION to firebase not syncing
          // https://github.com/nextauthjs/next-auth/discussions/7157
          const firebaseToken = await adminAuth.createCustomToken(token.sub);
          session.firebaseToken = firebaseToken;
        }
      }

      return session;
    },},
  session: {
    strategy: 'jwt'
  },
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    })
  }),
} satisfies NextAuthOptions;


