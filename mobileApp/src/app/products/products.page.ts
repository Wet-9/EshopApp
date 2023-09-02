import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Replace Mock products with database 
import { MOCK_PRODUCTS } from '../productmodel/products';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products = MOCK_PRODUCTS;

  constructor(private router: Router) {}

// Nav 
  navigateToProduct(id: number) {
    this.router.navigate(['/tabs/product-temp', id]);
  }

  ngOnInit() {
  }

}
