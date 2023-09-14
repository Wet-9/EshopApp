import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service'; // Export From Service
import { ProductAPI, OrderDisplay } from '../productmodel/products';
import { ApisqlService } from '../apisql.service';
import { ViewWillEnter } from '@ionic/angular'; // Hopefulyl fix and refresh user page (sql issue)
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.page.html',
  styleUrls: ['./all-orders.page.scss'],
})
export class AllOrdersPage implements OnInit {


  userId: number | null = null;  
  cart: any[] = [];
  purchaseHistory: any[] = [];
  orders: OrderDisplay[] = [];

  firstName: string | null = null;
  lastName: string | null = null;
  email: string | null = null;

  constructor(public cartService: CartService, private apiService: ApisqlService, private router: Router,
    private userService: UserService) { }


  ngOnInit(): void {
    this.getUserIdFromLocalStorage();
    if (this.userId !== null) {
      this.fetchOrders();
    }
  }
  
  ionViewWillEnter(): void {
    if (this.userId !== null) {
      this.fetchOrders();
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

  fetchOrders(): void {
    if (this.userId === null) {
      return;
    }
  
    this.apiService.getAllOrders().subscribe((orderData) => {
      console.log('Fetched Orders: ', orderData);
  
      const orderPromises = orderData.map((order: any) => {
        const productPromises = order.products.map((product: any) => {
          return this.apiService.getProductById(product.productId)
  .pipe(map((productInfo: ProductAPI) => {
    if (!productInfo) {
      console.error('ProductInfo is null or undefined for product ID:', product.productId);
      return {
        productName: 'Unknown Product',
        productPrice: 0,
        quantity: product.quantity
      };
    }
    return {
      productName: productInfo.productName,
      productPrice: productInfo.productPrice,
      quantity: product.quantity
    };
  }))
  .toPromise();

        });
  
        return Promise.all(productPromises).then(products => {
          const totalCost = products.reduce((sum, product) => sum + (product.productPrice * product.quantity), 0);
          return {
            orderId: order.orderId,
            orderDate: new Date(order.date),
            products: products,
            totalCost: totalCost
          };
        });
      });
  
      Promise.all(orderPromises).then(orders => {
        this.orders = orders.sort((a, b) => b.orderId - a.orderId);
        console.log('Processed Orders: ', this.orders);
      });
    });
  }

logout() {
  this.userService.logout();
  this.router.navigate(['tabs/login/']);
}
}
