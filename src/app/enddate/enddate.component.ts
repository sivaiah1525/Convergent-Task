import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enddate',
  templateUrl: './enddate.component.html',
  styleUrls: ['./enddate.component.css']
})



  export class EnddateComponent implements OnInit {
    show = false;
    startDate;
    date: any;
    month: any;
    year: any;
    dateend: any;
    monthend: any;
    yearend: any;
    monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    constructor(private router: Router) {
      this.onChange();
    }
  
    ngOnInit() {
    }
  
    onClick() {
      this.show = !this.show
    }

    onChange() {
      const inputDate =  new Date();
      this.date = inputDate.getDate();
      this.month = this.monthNames[inputDate.getMonth()];
      this.year = inputDate.getFullYear();
      this.startDate = [inputDate.getFullYear(), inputDate.getMonth() + 1, inputDate.getDate()].join('-');
    }
    onchange() {
      const inputDate =  new Date();
      this.dateend = inputDate.getDate();
      this.monthend = this.monthNames[inputDate.getMonth()];
      this.yearend = inputDate.getFullYear();
      this.startDate = [inputDate.getFullYear(), inputDate.getMonth() + 1, inputDate.getDate()].join('-');
    }
  
  }
  
  


