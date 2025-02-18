import { z } from "zod";

const offerSchema = z.object({
  name: z.enum(["STARTER", "BRONZE", "FER", "OR", "DIAMANT", "VIP"]),
  price: z.number(),
  credit: z.number(),
});

export const createOffer = z.object({
  offers: z.array(offerSchema).default([]),
});
