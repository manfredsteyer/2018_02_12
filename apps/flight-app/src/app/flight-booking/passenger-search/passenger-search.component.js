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
var auth_service_1 = require("../../shared/auth/auth.service");
var PassengerSearchComponent = /** @class */ (function () {
    function PassengerSearchComponent(userService) {
        this.userService = userService;
    }
    PassengerSearchComponent.prototype.ngOnInit = function () {
        console.debug('user', this.userService.userName);
    };
    PassengerSearchComponent = __decorate([
        core_1.Component({
            selector: 'app-passenger-search',
            templateUrl: './passenger-search.component.html',
            styleUrls: ['./passenger-search.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], PassengerSearchComponent);
    return PassengerSearchComponent;
}());
exports.PassengerSearchComponent = PassengerSearchComponent;
//# sourceMappingURL=passenger-search.component.js.map