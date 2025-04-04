import { PrismaClient } from "@prisma/client";

// 1. Explicitly type globalThis with prisma
type CustomGlobal = typeof globalThis & {
  prisma?: PrismaClient;
};

// 2. Cast globalThis to avoid TS errors
const customGlobal = globalThis as CustomGlobal;

// 3. Export db with proper typing
export const db = customGlobal.prisma ?? new PrismaClient();

// 4. Assign in development (optional)
if (process.env.NODE_ENV !== "production") {
  customGlobal.prisma = db;
}

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.
