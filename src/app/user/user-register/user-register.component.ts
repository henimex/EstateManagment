import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.intilizeForm();
  }

  intilizeForm(): void {
    this.registerForm = new FormGroup({
      userName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      cpassword: new FormControl('',[Validators.required]),
      mobile: new FormControl('',[Validators.required,Validators.maxLength(10)]),
    });
  }

  onSubmit(): void {
    this.ownPassMatch(this.registerForm)
    console.log("Submit Works")
    console.log(this.registerForm)
  }

  passwordValidator(formGroup: FormGroup){
    //pass validator not working on old init. will try with FormBuilder.
    return formGroup.get('password').value === formGroup.get('cpassword').value ? null :
    {notMatched:true}
  }

  ownPassMatch(ownGroup: FormGroup):Boolean {
    if (ownGroup.get('password').value === ownGroup.get('cpassword').value) {
      console.log("PW Match")
      return true
    }
    console.log("PW Not Match")
    return false
  }

  getFormValue(member:string){
    return this.registerForm.get(member.toString()) as FormControl
  }

  get userName(){
    return this.registerForm.get('userName') as FormControl;
  }

  get email(){
    return this.registerForm.get('email') as FormControl;
  }

  get password(){
    return this.registerForm.get('password') as FormControl;
  }

  get cpassword(){
    return this.registerForm.get('cpassword') as FormControl;
  }

  get mobile(){
    return this.registerForm.get('mobile') as FormControl;
  }

}
