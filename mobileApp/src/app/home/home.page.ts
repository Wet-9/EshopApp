import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController) {}


  // Redirect to Home Page when icon is clicked
  gotoTab1() {
    this.navCtrl.navigateForward('/tabs/tab1');
  }

  ngOnInit() {
  }

}
