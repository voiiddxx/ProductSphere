/*
  Warnings:

  - You are about to drop the `Skills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductToSkills` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[clerkId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProductToSkills" DROP CONSTRAINT "_ProductToSkills_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToSkills" DROP CONSTRAINT "_ProductToSkills_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "skills" TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clerkId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Skills";

-- DropTable
DROP TABLE "_ProductToSkills";

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");
