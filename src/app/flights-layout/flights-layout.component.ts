import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights-layout',
  templateUrl: './flights-layout.component.html',
  styleUrls: ['./flights-layout.component.css']
})
export class FlightsLayoutComponent implements OnInit {
  data: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.data = [
      {
        date: '12/12/20',
        time: '12:5 PM',
        from: 'chennai',
        to: 'Singapore',
        price: '9,00,000',
      },
      {
        date: '12/12/20',
        time: '12:15 PM',
        from: 'chennai',
        to: 'Singapore',
        price: '10,00,000',
      },
      {
        date: '12/12/20',
        time: '12:30 PM',
        from: 'chennai',
        to: 'Singapore',
        price: '11,00,000',
      },
      {
        date: '12/12/20',
        time: '5:30 AM',
        from: 'chennai',
        to: 'Singapore',
        price: '8,00,000',
      },
      {
        date: '12/12/20',
        time: '7:30 AM',
        from: 'chennai',
        to: 'Singapore',
        price: '10,00,000',
      },
    ];
  }
  gotopassenger() {
    this.router.navigate(['register']);
  }



}
