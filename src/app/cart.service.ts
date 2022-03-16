import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product [] = [];
  constructor(
    private http: HttpClient
  ) { }

   /* Item add in cart */
   addToCart(product: Product) {
    this.items.push(product);
  }

  /* Get Items */
  getItems() {
    return this.items;
  }

  /* Clear Items from Cart*/
  clearCart() {
    this.items = [];
    return this.items;
  }

  /* Get Shipping Price*/
  getShippingPrices(){
    return this.http.get<{type: string, price: number } []>('/assets/shipping.json');
  }
}
