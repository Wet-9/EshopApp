import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  userRole!: string;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private navCtrl: NavController, public toastController: ToastController){
    this.registerForm = formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

// Notifcation for register Success
  async successToast(message: string) {
    const success = await this.toastController.create({
      message: message,
      duration: 4500,
      icon: 'checkbox',
      position: 'top',
      color: 'danger'
    });
    success.present();
  }

  // test(){
  //   this.successToast('User was created successfully. Please Login Again');
  // }

  ngOnInit() {
  }

  register(){
    
    const registrationData = {
      first_name: this.registerForm.value.first_name,
      last_name: this.registerForm.value.last_name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      userRole: this.userRole
    };

    this.userService.registerUser(registrationData).subscribe({
      next: (result) => {
        console.log(result);
        // alert('User was created successfully');
        this.successToast('User was created successfully. Please Login Again');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert(err);
      }
    });
  }
//back
  productback() {
    this.navCtrl.back();
  }

}

