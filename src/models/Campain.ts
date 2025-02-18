import { ModelMethodType } from "@/types";

import { BaseModel } from "./base";

import { createCampain } from "@/schema/campain";

export class CampainModel extends BaseModel {
  private path = "/campain";

  public create: ModelMethodType<typeof createCampain> = async (args) =>
    await this.callApi(this.path + "/create")(args);
}
