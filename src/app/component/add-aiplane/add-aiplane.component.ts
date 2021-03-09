import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-aiplane',
  templateUrl: './add-aiplane.component.html',
  styleUrls: ['./add-aiplane.component.css']
})
export class AddAiplaneComponent implements OnInit {

  airplaneForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(  
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.airplaneForm = this.formBuilder.group({
      planeModel: ['', Validators.required],
      planeCapacity: ['', Validators.required],
       
  });
}

// convenience getter for easy access to form fields
get f() { return this.airplaneForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.airplaneForm.invalid) {
      return;
  }

  this.loading = true;

}
}