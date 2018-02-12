"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flight_search_component_1 = require("./flight-search/flight-search.component");
var passenger_search_component_1 = require("./passenger-search/passenger-search.component");
var flight_edit_component_1 = require("./flight-edit/flight-edit.component");
var flight_booking_component_1 = require("./flight-booking.component");
var exit_guard_1 = require("../shared/exit/exit.guard");
var airport_component_1 = require("./airport/airport.component");
exports.FLIGHT_BOOKING_ROUTES = [
    {
        path: 'flight-booking',
        component: flight_booking_component_1.FlightBookingComponent,
        // canActivate: [AuthGuard],
        children: [
            {
                path: 'airports',
                component: airport_component_1.AirportComponent
            },
            {
                path: 'flight-search',
                component: flight_search_component_1.FlightSearchComponent
            },
            {
                path: 'passenger-search',
                component: passenger_search_component_1.PassengerSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: flight_edit_component_1.FlightEditComponent,
                canDeactivate: [exit_guard_1.ExitGuard]
            }
        ]
    }
];
//# sourceMappingURL=flight-booking.routes.js.map