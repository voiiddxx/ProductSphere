/*
  Warnings:

  - You are about to drop the `Tasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_membersOftasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_creatorid_fkey";

-- DropForeignKey
ALTER TABLE "Tasks" DROP CONSTRAINT "Tasks_prodId_fkey";

-- DropForeignKey
ALTER TABLE "_membersOftasks" DROP CONSTRAINT "_membersOftasks_A_fkey";

-- DropForeignKey
ALTER TABLE "_membersOftasks" DROP CONSTRAINT "_membersOftasks_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productStatus" TEXT;

-- DropTable
DROP TABLE "Tasks";

-- DropTable
DROP TABLE "_membersOftasks";

-- CreateTable
CREATE TABLE "Reviews" (
    "reviewId" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "prodid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("reviewId")
);

-- CreateTable
CREATE TABLE "AssignTasks" (
    "assignId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "creatorid" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "prodId" INTEGER NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "AssignTasks_pkey" PRIMARY KEY ("assignId")
);

-- CreateTable
CREATE TABLE "_upvotedProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AssignedTaskMemebers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_upvotedProducts_AB_unique" ON "_upvotedProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_upvotedProducts_B_index" ON "_upvotedProducts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AssignedTaskMemebers_AB_unique" ON "_AssignedTaskMemebers"("A", "B");

-- CreateIndex
CREATE INDEX "_AssignedTaskMemebers_B_index" ON "_AssignedTaskMemebers"("B");

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_prodid_fkey" FOREIGN KEY ("prodid") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignTasks" ADD CONSTRAINT "AssignTasks_creatorid_fkey" FOREIGN KEY ("creatorid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssignTasks" ADD CONSTRAINT "AssignTasks_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_upvotedProducts" ADD CONSTRAINT "_upvotedProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("productId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_upvotedProducts" ADD CONSTRAINT "_upvotedProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssignedTaskMemebers" ADD CONSTRAINT "_AssignedTaskMemebers_A_fkey" FOREIGN KEY ("A") REFERENCES "AssignTasks"("assignId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AssignedTaskMemebers" ADD CONSTRAINT "_AssignedTaskMemebers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
