/*
  Warnings:

  - Added the required column `nome` to the `Itens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Itens" ADD COLUMN     "nome" TEXT NOT NULL;
