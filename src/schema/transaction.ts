import { z } from "zod";

import { baseListSchema, baseSchema } from "./base";

export const createTransaction = baseSchema.extend({
  type: z.enum(["DEBITED", "RECHARGED"]).default("DEBITED"),

  status: z.enum(["PENDING", "FAILED", "CHARGED"]).default("PENDING"),

  credit: z.number(),

  campainId: z.string().nullish(),

  offerId: z.string().nullish(),
});

export const transactionPay = baseSchema.extend({
  // PAYTO REQUIREMENT
  amount: z.number(),
  phone: z.string(),
  name: z.string(),
  email: z.string(),
  paymentMethod: z.enum(["OM_CI", "MTN_CI", "MOOV_CI"]),
  app: z.enum(["MONSMSPRO", "XORAIA", "FREE"]).default("MONSMSPRO"),
  otp: z.string().length(4).nullish(),

  // MONSMS REQUIREMENT
  offerId: z.string(),
  credit: z.number(),
});

export const transactionRecharge = baseSchema.extend({
  // PAYTO REQUIREMENT
  token: z.string(),

  paymentMethod: z.enum(["OM_CI", "MTN_CI", "MOOV_CI", "IAP", "CASH"]),

  type: z.enum(["DEBITED", "RECHARGED"]).default("RECHARGED"),

  status: z.enum(["PENDING", "FAILED", "CHARGED"]).default("PENDING"),

  // MONSMS REQUIREMENT
  offerId: z.string(),

  credit: z.number(),
});

export const updateTransaction = baseSchema.extend({
  status: z.enum(["PENDING", "FAILED", "CHARGED"]),
});

export const getTransactionList = baseListSchema.extend({
  orderBy: z.enum(["status", "createdAt"]).default("createdAt"),
});
