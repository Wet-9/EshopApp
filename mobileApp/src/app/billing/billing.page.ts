import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {

  public ShippingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.ShippingForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postal_code: ['', Validators.required],
      Country: ['', Validators.required],
      Number: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  Confirm() {
    if (this.ShippingForm.valid) {
      console.log('Form is valid'); // Debug
      // Navigate to the payment page
      this.router.navigate(['/payment']);
    } else {
      console.log(this.ShippingForm); // Debug
    }
  }

  // Function to navigate back
  productback() {
    this.navCtrl.back();
  }
}
