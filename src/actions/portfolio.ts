"use server";

import { getPrisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

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
    revalidatePath("/", "layout");
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
    revalidatePath("/", "layout");
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting project:", error);
    return { success: false, error: String(error.message || error) };
  }
}
