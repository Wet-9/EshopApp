import { Injectable } from '@angular/core';
import { Product } from './productmodel/products'; //products template temp***

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = []; // Items array to add to cart
 
// Add item to cart function
 addToCart(product: Product) {
  this.items.push(product);
 }
 

// Remove from cart function
 removeFromCart(product: Product){
  const index = this.items.indexOf(product);
  if (index > -1) {
    this.items.splice(index, 1); // Removes the item from array
  }
 }

// Get Items
 getItems(){
  return this.items;
 }

// Clear items 
 clearCart() {
  this.items = []; //setting [] resets array
}
 
  constructor() { }
}
