import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    const prisma = await getPrisma();
    const result = await prisma.project.create({
      data: {
        id: crypto.randomUUID(),
        title: "Test Project",
        description: "Test Desc",
        image: "https://example.com/img.png",
        link: "https://example.com",
        tags: "test",
      }
    });
    
    // cleanup
    await prisma.project.delete({ where: { id: result.id } });
    
    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      stack: error.stack,
      name: error.name
    });
  }
}
