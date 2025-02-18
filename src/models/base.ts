import { BaseModelCallApiType, ModelBaseArgs, ModelMethodType } from "@/types";
import Axios from "redaxios";

export class BaseModel {
  protected apiKey: string;

  protected baseUrl: string;

  protected axios: typeof Axios;

  constructor(args: ModelBaseArgs) {
    this.apiKey = args.apiKey;
    this.baseUrl = args.baseUrl;
    this.axios = Axios;
  }

  protected callApi: BaseModelCallApiType<any, any> = (path) => {
    const func: ModelMethodType<any, any> = async (args) => {
      const response = await this.axios.post(`${this.baseUrl}${path}`, {
        ...args,
        apiKey: this.apiKey,
      });

      return response.data;
    };

    return func;
  };
}
