/*
  Warnings:

  - You are about to drop the `_ParticipantToProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ParticipantToProject" DROP CONSTRAINT "_ParticipantToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_ParticipantToProject" DROP CONSTRAINT "_ParticipantToProject_B_fkey";

-- DropTable
DROP TABLE "_ParticipantToProject";

-- CreateTable
CREATE TABLE "ProjectParticipant" (
    "projectId" TEXT NOT NULL,
    "participantId" TEXT NOT NULL,

    CONSTRAINT "ProjectParticipant_pkey" PRIMARY KEY ("projectId","participantId")
);

-- AddForeignKey
ALTER TABLE "ProjectParticipant" ADD CONSTRAINT "ProjectParticipant_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectParticipant" ADD CONSTRAINT "ProjectParticipant_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
