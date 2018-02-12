import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExitComponent } from '../../shared/exit/exit.guard';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { of } from 'rxjs/observable/of';
import { Flight } from '@flight-workspace/flight-api';
import { delay } from 'rxjs';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit, ExitComponent {
  id: string;
  showDetails: string;
  flight: Flight;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });

    this.route.data.subscribe(data => {
      this.flight = data['flight'];
    })
  }

  sender: Observer<boolean>;
  showWarning: boolean = false;

  decide(decision: boolean): void {
    this.showWarning = false;
    this.sender.next(decision);
    this.sender.complete();
  }

  canExit(): Observable<boolean> {
    //return of(true);

    return Observable.create((sender: Observer<boolean>) => {
      this.sender = sender;
      this.showWarning = true;
    })

  }

  delete() {
    console.debug('Delete -- not implemented yet!');
  }

}
