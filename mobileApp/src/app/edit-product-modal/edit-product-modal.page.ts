import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.page.html',
  styleUrls: ['./edit-product-modal.page.scss'],
})
export class EditProductModalPage implements OnInit {

  productForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController) {
    this.activatedRoute.url.subscribe(url => {
      console.log(url);
    });
  }

  closeModal() {
    if (this.productForm.valid) {
      this.modalController.dismiss(this.productForm.value);
    } else {
      alert('Please Enter a valid Product Name!');
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
