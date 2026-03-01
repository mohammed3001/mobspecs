import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var __mobspecsPrisma: PrismaClient | undefined;
}

export const prisma = global.__mobspecsPrisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.__mobspecsPrisma = prisma;
}
