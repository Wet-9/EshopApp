import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.page.html',
  styleUrls: ['./product-modal.page.scss'],
})
export class ProductModalPage implements OnInit {

  productForm!: FormGroup;

  constructor(private modalController: ModalController) {}

  closeModal() {
    if (this.productForm.valid) {
      this.modalController.dismiss(this.productForm.value);
    } else {
      alert('Please add a Product Name!');
      console.log("Form is not valid");
    }
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      productSKU: new FormControl(null, Validators.required),
      productName: new FormControl(null, Validators.required),
      productDescription: new FormControl(null),
      productPrice: new FormControl(null, Validators.required),
      productURL: new FormControl(null),
      productSPEC: new FormControl(null)
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

}