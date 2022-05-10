import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomValidators } from '../validators/custom-validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  // genders = ["male","female"];
  // signUpForm!:FormGroup;
  // forbiddenUserNames = ['Chris','Qwer'];
  constructor() { }

  ngOnInit(): void {
    // this.signUpForm = new FormGroup({
    //   'userData':new FormGroup({
    //     'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
    //     'email':new FormControl(null,[Validators.required,Validators.email])  
    //   }),
    //   'gender':new FormControl("male"),
    //   'hobbies':new FormArray([])  
    // });

    this.project = new FormGroup({
      'projectName':new FormControl(null,[Validators.required,CustomValidators.invalidProjectName as any]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'status':new FormControl("stable"),
    });

    
  } 


  // onSubmit(){
  //   console.log(this.signUpForm);   
  // }

  // onAddHobby(){
  //   const control =new FormControl(null,Validators.required);
  //   (<FormArray>this.signUpForm.get('hobbies')).push(control);
  // }

  // getControls() {
  //   return (this.signUpForm.get('hobbies') as FormArray).controls;
  // }

  // forbiddenNames(control:FormControl):{[s:string]:boolean}{
  //   if(this.forbiddenUserNames.indexOf(control.value)){
  //     return {'nameIsForbidden':true}
  //   }
  //   return null as any;
  // }


  /* Assignment */
  projectStatus=["stable","critical","finished"];
  project!:FormGroup;

  onSubmit(){
    console.log(this.project);
  }



}
