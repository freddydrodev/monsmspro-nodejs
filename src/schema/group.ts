import { z } from "zod";
import { baseListSchema, baseSchema } from "./base";

export const createGroup = baseSchema.extend({
  name: z.string().trim(),
  description: z.string().trim().nullish(),
  contacts: z.array(z.string().trim()).default([]),
  contactList: z.string().trim(),
});

export const getGroupList = baseListSchema.extend({
  orderBy: z.enum(["name", "createdAt"]).default("createdAt"),
});

export const getGroup = baseSchema.extend({});

export const updateGroup = baseSchema.extend({
  name: z.string().trim().nullish(),
  description: z.string().trim().nullish(),
  contacts: z.array(z.string().trim()).nullish(),
  contactList: z.string().nullish(),
});

export const deleteGroup = baseSchema.extend({});

// ADD / DELETE
export const updateContactFromGroup = baseSchema.extend({
  contacts: z.array(z.string().trim()).default([]),
});
