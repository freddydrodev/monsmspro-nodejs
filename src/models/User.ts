import { ModelMethodTypeWithoutArgs } from "@/types";

import { BaseModel } from "./base";

export class UserModel extends BaseModel {
  private path = "/user";

  public credit: ModelMethodTypeWithoutArgs<any> = async () =>
    await (this.callApi(this.path + "/credit") as ModelMethodTypeWithoutArgs)();
}
