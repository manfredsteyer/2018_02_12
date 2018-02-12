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
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var operators_1 = require("rxjs/operators");
var throw_1 = require("rxjs/observable/throw");
var router_1 = require("@angular/router");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.url.startsWith('http://www.angular.at')) {
            var headers = req.headers
                .set('Authorization', 'Bearer ' + this.storage.getItem('access_token'));
            req = req.clone({ headers: headers });
        }
        return next
            .handle(req)
            .pipe(operators_1.catchError(function (error) { return _this.handleError(error); }));
    };
    AuthInterceptor.prototype.handleError = function (event) {
        if (event.status == 401 || event.status == 403) {
            this.router.navigate(['/home', { needsLogin: true }]);
        }
        return throw_1._throw(event);
    };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular_oauth2_oidc_1.OAuthStorage, router_1.Router])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=auth.interceptor.js.map