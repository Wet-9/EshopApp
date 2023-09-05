import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  userRole!: string;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private navCtrl: NavController){
    this.registerForm = formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

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
        alert('User was created successfully');
        this.router.navigate(['/tabs/home']);
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

