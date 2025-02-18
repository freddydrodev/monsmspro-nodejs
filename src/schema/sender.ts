import { z } from "zod";
import { baseListSchema, baseSchema } from "./base";

export const createSender = baseSchema.extend({
  name: z.string().trim().max(11).min(3),

  description: z.string().trim(),
});

export const getSenderList = baseListSchema.extend({
  orderBy: z.enum(["name", "createdAt"]).default("createdAt"),
});

export const getSender = baseSchema.extend({});

export const updateSender = baseSchema.extend({
  archived: z.boolean().nullish(),

  status: z.enum(["PENDING", "SUBMITED", "ACCEPTED", "REFUSED"]).nullish(),
});
