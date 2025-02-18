import { z } from "zod";
import { baseListSchema, baseSchema } from "./base";

export const createCampain = baseSchema.extend({
  name: z.string().nullish(),

  contacts: z
    .array(
      z
        .object({
          phone: z.string().trim(), // contact number ad 22500000000
          firstName: z.string().trim().nullish(),
          lastName: z.string().trim().nullish(),
          sex: z.enum(["M", "F"]).nullish(),
        })
        .passthrough()
    )
    .default([]),

  groupsIds: z.array(z.string()).default([]), // groups ids

  text: z.string().trim(),

  senderId: z.string().nullish().nullish(), // name

  type: z.enum(["SMS", "FLASH"]).nullish().default("SMS"),

  forceSenderId: z.boolean().nullish(),
});

export const getCampain = baseListSchema.extend({
  orderBy: z.enum(["type", "createdAt"]).default("createdAt"),
});
