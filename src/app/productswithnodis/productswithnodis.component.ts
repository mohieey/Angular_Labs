import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { DiscountOffers } from '../shared classes and types/DiscountOffers';
import { IProduct } from '../shared classes and types/IProduct';

@Component({
  selector: 'app-productswithnodis',
  templateUrl: './productswithnodis.component.html',
  styleUrls: ['./productswithnodis.component.scss']
})
export class ProductswithnodisComponent implements OnInit {

  constructor(private productService:ProductService) { }
  productList:Array<IProduct>;

  ngOnInit(): void {
    this.productList=this.productService.GetAllProducts().filter(product => product.discount === DiscountOffers.NoDiscount);

  }

}
