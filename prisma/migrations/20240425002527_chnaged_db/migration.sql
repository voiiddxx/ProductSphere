/*
  Warnings:

  - You are about to drop the column `creatorId` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `taskData` on the `Tasks` table. All the data in the column will be lost.
  - You are about to drop the column `taskDoc` on the `Tasks` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorid` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documents` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prioroty` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prodId` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_productId_fkey";

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "creatorId",
DROP COLUMN "productId",
DROP COLUMN "taskData",
DROP COLUMN "taskDoc",
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "creatorid" INTEGER NOT NULL,
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "documents" TEXT NOT NULL,
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "prioroty" TEXT NOT NULL,
ADD COLUMN     "prodId" INTEGER NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_membersOftasks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_membersOftasks_AB_unique" ON "_membersOftasks"("A", "B");

-- CreateIndex
CREATE INDEX "_membersOftasks_B_index" ON "_membersOftasks"("B");

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_creatorid_fkey" FOREIGN KEY ("creatorid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_membersOftasks" ADD CONSTRAINT "_membersOftasks_A_fkey" FOREIGN KEY ("A") REFERENCES "Tasks"("taskId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_membersOftasks" ADD CONSTRAINT "_membersOftasks_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
