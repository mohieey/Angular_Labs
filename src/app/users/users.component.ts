import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUser } from '../shared classes and types/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userstService:UsersService) { }

Users:IUser[];
errorMessage:string;

  ngOnInit(): void {


this.userstService.getAllUsers().subscribe(
  users=>
  {
    this.Users = users;
  },
  responseError=>
  {
    this.errorMessage=responseError;
  }
)
  }

}
