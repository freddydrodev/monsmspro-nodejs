import { OtpModel } from "./models/OTP";

export class MonSMSPRO {
  private baseUrl = "https://rest.monsmspro.com/api";

  private apiKey: string;

  public otp: OtpModel;

  constructor(apiKey: string) {
    this.apiKey = apiKey;

    this.otp = new OtpModel({ apiKey: this.apiKey, baseUrl: this.baseUrl });
  }
}
