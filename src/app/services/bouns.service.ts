import { Injectable } from '@angular/core';
import {Subject, Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BounsService {
  subject=new Subject<string>();
  send(m:string){
    console.log(m,'is sent');
    this.subject.next(m);
  }
  recieve():Observable<string> {
    return this.subject.asObservable();
  }

  constructor() { }
}
