import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ComponentComponent } from './component/component.component';
import { PilotsComponent } from './component/pilots/pilots.component';
import { AiplaneComponent } from './component/aiplane/aiplane.component';
import { FlightsComponent } from './component/flights/flights.component';
import { PassengersComponent } from './component/passengers/passengers.component';
import { RegisterComponent } from './register/register.component';
import { AddPilotsComponent } from './component/add-pilots/add-pilots.component';
import { EditPilotsComponent } from './component/edit-pilots/edit-pilots.component';
import { EditPassengersComponent } from './component/edit-passengers/edit-passengers.component';
import { AddPassengersComponent } from './component/add-passengers/add-passengers.component';
import { AddFligthsComponent } from './component/add-fligths/add-fligths.component';
import { EditFligthsComponent } from './component/edit-fligths/edit-fligths.component';
import { EditAiplaneComponent } from './component/edit-aiplane/edit-aiplane.component';
import { AddAiplaneComponent } from './component/add-aiplane/add-aiplane.component';

const routes: Routes = [
  { path: '', component: ComponentComponent },
  { path: 'airline', component: ComponentComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'aiplane', component: AiplaneComponent  },
  { path: 'pilots', component: PilotsComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'passengers', component: PassengersComponent},
  { path: 'add-pilots', component: AddPilotsComponent },
  { path: 'edit-pilots', component: EditPilotsComponent },
  { path: 'edit-passengers', component: EditPassengersComponent},
  { path: 'add-passengers', component: AddPassengersComponent},
  { path: 'add-fligths', component: AddFligthsComponent  },
  { path: 'edit-fligths', component: EditFligthsComponent },
  { path: 'adit-aiplane', component:  EditAiplaneComponent},
  { path: 'add-airplane', component:  AddAiplaneComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
