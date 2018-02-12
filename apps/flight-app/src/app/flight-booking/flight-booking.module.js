"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@ngx-translate/core");
var core_2 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var flight_search_component_1 = require("./flight-search/flight-search.component");
var flight_card_component_1 = require("./flight-card/flight-card.component");
var passenger_search_component_1 = require("./passenger-search/passenger-search.component");
var router_1 = require("@angular/router");
var flight_booking_routes_1 = require("./flight-booking.routes");
var flight_edit_component_1 = require("./flight-edit/flight-edit.component");
var flight_booking_component_1 = require("./flight-booking.component");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var airport_component_1 = require("./airport/airport.component");
var FlightBookingModule = /** @class */ (function () {
    function FlightBookingModule() {
    }
    FlightBookingModule = __decorate([
        core_2.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_oauth2_oidc_1.OAuthModule,
                core_1.TranslateModule,
                shared_module_1.SharedModule.forChild(),
                router_1.RouterModule.forChild(flight_booking_routes_1.FLIGHT_BOOKING_ROUTES)
            ],
            declarations: [
                flight_search_component_1.FlightSearchComponent,
                flight_card_component_1.FlightCardComponent,
                passenger_search_component_1.PassengerSearchComponent,
                flight_edit_component_1.FlightEditComponent,
                flight_booking_component_1.FlightBookingComponent,
                airport_component_1.AirportComponent
            ],
            providers: [],
            exports: [
                flight_search_component_1.FlightSearchComponent
            ]
        })
    ], FlightBookingModule);
    return FlightBookingModule;
}());
exports.FlightBookingModule = FlightBookingModule;
//# sourceMappingURL=flight-booking.module.js.map