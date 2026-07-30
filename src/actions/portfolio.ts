"use server";

import { getPrisma } from "@/lib/db";

export async function getProjects() {
  const prisma = await getPrisma();
  return await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function createProject(data: { title: string; description: string; image: string; link?: string; tags: string }) {
  try {
    const prisma = await getPrisma();
    await prisma.project.create({
      data: {
        id: crypto.randomUUID(),
        ...data,
        link: data.link || null,
      },
    });
    return { success: true };
  } catch (error: any) {
    console.error("Error creating project:", error);
    return { success: false, error: String(error.message || error) };
  }
}

export async function deleteProject(id: string) {
  try {
    const prisma = await getPrisma();
    await prisma.project.delete({
      where: { id },
    });
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting project:", error);
    return { success: false, error: String(error.message || error) };
  }
}
