import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service'; // Export From Service


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  cartItems: CartItem[] = [];
  
  // Calculate Cart Price
  cartPrice: number = 0;


  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.CalcTotal();
  }
// Adding sum based on quantity and item
  CalcTotal() {
    this.cartPrice = 0; 
    for (let i = 0; i < this.cartItems.length; i++){
      this.cartPrice += this.cartItems[i].product.productPrice * this.cartItems[i].quantity;
    }
  }

  

}
