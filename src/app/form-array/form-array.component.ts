import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  clientForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    address: this.formBuilder.group({
      street: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(5)]],
      state: ['', [Validators.required, Validators.minLength(5)]],
    }),
    phones: this.formBuilder.array(['']),
    children: this.formBuilder.array([
      this.formBuilder.group({
        name: [''],
        age: ['', [Validators.min(0)]],
      }),
    ]),
  });
  children = this.clientForm.controls.children as FormArray;
  phones = this.clientForm.controls.phones as FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.clientForm.value);
  }

  addPhone() {
    this.phones.push(this.formBuilder.control(''));
  }

  addChildren() {
    this.children.push(
      this.formBuilder.group({
        name: [''],
        age: [''],
      })
    );
  }
}
