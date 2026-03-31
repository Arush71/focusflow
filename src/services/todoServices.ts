import { prisma } from "@/lib/prisma";

export async function getTodosByUserId(userId: string) {
  return prisma.todo.findMany({ where: { userId } });
}
