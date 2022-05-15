import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService,AuthResponseData } from './auth-service/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLogin = true;
  error:any = null;
  onLoginMode(){
    this.isLogin = !this.isLogin;
  }
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


  onSubmit(authForm:NgForm){
    if(!authForm.valid){
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;
    let authObs = new Observable<AuthResponseData>();

    if(this.isLogin){
      authObs =  this.authService.login(email,password);
    }
    else {
      authObs = this.authService.signup(email,password);
    }

    authObs.subscribe({
      next:(r) => {this.error = null,console.log(r)},
      error:(e) => {this.error = e},
      complete:() => {},
    })





    authForm.reset();
  }



}
