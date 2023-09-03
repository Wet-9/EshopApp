import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Route to hardcoded product *change later*
import { ProductAPI } from '../productmodel/products'; // Temporary hard coded product structure
import { NavController } from '@ionic/angular';
import { CartService } from '../cart.service'; // Importing servie add delete clear etc.

import { ApisqlService } from '../apisql.service'; //Google Cloud API

import { AlertController } from '@ionic/angular';

import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
// *********** This is API  ******************
@Component({
  selector: 'app-product-temp',
  templateUrl: './product-temp.page.html',
  styleUrls: ['./product-temp.page.scss'],
})
export class ProductTempPage implements OnInit {

  product: ProductAPI | undefined;

 // Could do .this.product = string examples

  constructor(private route: ActivatedRoute, private navCtrl: NavController, public cartService: CartService,
    private apiService: ApisqlService, private alertController: AlertController,
    public toastController: ToastController,
    private router: Router) { }

// Alert for when added to cart
    // async showAddToCartAlert(quantity: number) {
    //   const alert = await this.alertController.create({
    //     header: 'Item Added',
    //     message: `${quantity} item(s) added to cart.`,
    //     buttons: ['OK']
    //   });
    //   await alert.present();
    // }
    
    // Using toast instead. Forgot this existed. 
    async presentToast(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000,
        icon: 'bag-outline',
        position: 'top',
        color: 'secondary'
      });
      toast.present();
    }


    ngOnInit() {
      this.apiService.getProducts()
        .subscribe(
          data => {
            console.log("Data from Google API: ", data);
    
            // Find the product based on the id
            const productIdString = this.route.snapshot.paramMap.get('id');
            if (productIdString !== null) {
              const productId = +productIdString;
              this.product = data.find(p => p.id === productId); 
              console.log('Product:', this.product);  // Debug
            }
          },
          error => {
            console.error("Error: ", error);
          }
        );
  
    

    // Log Products test
    this.apiService.getProducts()
      .subscribe(
        data => {
          console.log("Data from Google API: ", data);
        },
        error => {
          console.error("Error: ", error);
        }
      );
}

// Go back function
productback() {
  this.navCtrl.navigateForward('/tabs/products');
}

// Go to checkout 
goToCheckout() {
  this.router.navigate(['/tabs/checkout']);
}

  
// When clicked add item to cart. 
additem() {
  if (this.product) {
    this.cartService.addToCart(this.product);
    const quantity = this.cartService.getQuantity(this.product.id || 0);
    this.presentToast(`Item added to cart. Total: ${quantity}`); // Show the toast
    console.log("Item added to cart:", this.product);
  }
}




// Remove 
removeitem() {
  if (this.product) {
    this.cartService.removeFromCart(this.product);
    console.log("Item removed from cart:", this.product);
    const quantity = this.cartService.getQuantity(this.product.id || 0);
    this.presentToast(`Item added to cart. Total: ${quantity}`); // Show the toast
  }
}
// 
// Redirect to Home Page when icon is clicked
// gotoTab1() {
//   this.navCtrl.navigateForward('/tabs/tab1');
// }

}
