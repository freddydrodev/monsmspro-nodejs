import { z, ZodObject } from "zod";

export type ModelBaseArgs = {
  apiKey: string;
  baseUrl: string;
};

export type ApiResponse<T = any> = {
  success: boolean;
  data: T;
};

export type CleanSChemaType<T extends ZodObject<any>> = Omit<
  z.input<T>,
  "apiKey" | "adminKey"
>;

export type ModelMethodTypeWithArgs<T extends ZodObject<any>, K = any> = (
  args: CleanSChemaType<T>
) => Promise<ApiResponse<K>>;

export type ModelMethodTypeWithoutArgs<K = any> = () => Promise<ApiResponse<K>>;

export type ModelMethodType<T extends ZodObject<any>, K = any> =
  | ModelMethodTypeWithArgs<T, K>
  | ModelMethodTypeWithoutArgs<K>;

export type BaseModelCallApiType<T extends ZodObject<any>, K = any> = (
  path: string
) => ModelMethodType<T, K>;

export type SchemaWithId<T extends ZodObject<any>> = z.infer<T> & {
  id: string;
};
