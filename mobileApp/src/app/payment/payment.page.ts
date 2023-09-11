import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service'; // Export From Service
import { ProductAPI } from '../productmodel/products';
import { ApisqlService } from '../apisql.service';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf'; // Useful



@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

userId: number | null = null;  
cart: any[] = [];

  constructor(public cartService: CartService, private apiService: ApisqlService, private router: Router) { }


  downloadInvoice() {
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text('Invoice', 10, 10);

  let yaxis = 30;

  this.cart.forEach((item, index) => {
      // display details: proudct, price, quantity
      doc.setFontSize(12); 
      doc.text(item.productName, 10, yaxis);
      doc.text('Price: $' + item.productPrice, 10, yaxis + 10);
      doc.text('Quantity: ' + item.quantity, 10, yaxis + 20);

      const itemTotal = item.productPrice * item.quantity;
      doc.text('Total: $' + itemTotal, 10, yaxis + 30);

      // add white space between each item
      yaxis += 50;
  });

  // Download
  doc.save('Invoice.pdf');
  }

  returnHome() {
    this.router.navigate(['/tabs/home']);
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

  ngOnInit() {
    this.getUserIdFromLocalStorage();
    if (this.userId !== null) {
      this.fetchCart();
    }
  }


  
}
