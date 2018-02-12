import { Flight } from '../models/flight';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class FlightService {

  constructor(private http: HttpClient) {
    this.flights$ = this.flightsSubject.asObservable();
  }

  flights: Flight[] = [];
  flights$: Observable<Flight[]>

  private flightsSubject = new Subject<Flight[]>();

  load(from: string, to: string, urgent: boolean): void {
    this.find(from, to, urgent).subscribe(
      flights => {
        this.flights = flights;
        this.flightsSubject.next(flights);
      },
      err => console.error('Error loading flights', err)
    );
  }

  findById(id: string): Observable<Flight> {

    let url = 'http://www.angular.at/api/flight';


    let params = new HttpParams()
      .set('id', id);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Flight>(url, {params, headers});

  }



  find(from: string, to: string, urgent: boolean = false): Observable<Flight[]> {

    let url = 'http://www.angular.at/api/flight';

    if (urgent) {
      url = 'http://www.angular.at/api/error?code=403';
    }

    let params = new HttpParams()
      .set('from', from)
      .set('to', to);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers});

  }

  delay() {
    const ONE_MINUTE = 1000 * 60;

    let oldFlights = this.flights;
    let oldFlight = oldFlights[0];
    let oldDate = new Date(oldFlight.date);
    
    // Mutable
    oldDate.setTime(oldDate.getTime() + 15 * ONE_MINUTE );
    oldFlight.date = oldDate.toISOString();

    // Immutable
    /*
    let newDate = new Date(oldDate.getTime() + 15 * ONE_MINUTE);
    let newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };
    let newFlights = [ newFlight, ...oldFlights.slice(1) ]
    this.flights = newFlights;

    this.flightsSubject.next(this.flights);
    */
  }


}
