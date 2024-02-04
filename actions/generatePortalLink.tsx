'use server';

import Stripe from "stripe";
import { headers } from 'next/headers'
import { authOptions } from "../auth";
import { adminDb } from "../firebase-admin";
import { getServerSession } from "next-auth";
import { redirect} from 'next/navigation'




const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2020-08-27",
    });
})