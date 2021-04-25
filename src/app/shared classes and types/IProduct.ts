import { DiscountOffers } from "./DiscountOffers";

export interface IProduct {
    id:number;
    name: string;
    quantity:number;
    price:number;
    image:string;
    discount:DiscountOffers;
}

