import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service'; // Export From Service
import { ProductAPI } from '../productmodel/products';
import { ApisqlService } from '../apisql.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  
  cartItems: CartItem[] = [];
  cartPrice: number = 0;   // Calculate Cart Price

  constructor(public cartService: CartService, private apiService: ApisqlService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.updateTotalPrice();
    this.cartPrice = this.cartService.getTotalPrice();
    this.cartService.cartUpdated.subscribe(() => {
      this.updateTotalPrice();
    });
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
    this.CalcTotal();
  }
    
  // Remove
  removeitem(item: CartItem) {
    this.cartService.removeFromCart(item.product);
    this.updateTotalPrice();
    this.CalcTotal();
  }
  
  updateTotalPrice() {
    this.cartPrice = this.cartService.getTotalPrice();
    console.log(this.cartPrice);
    this.apiService.updateUserCart(this.cartItems).subscribe();
    this.cdr.detectChanges();
  }
  
// Now a confirm Button
// When press > Saves JSON file > Refresh Cart > 
goToPayment() {
  this.apiService.updateUserCart(this.cartItems).subscribe(
    response => {
      // clear cart upon successful purchase
      this.cartItems = [];
      this.cartService.clearCart();
      console.log("Cart updated successfully", response);
      this.router.navigate(['/payment']);
    },
    error => {
      console.log("Error w/ Cart Update", error);
    }
  );
}

}
