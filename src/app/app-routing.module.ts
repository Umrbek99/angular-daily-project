import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HttpRequestsComponent } from './http-requests/http-requests.component';

import { PipesComponent } from './pipes/pipes.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path:"",redirectTo:"http",pathMatch:'full'},
  {path:"",component:AppComponent},
  {path:"forms",component:FormsComponent},
  {path:"http",component:HttpRequestsComponent},
  {path:"reactive-forms",component:ReactiveFormsComponent},
  {path:"pipes",component:PipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
