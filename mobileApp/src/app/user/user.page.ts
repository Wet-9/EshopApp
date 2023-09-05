import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service'; // Export From Service
import { ProductAPI } from '../productmodel/products';
import { ApisqlService } from '../apisql.service';
import { ViewWillEnter } from '@ionic/angular'; // Hopefulyl fix and refresh user page (sql issue)
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  userId: number | null = null;  
  cart: any[] = [];

  constructor(public cartService: CartService, private apiService: ApisqlService, private router: Router) { }


  // 
  ngOnInit(): void {
    this.getUserIdFromLocalStorage();
    if (this.userId !== null) {
      this.fetchCart();
    }
  }
// 
  ionViewWillEnter(): void {
    if (this.userId !== null) {
      this.fetchCart();
    }
  }

// Get current user json from local strage 
  getUserIdFromLocalStorage(): void {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || '{}');
    this.userId = currentUser?.id || null;
  }

  fetchCart(): void {
    if (this.userId === null) {
      return;
    }
// Get data from cart: ************ TEMP SOLUTION *******************
    this.apiService.getUser(this.userId).subscribe(user => {
      this.cart = user.cart.map((item: { product: { productName: string, productPrice: number }, quantity: number }) => {
        return {
          productName: item.product.productName,
          productPrice: item.product.productPrice,
          quantity: item.quantity
        };
      });
      
      console.log(this.cart);  // DEBUG ERRORS 
    });
  }

// loguotu 
logout() {
  this.router.navigate(['/login/']);
}


}
