import { ModelMethodType } from "@/types";
import { getOTPSchema, verifyOTPSchema } from "@/schema/otp";

import { BaseModel } from "./base";

export class OtpModel extends BaseModel {
  private path = "/auth/otp";

  public get: ModelMethodType<typeof getOTPSchema> = async (args) =>
    await this.callApi(this.path + "/get")(args);

  public verify: ModelMethodType<typeof verifyOTPSchema> = async (args) =>
    await this.callApi(this.path + "/verify")(args);
}
