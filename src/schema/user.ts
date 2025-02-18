import { z } from "zod";
import { baseSchema } from "./base";

export const createUser = z.object({
  emailAddress: z.string().email(),
  phoneNumber: z.string(),
  fullName: z.string(),
  otpToken: z.string().length(24),
});

export const updateUser = baseSchema.extend({
  id: z.string(),
  emailAddress: z.string().email(),
  fullName: z.string(),
});

export const getUser = z.object({
  phoneNumber: z.string(),
  otpToken: z.string().length(24),
});

export const checkUserEmail = z.object({
  emailAddress: z.string().email(),
});

export const loginUserWithEmail = z.object({
  emailAddress: z.string().email(),
  password: z.string().min(8),
});

export const createUserWithEmail = z.object({
  emailAddress: z.string().email(),
  password: z.string().min(8),
  phoneNumber: z.string(),
  fullName: z.string(),
  otpToken: z.string().length(24),
});

// export const getSenderList = baseListSchema.extend({
//   orderBy: z.enum(["name", "createdAt"]).default("createdAt"),
// });

// export const getSender = baseSchema.extend({});

// export const updateSender = baseSchema.extend({
//   archived: z.boolean(),
// });
