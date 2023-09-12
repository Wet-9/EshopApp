import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service'; // Export From Service
import { ProductAPI } from '../productmodel/products';
import { ApisqlService } from '../apisql.service';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf'; // Useful
import { UserService } from 'src/app/services/user.service';
import { Iuser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  user!: Iuser;
  userId: number | null = null;
  cart: any[] = [];

  constructor(
    public cartService: CartService,
    private apiService: ApisqlService,
    private router: Router,
    private userService: UserService
  ) {
    this.user = this.userService.getUserData();
  }

  // Complete Purchase: Combining current purchaseHistory with current cart then clearing cart
  completePurchase() {
    this.apiService.completePurchase(this.user).subscribe(
      (response) => {
        console.log('Purchase completed successfully', response);
        this.router.navigate(['/tabs/home']);
      },
      (error) => {
        console.log('Error w/ Purchase', error);
      }
    );
  }
  
  downloadInvoice() {
    const doc = new jsPDF();
    let overallTotal = 0;
    let yaxis = 50;

    this.header(doc);
    this.horizontalLine(doc, 30);

    const date = new Date();
    doc.text('Date: ' + date.toLocaleDateString(), 10, 40);

    this.tableHeader(doc, yaxis);
    yaxis += 10;

    this.cart.forEach((item, index) => {
      // display details: proudct, price, quantity
      doc.setFontSize(10);
      doc.text(item.productName, 10, yaxis);
      doc.text('$' + item.productPrice.toFixed(2), 100, yaxis);
      doc.text(String(item.quantity), 150, yaxis);

      const itemTotal = item.productPrice * item.quantity;
      doc.text('$' + itemTotal.toFixed(2), 180, yaxis);

      overallTotal += itemTotal;
      // add white space between each item
      yaxis += 10;
    });

    yaxis += 10;
    this.horizontalLine(doc, yaxis);

    // display overall total
    yaxis += 10;
    doc.setFontSize(12);
    doc.text('Total:', 130, yaxis);
    doc.text('$' + overallTotal.toFixed(2), 180, yaxis);

    this.footer(doc, yaxis);
    // Download
    doc.save('Invoice.pdf');
  }

  returnHome() {
    this.completePurchase();
    // this.router.navigate(['/tabs/home']);
  }

  ngOnInit() {
    this.getUserIdFromLocalStorage();
    if (this.userId !== null) {
      this.fetchCart();
    }
  }

  // Get current user json from local strage
  getUserIdFromLocalStorage(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.userId = currentUser?.id || null;
  }

  fetchCart(): void {
    if (this.userId === null) {
      return;
    }

    this.apiService.getUser(this.userId).subscribe((user) => {
      this.cart = user.cart.map(
        (item: {
          product: { productName: string; productPrice: number };
          quantity: number;
        }) => {
          return {
            productName: item.product.productName,
            productPrice: item.product.productPrice,
            quantity: item.quantity,
          };
        }
      );

      console.log('Cart: ' + this.cart);
    });
  }

  private horizontalLine(doc: any, y: number) {
    doc.setLineWidth(0.5);
    doc.line(10, y, 200, y);
  }

  private header(doc: any) {
    doc.setFontSize(22);
    doc.text('EshopApp', 10, 10);
    doc.setFontSize(14);
    doc.text('Invoice', 10, 25);
  }
  private tableHeader(doc: any, yaxis: number) {
    doc.setFontSize(12);
    doc.text('Item', 10, yaxis);
    doc.text('Price', 100, yaxis);
    doc.text('Quantity', 150, yaxis);
    doc.text('Total', 180, yaxis);
    yaxis += 10;
  }

  private footer(doc: any, yaxis: number) {
    yaxis += 20;
    doc.setFontSize(10);
    doc.text('Thank you!', 10, yaxis);
  }
}
