import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../shared classes and types/IUser';
import { matchPassword } from '../validationfuncs/matchPassword';
import { usernamePatternValidation } from '../validationfuncs/usernamePatternValidation';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  // registerForm=this.fb.group({
  //   userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/admin/)]],
  //   password:[''],
  //   confirmPassword:[''],
  //   email:[''],
  //   alternativeEmails:this.fb.array([]),
  //   subscribe:[false],
  //   address:this.fb.group({
  //     street:this.fb.group({
  //       addressNo:[''],
  //       addressLine:['']
  //     }),
  //     state:[''],
  //     city:[''],
  //     postalCode:['']
  //   })
  // },{validators:[ConfirmPassword]});

  registerForm=this.fb.group({
    name:['',[Validators.required]],
    username:['',[Validators.required,usernamePatternValidation(/^[a-zA-Z]+$/)]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    email:['',[Validators.required,usernamePatternValidation(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    wheredidyouhear:['',[Validators.required]],
  },{validators:[matchPassword]});



  get name()
  {
    return this.registerForm.get('name');
  }

  get username()
  {
    return this.registerForm.get('username');
  }

  get email()
  {
    return this.registerForm.get('email');
  }

  get password()
  {
    return this.registerForm.get('password');
  }

  get confirmPassword()
  {
    return this.registerForm.get('confirmPassword');
  }

  get wheredidyouhear()
  {
    return this.registerForm.get('wheredidyouhear');
  }
  constructor(private fb:FormBuilder) { }
  userModel:IUser={name: '', email: '', password:'',username:'',wheredidyouhear:''}
  platforms=['facebook', 'twitter', 'instgram']

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.registerForm.value);
  }

}
