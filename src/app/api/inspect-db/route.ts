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

    const { results } = await db.prepare("PRAGMA table_info(Project)").all();
    return NextResponse.json({ success: true, columns: results });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message
    });
  }
}
