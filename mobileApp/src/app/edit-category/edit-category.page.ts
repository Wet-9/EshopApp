import { Component, OnInit } from '@angular/core';
import { ApisqlService } from '../apisql.service';
import { ProductAPI, SubCategoryAPI, Product } from '../productmodel/products';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ProductModalPage } from '../product-modal/product-modal.page';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})
export class EditCategoryPage implements OnInit {
// based on subcategoryID
  subCategoryId!: number;
  products: ProductAPI[] = [];
  product: Product[]= [];
  filteredProducts: ProductAPI[] = [];

  showDeleteButtons = false;

  //sub name for title
  subCategoryName: string = '';
  
  constructor(private modalController: ModalController, private apiService: ApisqlService, private router: Router, private route: ActivatedRoute,
    private navCtrl: NavController,) { }

  navigateToProduct(id: number) {
    if (this.showDeleteButtons) {
      this.toggleDeleteButtons();
    }
    this.router.navigate(['/product-temp', id]);
  }

  ngOnInit() {
    this.subCategoryId = Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = this.products.filter(product => product.subCategoryId === this.subCategoryId);
    });

    // Fetch SubCategoryName
    const idFromUrl = this.route.snapshot.paramMap.get('id');
    this.apiService.getsubcategories().subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        if (data[i].id === this.subCategoryId) {
          this.subCategoryName = data[i].subCategoryName;
          break;
        }
      }
    });
  }

  async addProduct() {
    const modal = await this.modalController.create({
      component: ProductModalPage
    });
    modal.onDidDismiss().then((modalData) => {
      if (modalData.data !== undefined && modalData.data !== null) {
        const newProduct = modalData.data;
        console.log('Create Product modal:', modalData.data);

        const newProductAPI = {
          productName: newProduct.productName,
          productSKU: newProduct.productSKU,
          productDescription: newProduct.productDescription,
          productPrice: newProduct.productPrice,
          productURL: newProduct.productURL,
          productSPEC: newProduct.productSPEC,
          subCategoryId: this.subCategoryId,
        }

        console.log(newProductAPI);

        this.apiService.addProduct(newProductAPI).subscribe(product => {
          console.log('Added product:', product);
          this.ngOnInit();
        });
      }
    });
    return await modal.present();
  }

  toggleDeleteButtons() {
    this.showDeleteButtons = !this.showDeleteButtons;
  }

  deleteProduct(event: Event, products: ProductAPI) {
    // prevents click event from bubbling up to parent element (card)
    event.stopPropagation(); 
    // this.apiService.deleteSubCategory(subcategory).subscribe(() => {
    //   console.log('Deleted subcategory:', subcategory.id);
    //   // Refresh / remove subcategory from local list
    //   this.subCategories = this.subCategories.filter(subCategory => subCategory.id !== subcategory.id);
    // });
  }

  productback() {
    if (this.showDeleteButtons) {
      this.toggleDeleteButtons();
    }
    this.navCtrl.back();
  }

}