import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service'; // Export From Service
import { ProductAPI } from '../productmodel/products';
import { ApisqlService } from '../apisql.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(public cartService: CartService, private apiService: ApisqlService, private router: Router) { }


  downloadInvoice() {
    console.log('test');
  }

  returnHome() {
    this.router.navigate(['/tabs/home']);
  }


  ngOnInit() {
  }

}
