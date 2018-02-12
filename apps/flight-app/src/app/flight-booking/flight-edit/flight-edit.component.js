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
var Observable_1 = require("rxjs/Observable");
var FlightEditComponent = /** @class */ (function () {
    function FlightEditComponent(route) {
        this.route = route;
        this.showWarning = false;
    }
    FlightEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
            _this.showDetails = p['showDetails'];
        });
    };
    FlightEditComponent.prototype.decide = function (decision) {
        this.sender.next(decision);
        this.sender.complete();
        this.showWarning = false;
    };
    FlightEditComponent.prototype.canExit = function () {
        var _this = this;
        return Observable_1.Observable.create(function (sender) {
            _this.sender = sender;
            _this.showWarning = true;
        });
    };
    FlightEditComponent = __decorate([
        core_1.Component({
            selector: 'app-flight-edit',
            templateUrl: './flight-edit.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], FlightEditComponent);
    return FlightEditComponent;
}());
exports.FlightEditComponent = FlightEditComponent;
//# sourceMappingURL=flight-edit.component.js.map