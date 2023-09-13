import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  isAuthenticated = false;


  constructor(private navCtrl: NavController, private userService: UserService,
    private cdr: ChangeDetectorRef) {}

    ngOnInit() {
      this.checkAuthenticationStatus();
      
      this.userService.onlogout.subscribe(() => {
        this.isAuthenticated = false;
        this.cdr.detectChanges();
      });
      
      this.userService.onlogin.subscribe(() => {
        this.isAuthenticated = true;
        this.cdr.detectChanges();
      });
    }


  checkAuthenticationStatus() {
    // check if the user is authenticated
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.isAuthenticated = true;
      this.cdr.detectChanges();
      console.log("Is Authenticated: ", this.isAuthenticated); // Debug
    } else {
      this.isAuthenticated = false;
    }
  }
//Moved to home page
  gotoTab1() {
    this.navCtrl.navigateForward('/tabs/tab1');
  }

}
