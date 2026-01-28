import { Project } from "../domain/Project";
import { prisma } from "../../../server/db/prisma";

export async function getProjectUseCaseServer(id: string): Promise<Project> {
    const project = await prisma.project.findUnique({
        where: { id },
        include: {
            participants: {
                select: {
                    participantId: true,
                },
            },
        },
    });
    if (!project) {
        throw new Error("Project not found");
    }
    return {
        ...project,
        participants: project.participants.map(p => p.participantId),
    };
}