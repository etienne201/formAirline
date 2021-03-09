import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pilots',
  templateUrl: './add-pilots.component.html',
  styleUrls: ['./add-pilots.component.css']
})
export class AddPilotsComponent implements OnInit {

  pilotsForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
route: any;
  constructor(private formBuilder: FormBuilder,) { }
  

 
 

  
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