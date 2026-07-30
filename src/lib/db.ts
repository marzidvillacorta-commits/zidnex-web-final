import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const getPrisma = async () => {
  // Try to use Cloudflare D1 if running on Cloudflare Pages Edge
  try {
    const { getRequestContext } = await import("@cloudflare/next-on-pages");
    const ctx = getRequestContext();
    if ((ctx?.env as any)?.DB) {
      const { PrismaD1 } = await import("@prisma/adapter-d1");
      const adapter = new PrismaD1((ctx.env as any).DB);
      return new PrismaClient({ adapter });
    }
  } catch (e) {
    // Ignore error, fallback to local SQLite
  }

  // Fallback to local SQLite for standard Node.js environment (npm run dev)
  if (!globalForPrisma.prisma) {
    const { PrismaBetterSqlite3 } = await import("@prisma/adapter-better-sqlite3");
    
    const adapter = new PrismaBetterSqlite3({ url: "file:./dev.db" });
    
    globalForPrisma.prisma = new PrismaClient({ adapter });
  }
  return globalForPrisma.prisma;
};

// Keep default export for any old synchronous usages, though async getPrisma is preferred
// Note: It might be undefined initially.
export default globalForPrisma.prisma as PrismaClient;
