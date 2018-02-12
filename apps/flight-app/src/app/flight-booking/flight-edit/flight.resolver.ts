import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Flight, FlightService } from '@flight-workspace/flight-api';
import { delay } from 'rxjs/operators';

@Injectable()
export class FlightResolver implements Resolve<Flight> {

    constructor(private flightService: FlightService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Flight>{
        let id = route.params['id'];
        return this.flightService.findById(id); //.pipe(delay(5000));
    }

}