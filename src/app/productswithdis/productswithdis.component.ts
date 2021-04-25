import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { DiscountOffers } from '../shared classes and types/DiscountOffers';
import { IProduct } from '../shared classes and types/IProduct';

@Component({
  selector: 'app-productswithdis',
  templateUrl: './productswithdis.component.html',
  styleUrls: ['./productswithdis.component.scss']
})
export class ProductswithdisComponent implements OnInit {

  constructor(private productService:ProductService) { }
  productList:Array<IProduct>;

  ngOnInit(): void {
    this.productList=this.productService.GetAllProducts().filter(product => product.discount === DiscountOffers.FifteenPercent||product.discount === DiscountOffers.TenPercent);

  }

}
