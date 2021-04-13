import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user:any = {};
  registerForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm();
    //this.intilizeForm();
    setTimeout(() => {
      console.log("Timeout Test")
    },2000)
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

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      userName:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(8)]],
      cpassword:['', [Validators.required]],
      mobile:['', [Validators.required,Validators.maxLength(10)]]
    },{validator:this.passwordValidator})
  }

  onSubmit(): void {
    this.ownPassMatch(this.registerForm)
    console.log("Submit Works")
    console.log(this.registerForm)

    this.user = Object.assign(this.user, this.registerForm.value);
    localStorage.setItem('Users', JSON.stringify(this.user))
    this.addUser(this.user);
  }
  addUser(user: any) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user, users]
    }else{
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users))
  }

  passwordValidator(formGroup: FormGroup):Validators{
    //pass validator not working on old init. will try with FormBuilder.
    return formGroup.get('password').value === formGroup.get('cpassword').value ? null :
    {notMatched:true}
  }

  // pwValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: boolean } => {
  //       if (control.get('password').value === control.get('cpassword').value) {
  //           return { 'notMatched': true };
  //       }
  //       return null;
  //   };
  // }

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
