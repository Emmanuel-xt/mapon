/*
  Warnings:

  - You are about to drop the column `titles` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "titles",
ADD COLUMN     "bio" TEXT;
