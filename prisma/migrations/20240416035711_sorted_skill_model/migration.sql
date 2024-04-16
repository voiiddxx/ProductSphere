/*
  Warnings:

  - You are about to drop the `_ProductToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `endDate` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productcolor` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productlogo` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visibility` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ProductToUser" DROP CONSTRAINT "_ProductToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToUser" DROP CONSTRAINT "_ProductToUser_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "productcolor" TEXT NOT NULL,
ADD COLUMN     "productdocumentone" TEXT,
ADD COLUMN     "productdocumenttwo" TEXT,
ADD COLUMN     "productlogo" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD COLUMN     "visibility" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ProductToUser";

-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "skillname" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToSkills" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToSkills_AB_unique" ON "_ProductToSkills"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToSkills_B_index" ON "_ProductToSkills"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSkills" ADD CONSTRAINT "_ProductToSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("productId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSkills" ADD CONSTRAINT "_ProductToSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
