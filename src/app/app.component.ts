import { Component,OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root ',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(ProductsComponent) productsComponent:ProductsComponent;

  title = 'Angular Course';


  renderProducts(){
    this.productsComponent.rendreValues()
  }
}

// The @Component decorator identifies 
// the class immediately below it as a component class, and specifies its metadata
