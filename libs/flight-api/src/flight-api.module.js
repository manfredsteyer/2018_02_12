"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var flight_service_1 = require("./services/flight.service");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var airport_service_1 = require("./services/airport.service");
var FlightApiModule = /** @class */ (function () {
    function FlightApiModule() {
    }
    FlightApiModule_1 = FlightApiModule;
    FlightApiModule.forRoot = function () {
        return {
            ngModule: FlightApiModule_1,
            providers: [
                flight_service_1.FlightService,
                airport_service_1.AirportService
            ]
        };
    };
    FlightApiModule = FlightApiModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ]
        })
    ], FlightApiModule);
    return FlightApiModule;
    var FlightApiModule_1;
}());
exports.FlightApiModule = FlightApiModule;
//# sourceMappingURL=flight-api.module.js.map