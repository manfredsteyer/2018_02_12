"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var auth_config_1 = require("./auth.config");
var core_2 = require("@ngx-translate/core");
var logger_lib_1 = require("logger-lib");
var AppComponent = /** @class */ (function () {
    function AppComponent(loggerService, oauthService, router, translate) {
        this.loggerService = loggerService;
        this.oauthService = oauthService;
        this.router = router;
        this.translate = translate;
        this.loggerService.log('log');
        this.loggerService.debug('debug');
        this.translate.addLangs(['en', 'de']);
        this.translate.setDefaultLang('de');
        this.translate.use('de');
        this.oauthService.configure(auth_config_1.authConfig);
        this.oauthService.tokenValidationHandler = new angular_oauth2_oidc_1.JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'flight-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [logger_lib_1.LoggerService,
            angular_oauth2_oidc_1.OAuthService,
            router_1.Router,
            core_2.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map