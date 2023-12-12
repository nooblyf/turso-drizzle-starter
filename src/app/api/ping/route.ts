import { db } from "@/db/client";
import { User } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const userResult = await db.select().from(User).where(eq(User.id, 1));

  if (userResult[0]) {
    return NextResponse.json(userResult[0]);
  }

  return NextResponse.json(
    { message: "Internal server error" },
    { status: 500 }
  );
}
