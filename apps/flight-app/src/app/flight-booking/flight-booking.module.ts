import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingComponent } from './flight-booking.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AirportComponent } from './airport/airport.component';
import { FlightResolver } from './flight-edit/flight.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OAuthModule,
    TranslateModule,
    SharedModule.forChild(),
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent,
    FlightBookingComponent,
    AirportComponent
  ],
  providers: [
    FlightResolver
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
