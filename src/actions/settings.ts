"use server";

import { getPrisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getSetting(key: string) {
  const prisma = await getPrisma();
  const setting = await prisma.setting.findUnique({ where: { key } });
  return setting?.value || "";
}

export async function saveSetting(key: string, value: string) {
  const prisma = await getPrisma();
  await prisma.setting.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
  
  // Revalidate entire layout to show new data immediately on frontend
  revalidatePath("/", "layout");
}
