import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  @ViewChild('f') sign_up!: NgForm;
  defaultQuestion = 'pet';
  genders = ["male","female"];
  user = {
    username: '',
    email: '',
    gender: '',
    secret: ''
  };
  submitted = false;
  constructor() { }
  ngOnInit(): void {
  }


  suggestedUserName(){
    const suggestedName = "Max";
    this.sign_up.form.patchValue({
      userData:{username:suggestedName}
    });
    
  }

  onSubmit(){ 
    this.submitted = true;
    this.user.username = this.sign_up.value.userData.username;
    this.user.email = this.sign_up.value.userData.email;
    this.user.gender = this.sign_up.value.gender;
    this.user.secret = this.sign_up.value.secret;
    this.sign_up.reset();
  }


  

}
