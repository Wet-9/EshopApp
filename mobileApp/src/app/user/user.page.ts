import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service'; // Export From Service
import { ProductAPI } from '../productmodel/products';
import { ApisqlService } from '../apisql.service';
import { ViewWillEnter } from '@ionic/angular'; // Hopefulyl fix and refresh user page (sql issue)
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  userId: number | null = null;  
  cart: any[] = [];

  constructor(public cartService: CartService, private apiService: ApisqlService, private router: Router,
    private userService: UserService) { }


  ngOnInit(): void {
    this.getUserIdFromLocalStorage();
    if (this.userId !== null) {
      this.fetchCart();
    }
  }
  
  ionViewWillEnter(): void {
    if (this.userId !== null) {
      this.fetchCart();
    }
  }

/*
* TODO: Refactor.
*/
// Get current user json from local strage 
  getUserIdFromLocalStorage(): void {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || '{}');
    this.userId = currentUser?.id || null;
  }

  /*
  * get array of product IDs and quantities. For each product ID, fetch the product from the API.
  * Construct a new array (cart) based on product id and quantity.
  * Promise.all() waits for all promises to resolve before returning the new array.
  * (Necessary because we need to wait for all products to be fetched before we can return the cart.)
  */
  fetchCart(): void {
    if (this.userId === null) {
      return;
    }

    this.apiService.getUser(this.userId).subscribe((user) => {
      const cartPromises = user.cart.map((item: { productId: number; quantity: number }) => {
        console.log('item id: ', item.productId);
        return this.apiService.getProductById(item.productId)
          .pipe(map((product: ProductAPI) => {
            const cartItem = {
              productName: product.productName,
              productPrice: product.productPrice,
              quantity: item.quantity
            };
  
            // Log productName and productPrice for debugging
            // console.log(`Fetched Cart: \n CartItem: ${cartItem.productName} - Price: ${cartItem.productPrice}`);
  
            return cartItem;
          }))
          .toPromise();
      });
  
      Promise.all(cartPromises).then(cartItems => {
        this.cart = cartItems;
        console.log('Fetched Cart: ', this.cart);
      });
    });
  }


logout() {
  this.userService.logout();
  this.router.navigate(['tabs/login/']);
}


}
