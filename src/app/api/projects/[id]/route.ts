import { NextResponse } from "next/server";
import { getProjectUseCaseServer } from "@/features/projects/application/getProject.usecase.server";

export async function GET({ params }: { params: { id: string } }) {
  try {
    const { id } = params;
    
    const project = await getProjectUseCaseServer(id);

    return NextResponse.json(project, { status: 200 });

  } catch (error) {
    console.error("GET /api/projects/[id] error:", error);
    return NextResponse.json(error, { status: 500 });
  }
}
