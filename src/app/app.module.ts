import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ComponentComponent } from './component/component.component';
import { PilotsComponent } from './component/pilots/pilots.component';
import { AiplaneComponent } from './component/aiplane/aiplane.component';
import { FlightsComponent } from './component/flights/flights.component';
import { PassengersComponent } from './component/passengers/passengers.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AddPilotsComponent } from './component/add-pilots/add-pilots.component';
import { EditPilotsComponent } from './component/edit-pilots/edit-pilots.component';
import { EditPassengersComponent } from './component/edit-passengers/edit-passengers.component';
import { AddPassengersComponent } from './component/add-passengers/add-passengers.component';
import { AddFligthsComponent } from './component/add-fligths/add-fligths.component';
import { EditFligthsComponent } from './component/edit-fligths/edit-fligths.component';
import { EditAiplaneComponent } from './component/edit-aiplane/edit-aiplane.component';
import { AddAiplaneComponent } from './component/add-aiplane/add-aiplane.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ComponentComponent,
    PilotsComponent,
    AiplaneComponent,
    FlightsComponent,
    PassengersComponent,
    RegisterComponent,
    AddPilotsComponent,
    EditPilotsComponent,
    EditPassengersComponent,
    AddPassengersComponent,
    AddFligthsComponent,
    EditFligthsComponent,
    EditAiplaneComponent,
    AddAiplaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatSliderModule,
     FormsModule,
     ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
