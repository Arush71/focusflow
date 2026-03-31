import { z } from "zod";

export const getTodosQuerySchema = z.object({
  userId: z.string().min(1, "userId is required."),
});
