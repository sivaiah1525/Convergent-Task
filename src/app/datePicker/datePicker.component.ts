import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datePicker',
  templateUrl: './datePicker.component.html',
  styleUrls: ['./datePicker.component.css']
})


  export class DatePickerComponent implements OnInit {

    @Input() set date(date) {
      this.selectedDate = new Date(date);
    };

    @Output() dateChange = new EventEmitter<Date>();

    selectedDate = new Date();
    show = false;
   
  
    constructor(private router: Router) {
    }
  
    ngOnInit() {

    }
  
    onClick() {
      this.show = !this.show
    }

    handleChange(event) {
      this.selectedDate = event.target.valueAsDate;
      this.dateChange.emit(this.selectedDate);
    }
  
    
  
  }

