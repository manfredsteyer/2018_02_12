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
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(oauthService) {
        this.oauthService = oauthService;
    }
    Object.defineProperty(AuthService.prototype, "userName", {
        get: function () {
            var claims = this.oauthService.getIdentityClaims();
            if (!claims)
                return null;
            return claims['given_name'];
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function () {
        this.oauthService.initImplicitFlow();
    };
    AuthService.prototype.logout = function () {
        this.oauthService.logOut();
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular_oauth2_oidc_1.OAuthService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map