import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private navCtrl: NavController, private router: Router) { 
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login(){
    let formData = this.loginForm.value;

    this.userService.loginUser(formData).subscribe({
      next: (result) => {
        localStorage.setItem("currentUser", JSON.stringify(result)); //Store the user data on our browser
        alert('Login was successfully');
        this.router.navigate(['/tabs/home']);
      },
      error: (err) => {
        alert(err.error);
        console.log(err);
      }
    })
  }
}
