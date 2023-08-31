import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Route to hardcoded product *change later*
import { Product, MOCK_PRODUCTS } from '../productmodel/products'; // Temporary hard coded product structure


@Component({
  selector: 'app-product-temp',
  templateUrl: './product-temp.page.html',
  styleUrls: ['./product-temp.page.scss'],
})
export class ProductTempPage implements OnInit {

  product: Product | undefined;

 // Could do .this.product = string examples

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const productIdString = this.route.snapshot.paramMap.get('id');
    if (productIdString !== null) {
        const productId = +productIdString;
        this.product = MOCK_PRODUCTS.find(p => p.id === productId);
        console.log('Product:', this.product);  // Add this line
    }
}
  
}
