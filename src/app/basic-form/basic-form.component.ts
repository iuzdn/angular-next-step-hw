import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  myForm: FormGroup;
  contacts: Contact[];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(65)]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.contacts = [
      {
        name: 'Ion',
        age: 18,
        email: 'ion@yahoo.com',
      },
      {
        name: 'Tudor',
        age: 19,
        email: 'tudor@gmail.com',
      },
    ];

    this.myForm.valueChanges.subscribe(console.log);
  }

  get name() {
    return this.myForm.get('name');
  }

  get age() {
    return this.myForm.get('age');
  }

  get email() {
    return this.myForm.get('email');
  }

  submitHandler() {
    this.contacts = [...this.contacts, this.myForm.value];
  }
}
