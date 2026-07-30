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
  const prisma = await getPrisma();
  await prisma.project.create({
    data,
  });
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}

export async function deleteProject(id: string) {
  const prisma = await getPrisma();
  await prisma.project.delete({
    where: { id },
  });
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}
