import { z } from "zod";
import { baseListSchema, baseSchema } from "./base";

export const contactSchema = z.object({
  phone: z.string().trim(),
  name: z.string().trim().nullish(),
  firstName: z.string().trim().nullish(),
  lastName: z.string().trim().nullish(),
  sex: z.enum(["M", "F"]).nullish(),
});

export const createContact = baseSchema.extend({
  contacts: z.array(contactSchema).default([]),
});

export const getContactList = baseListSchema.extend({
  orderBy: z
    .enum(["firstName", "lastName", "name", "phone", "sex", "createdAt"])
    .default("createdAt"),
});

export const getContact = baseSchema.extend({});

export const updateContact = baseSchema.extend({
  id: z.string(),
  name: z.string().trim().nullish(),
  firstName: z.string().trim().nullish(),
  lastName: z.string().trim().nullish(),
  phone: z.string().trim().nullish(),
  sex: z.enum(["M", "F"]).nullish(),
});

export const deleteContact = baseSchema.extend({
  contactIds: z.array(z.string().trim()).default([]),
});
