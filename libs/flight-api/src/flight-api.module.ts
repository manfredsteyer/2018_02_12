import { FlightService } from './services/flight.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportService } from './services/airport.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class FlightApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FlightApiModule,
      providers: [ 
        FlightService,
        AirportService
      ]
    }
  }
}
