import { PrismaClient } from "@prisma/client";

export class PrismaDb {
  static execute() {
    return new PrismaClient();
  }
}
