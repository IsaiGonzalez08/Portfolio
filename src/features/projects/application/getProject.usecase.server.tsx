import { Project } from "../domain/Project";
import { prisma } from "../../../server/db/prisma";

export async function getProjectUseCaseServer(id: string): Promise<Project> {
    const project = await prisma.project.findUnique({ where: { id } });
    return project as Project;
}