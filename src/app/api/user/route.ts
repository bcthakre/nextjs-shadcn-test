import { connectToDatabase } from "@/app/helpers/server-helpers";
import prisma from "../../../../prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();
    const users = await prisma.user.findMany();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "error fetching users" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
