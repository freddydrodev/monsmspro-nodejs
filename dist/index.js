"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  MonSMSPRO: () => MonSMSPRO
});
module.exports = __toCommonJS(index_exports);

// src/models/base.ts
var import_redaxios = __toESM(require("redaxios"));
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
    this.axios = import_redaxios.default;
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

// src/index.ts
var MonSMSPRO = class {
  constructor(apiKey) {
    this.baseUrl = "https://rest.monsmspro.com/api";
    this.apiKey = apiKey;
    this.otp = new OtpModel({ apiKey: this.apiKey, baseUrl: this.baseUrl });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MonSMSPRO
});
//# sourceMappingURL=index.js.map