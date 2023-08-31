import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Route to hardcoded product *change later*
import { Product, MOCK_PRODUCTS } from '../productmodel/products'; // Temporary hard coded product structure
import { NavController } from '@ionic/angular';
import { CartService } from '../cart.service'; // Importing servie add delete clear etc.

// *********** THIS IS A TEMP TS ******************
@Component({
  selector: 'app-product-temp',
  templateUrl: './product-temp.page.html',
  styleUrls: ['./product-temp.page.scss'],
})
export class ProductTempPage implements OnInit {

  product: Product | undefined;

 // Could do .this.product = string examples

  constructor(private route: ActivatedRoute, private navCtrl: NavController, public cartService: CartService) { }

  ngOnInit() {
    const productIdString = this.route.snapshot.paramMap.get('id');
    if (productIdString !== null) {
        const productId = +productIdString;
        this.product = MOCK_PRODUCTS.find(p => p.id === productId);
        console.log('Product:', this.product);  // Debug
    }
}

// Go back function
productback() {
  this.navCtrl.navigateForward('/tabs/products');
}
  
// When clicked add item to cart. 
additem() {
  if (this.product) {
    this.cartService.addToCart(this.product);
    console.log("Item added to cart:", this.product);
  }
}

// Remove 
removeitem() {
  if (this.product) {
    this.cartService.removeFromCart(this.product);
    console.log("Item removed from cart:", this.product);
  }
}
// 


}
