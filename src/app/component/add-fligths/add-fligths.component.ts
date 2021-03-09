import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fligths',
  templateUrl: './add-fligths.component.html',
  styleUrls: ['./add-fligths.component.css']
})
export class AddFligthsComponent implements OnInit {

  fligthsForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(  
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.fligthsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      flightClass: ['', Validators.required],
       
  });
}

// convenience getter for easy access to form fields
get f() { return this.fligthsForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.fligthsForm.invalid) {
      return;
  }

  this.loading = true;

}
}