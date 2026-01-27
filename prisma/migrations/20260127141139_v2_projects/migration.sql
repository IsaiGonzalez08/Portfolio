/*
  Warnings:

  - Added the required column `resultsId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stackId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "participants" TEXT[],
ADD COLUMN     "resultsId" TEXT NOT NULL,
ADD COLUMN     "stackId" TEXT NOT NULL;
