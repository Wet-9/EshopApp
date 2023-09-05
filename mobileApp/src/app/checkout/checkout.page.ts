import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service'; // Export From Service
import { ProductAPI } from '../productmodel/products';
import { ApisqlService } from '../apisql.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  cartItems: CartItem[] = [];

  // Calculate Cart Price
  cartPrice: number = 0;


  constructor(public cartService: CartService, private apiService: ApisqlService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.updateTotalPrice();
  }
// Adding sum based on quantity and item
  CalcTotal() {
    this.cartPrice = 0; 
    for (let i = 0; i < this.cartItems.length; i++){
      this.cartPrice += this.cartItems[i].product.productPrice * this.cartItems[i].quantity;
    }
  }

  additem(item: CartItem) {
    this.cartService.addToCart(item.product);
    this.updateTotalPrice();
  }
    
  // Remove
  removeitem(item: CartItem) {
    this.cartService.removeFromCart(item.product);
    this.updateTotalPrice();
  }
  
  updateTotalPrice() {
    this.cartPrice = this.cartService.getTotalPrice();
    this.apiService.updateUserCart(this.cartItems).subscribe();

  }
  


  
}
