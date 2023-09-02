import { Injectable } from '@angular/core';
import { Product } from './productmodel/products'; //products template temp***

export interface CartItem {
  product: Product;
  quantity: number;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = []; // Items array to add to cart
 

// Add item to cart function
addToCart(product: Product) {
  const item = this.items.find(item => item.product.id === product.id);
  if (item) {
    item.quantity += 1;
  } else {
    this.items.push({ product, quantity: 1 });
  }
}



// Remove from cart function
removeFromCart(product: Product) {
  const item = this.items.find(item => item.product.id === product.id);
  if (item) {
    if (item.quantity === 1) {
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    } else {
      item.quantity -= 1;
    }
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

// Get Quantity 
getQuantity(productId: number): number {
  const item = this.items.find(item => item.product.id === productId);
  return item ? item.quantity : 0;
}

// Get price based on quantity
getPriceQ(productId: number): number {
  const item = this.items.find(item => item.product.id === productId);
  const quantity = this.getQuantity(productId);
  if (item) {
    return item.product.price * quantity;
  }
  return 0;
}

  constructor() { }
}
