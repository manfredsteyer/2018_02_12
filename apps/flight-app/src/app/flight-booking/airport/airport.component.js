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
var flight_api_1 = require("@flight-workspace/flight-api");
var AirportComponent = /** @class */ (function () {
    function AirportComponent(airportService) {
        this.airportService = airportService;
        this.airports = [];
    }
    AirportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.airportService.findAll().subscribe(function (airports) {
            _this.airports = airports;
        });
    };
    AirportComponent = __decorate([
        core_1.Component({
            selector: 'app-airport',
            templateUrl: './airport.component.html',
            styleUrls: ['./airport.component.css']
        }),
        __metadata("design:paramtypes", [flight_api_1.AirportService])
    ], AirportComponent);
    return AirportComponent;
}());
exports.AirportComponent = AirportComponent;
//# sourceMappingURL=airport.component.js.map