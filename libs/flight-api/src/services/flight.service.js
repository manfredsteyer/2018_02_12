"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var http_1 = require("@angular/common/http");
var Subject_1 = require("rxjs/Subject");
var FlightService = /** @class */ (function () {
    function FlightService(http) {
        this.http = http;
        this.flights = [];
        this.flightsSubject = new Subject_1.Subject();
        this.flights$ = this.flightsSubject.asObservable();
    }
    FlightService.prototype.load = function (from, to, urgent) {
        var _this = this;
        this.find(from, to, urgent).subscribe(function (flights) {
            _this.flights = flights;
            _this.flightsSubject.next(flights);
        }, function (err) { return console.error('Error loading flights', err); });
    };
    FlightService.prototype.find = function (from, to, urgent) {
        if (urgent === void 0) { urgent = false; }
        var url = 'http://www.angular.at/api/flight';
        if (urgent) {
            url = 'http://www.angular.at/api/error?code=403';
        }
        var params = new http_1.HttpParams()
            .set('from', from)
            .set('to', to);
        var headers = new http_1.HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.get(url, { params: params, headers: headers });
    };
    FlightService.prototype.delay = function () {
        var ONE_MINUTE = 1000 * 60;
        var oldFlights = this.flights;
        var oldFlight = oldFlights[0];
        var oldDate = new Date(oldFlight.date);
        // Mutable
        // oldDate.setTime(oldDate.getTime() + 15 * ONE_MINUTE );
        // oldFlight.date = oldDate.toISOString();
        // Immutable
        var newDate = new Date(oldDate.getTime() + 15 * ONE_MINUTE);
        var newFlight = __assign({}, oldFlight, { date: newDate.toISOString() });
        var newFlights = [newFlight].concat(oldFlights.slice(1));
        this.flights = newFlights;
        this.flightsSubject.next(this.flights);
    };
    FlightService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FlightService);
    return FlightService;
}());
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map