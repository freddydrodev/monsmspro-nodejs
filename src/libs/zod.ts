import { z, ZodObject } from "zod";

export const schemaWithId = (object: ZodObject<any>) =>
  object.merge(z.object({ id: z.string() }));
