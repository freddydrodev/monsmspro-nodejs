import { OtpModel } from "./models/OTP";
import { UserModel } from "./models/User";

export class MonSMSPRO {
  private baseUrl = "https://rest.monsmspro.com/api";

  private apiKey: string;

  public otp: OtpModel;

  public user: UserModel;

  constructor(apiKey: string) {
    this.apiKey = apiKey;

    this.otp = new OtpModel({ apiKey: this.apiKey, baseUrl: this.baseUrl });

    this.user = new UserModel({ apiKey: this.apiKey, baseUrl: this.baseUrl });
  }
}
