import { ModelMethodType } from "@/types";

import { BaseModel } from "./base";

import {
  createContact,
  deleteContact,
  getContactList,
  updateContact,
} from "@/schema/contact";

export class ContactModel extends BaseModel {
  private path = "/contact";

  public create: ModelMethodType<typeof createContact> = async (args) =>
    await this.callApi(this.path + "/create")(args);

  public list: ModelMethodType<typeof getContactList> = async (args) =>
    await this.callApi(this.path + "/list")(args);

  public delete: ModelMethodType<typeof deleteContact> = async (args) =>
    await this.callApi(this.path + "/delete")(args);

  public update: ModelMethodType<typeof updateContact> = async (args) =>
    await this.callApi(this.path + "/" + args.id + "/campain")(args);
}
