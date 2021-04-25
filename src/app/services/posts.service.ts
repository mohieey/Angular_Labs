import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IPost } from '../shared classes and types/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }


  getAllPosts():Observable<IPost[]>
  {
   return this.http.get<IPost[]>("https://jsonplaceholder.typicode.com/posts").pipe(catchError((err)=>{
     return throwError(err.message || "Internal Server Error Please contact site adminstarator")
   })
   )
  }


  getPost(id):Observable<IPost>
  {
   return this.http.get<IPost>("https://jsonplaceholder.typicode.com/posts/"+id).pipe(catchError((err)=>{
     return throwError(err.message || "Internal Server Error Please contact site adminstarator")
   })
   )
  }


  getAllComments(id):Observable<IPost[]>
  {
   return this.http.get<IPost[]>("https://jsonplaceholder.typicode.com/posts/"+id+"/comments").pipe(catchError((err)=>{
     return throwError(err.message || "Internal Server Error Please contact site adminstarator")
   })
   )
  }

}
