import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";

export const runtime = "edge";

export async function GET() {
  try {
    const prisma = await getPrisma();
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, projects });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: String(error.message || error) });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const prisma = await getPrisma();
    
    await prisma.project.create({
      data: {
        id: crypto.randomUUID(),
        title: data.title,
        description: data.description,
        image: data.image,
        link: data.link || null,
        tags: data.tags,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error creating project API:", error);
    return NextResponse.json({ success: false, error: String(error.message || error) });
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) throw new Error("ID requerido");

    const prisma = await getPrisma();
    await prisma.project.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error deleting project API:", error);
    return NextResponse.json({ success: false, error: String(error.message || error) });
  }
}
