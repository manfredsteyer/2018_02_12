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
var FlightSearchComponent = /** @class */ (function () {
    function FlightSearchComponent(flightService) {
        this.flightService = flightService;
        this.from = 'Hamburg'; // in Germany
        this.to = 'Graz'; // in Austria
        this.urgent = false;
        // "shopping basket" with selected flights
        this.basket = {
            "3": true,
            "5": true
        };
    }
    Object.defineProperty(FlightSearchComponent.prototype, "flights", {
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlightSearchComponent.prototype, "flights$", {
        get: function () {
            return this.flightService.flights$;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchComponent.prototype.ngOnInit = function () {
    };
    FlightSearchComponent.prototype.search = function () {
        if (!this.from || !this.to)
            return;
        this.flightService
            .load(this.from, this.to, this.urgent);
    };
    FlightSearchComponent.prototype.delay = function () {
        this.flightService.delay();
    };
    FlightSearchComponent = __decorate([
        core_1.Component({
            selector: 'flight-search',
            templateUrl: './flight-search.component.html',
            styleUrls: ['./flight-search.component.css']
        }),
        __metadata("design:paramtypes", [flight_api_1.FlightService])
    ], FlightSearchComponent);
    return FlightSearchComponent;
}());
exports.FlightSearchComponent = FlightSearchComponent;
//# sourceMappingURL=flight-search.component.js.map