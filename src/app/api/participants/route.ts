import { prisma } from "@/server/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, lastName, linkedin } = body;

    if (!name || !lastName || !linkedin) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const participant = await prisma.participant.create({
      data: {
        name,
        lastName,
        linkedin,
      },
    });

    return NextResponse.json(participant, { status: 201 });
  } catch (error) {
    console.error("POST /api/participants error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}