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

export type ModelMethodType<T extends ZodObject<any>, K = any> = (
  args: CleanSChemaType<T>
) => Promise<ApiResponse<K>>;

export type BaseModelCallApiType<T extends ZodObject<any>, K = any> = (
  path: string
) => ModelMethodType<T, K>;
