import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApisqlService } from '../apisql.service';
import { ProductAPI, SubCategoryAPI } from '../productmodel/products';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.page.html',
  styleUrls: ['./add-products.page.scss'],
})
export class AddProductsPage implements OnInit {

  subCategories: SubCategoryAPI[] = [];
  subNumber: SubCategoryAPI[] =[] ;
  products: ProductAPI[] = [];
  constructor(private router: Router, private apiService: ApisqlService, private navCtrl: NavController) {}

// Implement APIserive fetch for subcategories 
  ngOnInit() {
    this.apiService.getsubcategories().subscribe(data => {
      console.log("Subcategories Data:", data); // Debugging help
      this.subCategories = data;

      this.apiService.getProducts().subscribe(products => {
        this.products = products;  

        for (let i = 0; i < this.subCategories.length; i++) {
          let count = 0;  
          console.log("Populated Subcategories Data:", this.subCategories);

          for (let j = 0; j < this.products.length; j++) {
            if (this.subCategories[i].id === this.products[j].subCategoryId) {
              count++;  
            }
          }
          //store count
          this.subCategories[i].productCount = count;
        }
      });
    });
  }
  
// route sub id 
  routetoproducts(subCategoryId: number) {
    // Navigate to product layout with the subcategory id
    this.router.navigate(['/productslayout', subCategoryId]);
  }

  addCategory(){

  }
  editCategory(){

  }

}
