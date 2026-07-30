"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getProjects() {
  return await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function createProject(data: { title: string; description: string; image: string; link?: string; tags: string }) {
  await prisma.project.create({
    data,
  });
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}

export async function deleteProject(id: string) {
  await prisma.project.delete({
    where: { id },
  });
  revalidatePath("/");
  revalidatePath("/admin/portfolio");
}
