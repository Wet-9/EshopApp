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
  formData: any;

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
        this.userService.onlogin.emit();
        alert('Login was successfully');

        // Redirecting based on userType
        let usertype = localStorage.getItem('currentUser'); 
        if (usertype) {
          let role = JSON.parse(usertype);
          let roletype = role.userRole;
          if (roletype === 'ADMIN'){
            this.router.navigate(['/nadmin/admin']);
            console.log('is Admin');
          } else {
            this.router.navigate(['/tabs/home']);
            console.log('is not admin')
          }
        }
      },
      error: (err) => {
        alert(err.error);
        console.log(err);
      }
    })
  }
}
