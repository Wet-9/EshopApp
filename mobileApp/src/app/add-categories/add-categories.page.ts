import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApisqlService } from '../apisql.service';
import { ProductAPI, SubCategoryAPI, SubCategory } from '../productmodel/products';

import { ModalController } from '@ionic/angular';
import { CategoryModalPage } from '../category-modal/category-modal.page';


@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.page.html',
  styleUrls: ['./add-categories.page.scss'],
})
export class AddCategoriesPage implements OnInit {
  @Output() onAddSubCat: EventEmitter<SubCategoryAPI> = new EventEmitter();
  subCategory: SubCategory[] = [];
  subCategories: SubCategoryAPI[] = [];
  subNumber: SubCategoryAPI[] =[] ;
  products: ProductAPI[] = [];
  showDeleteButtons = false;
  constructor(private modalController: ModalController, private router: Router, private apiService: ApisqlService, private navCtrl: NavController) {}

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
    if (this.showDeleteButtons) {
      this.toggleDeleteButtons();
    }
    this.router.navigate(['/edit-category', subCategoryId]);
  }

  async addCategory() {
    const modal = await this.modalController.create({
      component: CategoryModalPage
    });
    modal.onDidDismiss().then((categoryName) => {
      if (categoryName !== null && categoryName.data !== undefined) {
        console.log('Category name modal:', categoryName.data);

        const newCategory = {
          subCategoryName: categoryName.data.categoryName,
          categoryId: 1,
        }

        console.log(categoryName.data.categoryName);

        this.apiService.addSubCategory(newCategory).subscribe(subCategory => {
          console.log('Added subcategory:', subCategory);
          this.ngOnInit();
        });
      }
    });
    return await modal.present();
  }

  toggleDeleteButtons() {
    this.showDeleteButtons = !this.showDeleteButtons;
  }
  
  deleteSubCategory(event: Event, subcategory: SubCategoryAPI) {
    // prevents click event from bubbling up to parent element (card)
    event.stopPropagation(); 
    this.apiService.deleteSubCategory(subcategory).subscribe(() => {
      console.log('Deleted subcategory:', subcategory.id);
      // Refresh / remove subcategory from local list
      this.subCategories = this.subCategories.filter(subCategory => subCategory.id !== subcategory.id);
    });
  }
  
  
}
