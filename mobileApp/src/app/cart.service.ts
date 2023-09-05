import { Injectable } from '@angular/core';
import { ProductAPI } from './productmodel/products'; //products template temp***
import { EventEmitter } from '@angular/core'; // 
export interface CartItem {
  product: ProductAPI;
  quantity: number;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = []; // Items array to add to cart
 
  // EventEmitter works - Forces update in products-temp to update total cost at checkout. 
  cartUpdated = new EventEmitter<void>();

// Add item to cart function
addToCart(product: ProductAPI) {
  const item = this.items.find(item => item.product.id === product.id);
  if (item) {
    item.quantity += 1;
  } else {
    this.items.push({ product, quantity: 1 });
  }
  this.cartUpdated.emit();
}



// Remove from cart function
removeFromCart(product: ProductAPI) {
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
  this.cartUpdated.emit();
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

// Get Total Quant
getTotalQuantity(): number {
  return this.items.reduce((total, item) => total + item.quantity, 0);
}

// Get price based on quantity
getPriceQ(productId: number): number {
  const item = this.items.find(item => item.product.id === productId);
  const quantity = this.getQuantity(productId);
  if (item) {
    return item.product.productPrice * quantity;
  }
  return 0;
}

//get total price
getTotalPrice(): number {
  return this.items.reduce((total, item) => total + item.product.productPrice * item.quantity, 0);
}

  constructor() { }
}
