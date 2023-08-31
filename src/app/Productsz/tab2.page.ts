import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_PRODUCTS } from '../productmodel/products';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  products = MOCK_PRODUCTS;

  constructor(private router: Router) {}

// Nav
  navigateToProduct(id: number) {
    this.router.navigate(['/tabs/product-temp', id]);
  }

}
