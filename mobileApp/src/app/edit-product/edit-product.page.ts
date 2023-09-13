import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Route to hardcoded product *change later*
import { ProductAPI } from '../productmodel/products'; // Temporary hard coded product structure
import { NavController } from '@ionic/angular';
import { CartService } from '../cart.service'; // Importing servie add delete clear etc.

import { ApisqlService } from '../apisql.service'; //Google Cloud API

import { AlertController } from '@ionic/angular';

import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditProductModalPage } from '../edit-product-modal/edit-product-modal.page';

// *********** This is API  ******************
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  product: ProductAPI | undefined;
  productId!: number;
  subCategoryId!: number;

 // Could do .this.product = string examples

  constructor(private route: ActivatedRoute, private navCtrl: NavController, public cartService: CartService,
    private apiService: ApisqlService, private alertController: AlertController,
    public toastController: ToastController,
    private router: Router,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.url.subscribe(url => {
        console.log(url);
      });
     }

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

    async heartwarning(message: string) {
      const warning = await this.toastController.create({
        message: message,
        duration: 2000,
        icon: 'alert',
        position: 'top',
        color: 'danger'
      });
      warning.present();
    }


    ngOnInit() {
      this.apiService.getProducts()
        .subscribe(
          data => {
            console.log("Data from Google API: ", data);
    
            // Find the product based on the id
            this.productId = Number(this.route.snapshot.paramMap.get('id'));
            this.subCategoryId = Number(this.route.snapshot.paramMap.get('subCategoryId'));
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
  this.navCtrl.back();
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

//favourite icon WIP
toggleFavorite() {
  this.heartwarning(`Sign in First`);
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

// async editProduct() {
//   const modal = await this.modalController.create({
//     component: EditProductModalPage,
//   });
//   modal.onDidDismiss().then((productData) => {
//     if (productData !== undefined && productData.data !== null) {
//       const newProduct = productData.data;
//       console.log('Edit Product modal:', productData.data);

//       const editProduct = {
//         id: this.productId,
//         productName: newProduct.data.productName,
//         productSKU: newProduct.data.productSKU,
//         productDescription: newProduct.data.productDescription,
//         productPrice: newProduct.data.productPrice,
//         productURL: newProduct.data.productURL,
//         productSPEC: newProduct.data.productSPEC,
//         subCategoryId: this.subCategoryId,
//       }

//       console.log(productData);

//       this.apiService.updateProduct(editProduct).subscribe(product => {
//         console.log('Added product:', product);
//         this.ngOnInit();
//       });
//     }
//   });
//   return await modal.present();

// }

async editProduct() {
  const modal = await this.modalController.create({
    component: EditProductModalPage,
  });

  modal.onDidDismiss().then((productData) => {
    if (productData !== null && productData.data !== undefined) {
      if (!productData.data || !productData.data.productName) {
        console.log('error:', productData);
        return;
      }
      const newProduct = productData.data;

      const editProduct = {
        id: this.productId,
        productName: newProduct.productName,
        productSKU: newProduct.productSKU,
        productDescription: newProduct.productDescription,
        productPrice: newProduct.productPrice,
        productURL: newProduct.productURL,
        productSPEC: newProduct.productSPEC,
        subCategoryId: this.subCategoryId,
      }

      this.apiService.updateProduct(editProduct).subscribe(product => {
        console.log('Edited product:', product);
        this.ngOnInit();
      });
    }
  });
  
  return await modal.present();
}


}
