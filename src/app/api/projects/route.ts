import { NextResponse } from "next/server";
import { prisma } from "@/server/db/prisma";
import { getAllProjectsUseCaseServer } from "@/features/projects/application/getAllProjects.usecase.server";

export async function GET() {
  try {
    const projects = await getAllProjectsUseCaseServer();

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { role, duration, overview, stackId, resultsId, participants } = body;

    if (!role || !duration || !overview) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        role,
        duration,
        overview,
        stackId,
        resultsId,
        participants,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("POST /api/projects error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
