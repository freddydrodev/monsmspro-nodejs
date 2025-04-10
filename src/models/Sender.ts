import { ModelMethodType, ModelMethodTypeWithoutArgs } from "@/types";

import { BaseModel } from "./base";

import { createSender, getSender, getSenderList } from "@/schema/sender";

export class SenderModel extends BaseModel {
  private path = "/sender";

  public create: ModelMethodType<typeof createSender> = async (args) =>
    await this.callApi(this.path + "/create")(args);

  public list: ModelMethodTypeWithoutArgs<any> = async () =>
    await (this.callApi(this.path + "/list") as ModelMethodTypeWithoutArgs)();

  public campains: ModelMethodType<typeof getSender> = async (args) =>
    await this.callApi(this.path + "/" + args.id + "/campain")(args);
}
