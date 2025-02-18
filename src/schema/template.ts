import { z } from "zod";
import { baseListSchema, baseSchema } from "./base";

export const createTemplate = baseSchema.extend({
  text: z.string().trim(),
});

export const getTemplateList = baseListSchema.extend({
  orderBy: z.enum(["createdAt"]).default("createdAt"),
});

export const deleteTemplate = baseSchema.extend({
  id: z.string(),
});
