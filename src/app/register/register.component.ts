import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  productForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.productForm = this.fb.group({
      name: '',
      age: '',
      price: '',
      place: '',
      adddetailes: this.fb.array([]) ,
    });
  }

  adddetailes(): FormArray {
    return this.productForm.get('adddetailes') as FormArray;
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      name: '',
      age: '',
      price: '',
      place: '',
    });
  }

  addQuantity() {
    this.adddetailes().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.adddetailes().removeAt(i);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  ngOnInit() {
  }

}
