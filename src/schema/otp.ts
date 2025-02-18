import { z } from "zod";
import { baseSchema } from "./base";

export const getOTPSchema = baseSchema.extend({
  phoneNumber: z.string(),
  length: z.number().min(4).max(8).default(4),
  mode: z
    .enum(["NUMERIC", "ALPHABET", "ALPHA_NUMERIC"])

    .default("NUMERIC"),
  senderId: z.string().nullish(), // nullish added because of flutter
  appName: z.string().nullish(), // nullish added because of flutter
});

export const adminGetOTPSchema = z.object({
  phoneNumber: z.string(),
});

export const verifyOTPSchema = z.object({
  token: z.string().length(24),
  otp: z.string().min(4),
  phoneNumber: z.string().nullish(), // nullish added because of flutter
});
