import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-pilots',
  templateUrl: './edit-pilots.component.html',
  styleUrls: ['./edit-pilots.component.css']
})
export class EditPilotsComponent implements OnInit {

  pilotsForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(  
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    
    this.pilotsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      name: ['', Validators.required],
      license: ['', Validators.required]
  });


}

// convenience getter for easy access to form fields
get f() { return this.pilotsForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.pilotsForm.invalid) {
      return;
  }

  this.loading = true;
   
}
}