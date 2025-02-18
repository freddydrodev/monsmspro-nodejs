import { z } from "zod";

export const baseSchema = z.object({
  apiKey: z.string(), // FIREBASE AUTH ID

  // ONLY FOR ADMIN APIs
  adminKey: z.string().nullish(),
});

export const baseListSchema = baseSchema.extend({
  count: z.number().min(5).nullish(),
  page: z.number().min(1).nullish(),
  sort: z.enum(["asc", "desc"]).default("desc"),
});
