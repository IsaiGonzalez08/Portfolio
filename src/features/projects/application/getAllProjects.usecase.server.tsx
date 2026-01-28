import { prisma } from "@/server/db/prisma";

export async function getAllProjectsUseCaseServer() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      participants: {
        include: {
          participant: true,
        },
      },
    },
  });

  return projects.map(project => ({
    ...project,
    participants: project.participants.map(p => p.participant),
  }));
}
