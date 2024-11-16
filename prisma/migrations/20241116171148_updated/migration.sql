/*
  Warnings:

  - You are about to drop the column `memberShipDate` on the `members` table. All the data in the column will be lost.
  - Added the required column `membershipDate` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "members" DROP COLUMN "memberShipDate",
ADD COLUMN     "membershipDate" TIMESTAMP(3) NOT NULL;
