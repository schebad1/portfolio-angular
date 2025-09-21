import {
  HttpClient
} from "./chunk-54SHLABH.js";
import "./chunk-6IR4IWYE.js";
import {
  Inject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-7SI44FZ4.js";
import "./chunk-CO2UG7VT.js";
import {
  __publicField
} from "./chunk-NXARLJA5.js";

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var _TranslateHttpLoader = class _TranslateHttpLoader {
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    __publicField(this, "http");
    __publicField(this, "prefix");
    __publicField(this, "suffix");
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get("".concat(this.prefix).concat(lang).concat(this.suffix));
  }
};
__publicField(_TranslateHttpLoader, "ɵfac", function TranslateHttpLoader_Factory(t) {
  return new (t || _TranslateHttpLoader)(ɵɵinject(HttpClient), ɵɵinject(String), ɵɵinject(String));
});
__publicField(_TranslateHttpLoader, "ɵprov", ɵɵdefineInjectable({
  token: _TranslateHttpLoader,
  factory: _TranslateHttpLoader.ɵfac
}));
var TranslateHttpLoader = _TranslateHttpLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [String]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [String]
    }]
  }], null);
})();
export {
  TranslateHttpLoader
};
//# sourceMappingURL=@ngx-translate_http-loader.js.map
