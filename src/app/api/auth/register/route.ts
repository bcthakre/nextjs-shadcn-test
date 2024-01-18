import { connectToDatabase } from "@/app/helpers/server-helpers";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const POST = async (req: Request) => {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password)
      return NextResponse.json({ error: "missing fields" }, { status: 422 });
    await connectToDatabase();
    const newUser = prisma.user.create({
      data: { name, email, hashedPassword: password },
    });
  } catch (error) {
  } finally {
  }
};
