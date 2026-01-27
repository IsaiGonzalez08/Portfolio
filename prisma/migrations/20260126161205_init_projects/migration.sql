-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
