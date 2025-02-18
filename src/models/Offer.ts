import { ModelMethodTypeWithoutArgs } from "@/types";

import { BaseModel } from "./base";

export class OfferModel extends BaseModel {
  private path = "/offer";

  public credit: ModelMethodTypeWithoutArgs<any> = async () =>
    await (this.callApi(this.path + "/list") as ModelMethodTypeWithoutArgs)();
}
