import { Component, OnInit } from '@angular/core';
import { ApisqlService } from '../apisql.service';
import { ProductAPI, SubCategoryAPI } from '../productmodel/products';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-productslayout',
  templateUrl: './productslayout.page.html',
  styleUrls: ['./productslayout.page.scss'],
})
export class ProductslayoutPage implements OnInit {
  // based on subcategoryID
  subCategoryId!: number;
  products: ProductAPI[] = [];
  filteredProducts: ProductAPI[] = [];

  //sub name for title
  subCategoryName: string = '';
  

  constructor(private apiService: ApisqlService, private router: Router, private route: ActivatedRoute,
    private navCtrl: NavController,) { }

  navigateToProduct(id: number) {
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

  productback() {
    this.navCtrl.back();
  }

}
