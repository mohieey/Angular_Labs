import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../shared classes and types/DiscountOffers';
import { IProduct } from '../shared classes and types/IProduct';
import { ICategory} from '../shared classes and types/ICategory';
import { ProductService } from '../services/product.service';
import { BounsService } from '../services/bouns.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductService,
    private bounsService:BounsService,private activatedRoute:ActivatedRoute,private router:Router) { 
    this.Discount = DiscountOffers.TenPercent;
    this.storeName = 'Ana Store';
    this.storeLogo = "assets/random-banner-1.png";
    this.productList;
    this.categoryList=[{id:1,name:'Mobiles'},{id:2,name:'Laptop'},{id:2,name:'TVs'}];
    this.clientName='Ana Client';
    this.isPurshased = false;
  }

  Discount:DiscountOffers;
  storeName:string;
  storeLogo:string;
  productList:Array<IProduct>;
  categoryList:Array<ICategory>;
  clientName:string;
  isPurshased:boolean;


  
  gotToWithDis()
  {
    this.router.navigate(['withdiscount'],{relativeTo:this.activatedRoute})
  }

  gotToWithNoDis()
  {
    this.router.navigate(['withoutdiscount'],{relativeTo:this.activatedRoute})

  }

  isDiscount(){
    return this.Discount !== DiscountOffers.NoDiscount
  }

  switchIsPurshased(){
    if(this.isPurshased===true)
    this.isPurshased=false;
    else
    this.isPurshased=true;
  }

  rendreValues(){
    this.productList=this.productService.GetAllProducts();

  }

  isProductsLoaded(){
    if(this.productList=== undefined) return false;
     return true;
  }


  sendToFooter(e){
    this.bounsService.send(this.clientName)
  }

  ngOnInit(): void {
  }

}
