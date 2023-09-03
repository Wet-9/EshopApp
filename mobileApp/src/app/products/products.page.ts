import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisqlService } from '../apisql.service';

// Replace Mock products with database 
import { ProductAPI } from '../productmodel/products';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: ProductAPI[] = [];

  constructor(private router: Router, private apiService: ApisqlService) {}

// Nav 
  navigateToProduct(id: number) {
  this.router.navigate(['/product-temp', id]);
}

// Implement APIserive fetch
  ngOnInit() {
    this.apiService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.error("Error fetching products:", error);
      }
    );
  }

}
