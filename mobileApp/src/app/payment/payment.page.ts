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

cart: any[] = [];

  constructor(public cartService: CartService, private apiService: ApisqlService, private router: Router) { }


  downloadInvoice() {
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text('Invoice', 10, 10);

  // Download
  doc.save('Invoice.pdf');
  }

  returnHome() {
    this.router.navigate(['/tabs/home']);
  }


  ngOnInit() {
  }


  
}
