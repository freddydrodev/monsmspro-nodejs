import { ZodObject, z } from 'zod';
import Axios from 'redaxios';

type ModelBaseArgs = {
    apiKey: string;
    baseUrl: string;
};
type ApiResponse<T = any> = {
    success: boolean;
    data: T;
};
type CleanSChemaType<T extends ZodObject<any>> = Omit<z.input<T>, "apiKey" | "adminKey">;
type ModelMethodType<T extends ZodObject<any>, K = any> = (args: CleanSChemaType<T>) => Promise<ApiResponse<K>>;
type BaseModelCallApiType<T extends ZodObject<any>, K = any> = (path: string) => ModelMethodType<T, K>;

declare const getOTPSchema: z.ZodObject<z.objectUtil.extendShape<{
    apiKey: z.ZodString;
    adminKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, {
    phoneNumber: z.ZodString;
    length: z.ZodDefault<z.ZodNumber>;
    mode: z.ZodDefault<z.ZodEnum<["NUMERIC", "ALPHABET", "ALPHA_NUMERIC"]>>;
    senderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    appName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    apiKey: string;
    length: number;
    phoneNumber: string;
    mode: "NUMERIC" | "ALPHABET" | "ALPHA_NUMERIC";
    adminKey?: string | null | undefined;
    senderId?: string | null | undefined;
    appName?: string | null | undefined;
}, {
    apiKey: string;
    phoneNumber: string;
    adminKey?: string | null | undefined;
    length?: number | undefined;
    mode?: "NUMERIC" | "ALPHABET" | "ALPHA_NUMERIC" | undefined;
    senderId?: string | null | undefined;
    appName?: string | null | undefined;
}>;
declare const verifyOTPSchema: z.ZodObject<{
    token: z.ZodString;
    otp: z.ZodString;
    phoneNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    token: string;
    otp: string;
    phoneNumber?: string | null | undefined;
}, {
    token: string;
    otp: string;
    phoneNumber?: string | null | undefined;
}>;

declare class BaseModel {
    protected apiKey: string;
    protected baseUrl: string;
    axios: typeof Axios;
    constructor(args: ModelBaseArgs);
    callApi: BaseModelCallApiType<any, any>;
}

declare class OtpModel extends BaseModel {
    private path;
    get: ModelMethodType<typeof getOTPSchema>;
    verify: ModelMethodType<typeof verifyOTPSchema>;
}

declare class MonSMSPRO {
    private baseUrl;
    private apiKey;
    otp: OtpModel;
    constructor(apiKey: string);
}

export { MonSMSPRO };
