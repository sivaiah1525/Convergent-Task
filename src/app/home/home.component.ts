
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInputs = {
    travelType: '',
    departureDate: new Date(),
    departurePlace: '',
    adults: 1,
    child: 0,
    infant: 0,
    travelClass: 'Economy'
  };
  status = false;

  constructor(private router: Router) {
  }

  handleFlightSearch() {
    this.router.navigate(['/flights-layout']);
  }

  RoundTripstatus(evet) {
    if (evet.type === 'click') {
      if (this.status === false) {
        this.status = true;
      } else {
        this.status = false;

      }
    }
  }
  OneWaystatus(evet) {
    if (evet.type === 'click') {
      if (this.status === false) {
        this.status = true;
      } else {
        this.status = false;

      }    }
  }

  ngOnInit() {
  }

}
