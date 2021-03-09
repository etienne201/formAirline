import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-passengers',
  templateUrl: './edit-passengers.component.html',
  styleUrls: ['./edit-passengers.component.css']
})
export class EditPassengersComponent implements OnInit {

  passengersForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(  
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.passengersForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      flightClass: ['', Validators.required],
       
  });
}

// convenience getter for easy access to form fields
get f() { return this.passengersForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.passengersForm.invalid) {
      return;
  }

  this.loading = true;

}
}