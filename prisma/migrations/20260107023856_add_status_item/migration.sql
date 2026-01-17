/*
  Warnings:

  - Added the required column `status` to the `Itens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Itens" ADD COLUMN     "status" TEXT NOT NULL;
