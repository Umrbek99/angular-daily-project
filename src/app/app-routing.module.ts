import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path:"",redirectTo:"about",pathMatch:'full'},
  {path:"",component:AppComponent},
  {path:"about",component:AboutComponent},
  {path:"home",component:HomeComponent},
  {path:"forms",component:FormsComponent},
  {path:"reactive-forms",component:ReactiveFormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
