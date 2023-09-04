import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean{
    if(!this.userService.isAuthenticated()){
      this.router.navigate(["login"]);
      return false
    } else {
      return true;
    }
  }
}
