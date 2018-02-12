import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PassengerSearchComponent implements OnInit {

  constructor(private userService: AuthService) { }

  ngOnInit() {
    console.debug('user', this.userService.userName);
  }

}
