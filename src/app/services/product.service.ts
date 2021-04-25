import { Injectable } from '@angular/core';
import { DiscountOffers } from '../shared classes and types/DiscountOffers';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products=[{id:1,name:'Ipad',quantity:7,price:4564,image:'',discount:DiscountOffers.FifteenPercent},
  {id:2,name:'Realme',quantity:45,price:3000,image:'',discount:DiscountOffers.TenPercent},
  {id:3,name:'Samsung',quantity:67,price:5000,image:'',discount:DiscountOffers.NoDiscount},
  {id:4,name:'Nokia',quantity:4,price:2222,image:'',discount:DiscountOffers.NoDiscount},];
  GetAllProducts(){
    return this.products;
  }

  GetProductById(prdId){
    if(typeof prdId !== 'number')
    return null;
    const product = this.products.find(product=>product.id===prdId);
    if(!product) return null;
    return product
    }
  constructor() { }
}
