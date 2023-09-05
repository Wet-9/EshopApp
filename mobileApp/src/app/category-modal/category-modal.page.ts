import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.page.html',
  styleUrls: ['./category-modal.page.scss'],
})
export class CategoryModalPage implements OnInit {

  categoryForm!: FormGroup;

  constructor(private modalController: ModalController) {}

  closeModal() {
    if (this.categoryForm.valid) {
      this.modalController.dismiss(this.categoryForm.value);
    } else {
      alert('Please add a Category Name!');
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
