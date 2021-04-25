import { Component, OnInit } from '@angular/core';
import { BounsService } from '../services/bouns.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
message: string ;
  constructor(private bounsService:BounsService) { }




  ngOnInit(): void {
    this.bounsService.recieve().subscribe(m=> this.message = m)
  }

}
