import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

// var

  todayProduct: any;
  allProducts: any[] = [];

  constructor(private navCtrl: NavController, private httpClient: HttpClient) {}


  // Redirect to Home Page when icon is clicked
  gotoTab1() {
    this.navCtrl.navigateForward('/tabs/tab1');
  }

  ngOnInit() {
// Fetching
    this.fetchProducts().subscribe(
      (products) => {
        this.allProducts = products;
        this.getRandomProduct();
      },
      (error) => {
        console.error('Failed to fetch products:', error);
      }
    );

  }

  fetchProducts() {
    return this.httpClient.get<any[]>('https://ecom-397716.uc.r.appspot.com/products/get_products');
  }
// Random Generator
  getRandomProduct() {
    const randomIndex = Math.floor(Math.random() * this.allProducts.length);
    this.todayProduct = this.allProducts[randomIndex];
  }

}
