import { ModelMethodType } from "@/types";

import { BaseModel } from "./base";

import { createSender, getSender, getSenderList } from "@/schema/sender";

export class SenderModel extends BaseModel {
  private path = "/sender";

  public create: ModelMethodType<typeof createSender> = async (args) =>
    await this.callApi(this.path + "/create")(args);

  public list: ModelMethodType<typeof getSenderList> = async (args) =>
    await this.callApi(this.path + "/list")(args);

  public campains: ModelMethodType<typeof getSender> = async (args) =>
    await this.callApi(this.path + "/" + args.id + "/campain")(args);
}
