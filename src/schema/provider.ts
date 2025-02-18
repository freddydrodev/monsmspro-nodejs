import { z } from "zod";
import { baseSchema } from "./base";
import { contactSchema } from "./contact";

export const providerSendSMS = baseSchema.extend({
  token: z.string(),

  contact: z.string(), // MOST HAVE INTERNATIONNAL FORMAT

  senderId: z.string().nullish(),

  content: z.string(),

  qty: z.number().default(5),
});

export const leTextoSendSchema = baseSchema.extend({
  token: z.string(),

  senderId: z.string().nullish(),

  label: z.string(),

  content: z.string(),

  contacts: z.array(contactSchema.passthrough()),
});
