import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-placeselect',
  templateUrl: './placeselect.component.html',
  styleUrls: ['./placeselect.component.css']
})
export class PlaceselectComponent implements OnInit {
  placeForm: FormGroup;
  constructor() {
    this.placeForm = new FormGroup({
      'f-place': new FormControl(),
      'l-place': new FormControl()
    });
    console.log(this.placeForm.value);
  }

  ngOnInit() {
  }

}
