import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    const { getRequestContext } = await import("@cloudflare/next-on-pages");
    const ctx = getRequestContext();
    const db = (ctx?.env as any)?.DB;
    
    if (!db) {
      return NextResponse.json({ error: "No DB binding found in edge env" });
    }

    // Drop and recreate to ensure schema matches Prisma exactly
    await db.prepare("DROP TABLE IF EXISTS Project").run();
    await db.prepare(`
      CREATE TABLE "Project" (
        "id" TEXT NOT NULL PRIMARY KEY,
        "title" TEXT NOT NULL,
        "description" TEXT NOT NULL,
        "image" TEXT NOT NULL,
        "link" TEXT,
        "tags" TEXT NOT NULL,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" DATETIME NOT NULL
      )
    `).run();

    return NextResponse.json({ success: true, message: "Project table recreated successfully on Edge" });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message
    });
  }
}
