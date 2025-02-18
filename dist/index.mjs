var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/models/base.ts
import Axios from "redaxios";
var BaseModel = class {
  constructor(args) {
    this.callApi = (path) => {
      const func = (args) => __async(this, null, function* () {
        const response = yield this.axios.post(`${this.baseUrl}${path}`, __spreadProps(__spreadValues({}, args), {
          apiKey: this.apiKey
        }));
        return response.data;
      });
      return func;
    };
    this.apiKey = args.apiKey;
    this.baseUrl = args.baseUrl;
    this.axios = Axios;
  }
};

// src/models/OTP.ts
var OtpModel = class extends BaseModel {
  constructor() {
    super(...arguments);
    this.path = "/auth/otp";
    this.get = (args) => __async(this, null, function* () {
      return yield this.callApi(this.path + "/get")(args);
    });
    this.verify = (args) => __async(this, null, function* () {
      return yield this.callApi(this.path + "/verify")(args);
    });
  }
};

// src/models/User.ts
var UserModel = class extends BaseModel {
  constructor() {
    super(...arguments);
    this.path = "/user";
    this.credit = () => __async(this, null, function* () {
      return yield this.callApi(this.path + "/credit")();
    });
  }
};

// src/index.ts
var MonSMSPRO = class {
  constructor(apiKey) {
    this.baseUrl = "https://rest.monsmspro.com/api";
    this.apiKey = apiKey;
    this.otp = new OtpModel({ apiKey: this.apiKey, baseUrl: this.baseUrl });
    this.user = new UserModel({ apiKey: this.apiKey, baseUrl: this.baseUrl });
  }
};
export {
  MonSMSPRO
};
//# sourceMappingURL=index.mjs.map