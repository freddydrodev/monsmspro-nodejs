import { CampainModel } from "./models/Campain";
import { ContactModel } from "./models/Contact";
import { OfferModel } from "./models/Offer";
import { OtpModel } from "./models/OTP";
import { SenderModel } from "./models/Sender";
import { UserModel } from "./models/User";

export class MonSMSPRO {
  private baseUrl = "https://rest.monsmspro.com/api";

  private apiKey: string;

  public user: UserModel;

  public offer: OfferModel;

  public otp: OtpModel;

  public sender: SenderModel;

  public campain: CampainModel;

  public contact: ContactModel;

  // TODO: ADD GROUPE

  // TODO: ADD TEMPLATE

  constructor(apiKey: string) {
    this.apiKey = apiKey;

    this.user = new UserModel({ apiKey: this.apiKey, baseUrl: this.baseUrl });

    this.offer = new OfferModel({ apiKey: this.apiKey, baseUrl: this.baseUrl });

    this.otp = new OtpModel({ apiKey: this.apiKey, baseUrl: this.baseUrl });

    this.sender = new SenderModel({
      apiKey: this.apiKey,
      baseUrl: this.baseUrl,
    });

    this.campain = new CampainModel({
      apiKey: this.apiKey,
      baseUrl: this.baseUrl,
    });

    this.contact = new ContactModel({
      apiKey: this.apiKey,
      baseUrl: this.baseUrl,
    });
  }
}
