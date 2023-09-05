import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-category-modal',
  templateUrl: './edit-category-modal.page.html',
  styleUrls: ['./edit-category-modal.page.scss'],
})
export class EditCategoryModalPage implements OnInit {

  

  categoryForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private modalController: ModalController) {
    this.activatedRoute.url.subscribe(url => {
      console.log(url);
    });
  }

  closeModal() {
    if (this.categoryForm.valid) {
      this.modalController.dismiss(this.categoryForm.value);
    } else {
      alert('Please enter a valid category name!');
      console.log("Form is not valid");
    }
  }
  ngOnInit() {
    this.categoryForm = new FormGroup({
    categoryName: new FormControl(null, Validators.required)
  });
  }

  cancel() {
    this.modalController.dismiss();
  }
}