/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN_SYSTEM', 'GENERAL_ADMIN', 'OP', 'SESMT_ADMIN', 'SESMT_USER', 'RH_ADMIN', 'RH_USER', 'CONTROLER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL;
