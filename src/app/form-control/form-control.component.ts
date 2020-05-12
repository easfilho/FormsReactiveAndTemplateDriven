import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
})
export class FormControlComponent implements OnInit {
  clientForm = this.formBuilder.group({
    firstName: [''],
    lastName: ['']
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  setFirstName() {
    this.clientForm.controls.firstName.setValue('John');
  }

  submit() {
    console.log(this.clientForm.value);
  }
}
