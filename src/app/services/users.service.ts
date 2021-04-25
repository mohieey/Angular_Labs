import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared classes and types/IUser';
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }



  getAllUsers():Observable<IUser[]>
  {
   return this.http.get<IUser[]>("https://jsonplaceholder.typicode.com/users").pipe(catchError((err)=>{
     return throwError(err.message || "Internal Server Error Please contact site adminstarator")
   })
   )
  }

}
