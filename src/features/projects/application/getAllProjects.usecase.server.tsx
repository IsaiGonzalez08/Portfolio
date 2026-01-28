import { Project } from "../domain/Project";
import { prisma } from "../../../server/db/prisma";

export async function getAllProjectsUseCaseServer(): Promise<Project[]> {
    const projects = await prisma.project.findMany({
        orderBy: { createdAt: "desc" },
    });
    return projects as Project[];
}