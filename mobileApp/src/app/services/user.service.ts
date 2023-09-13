import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Tab update via eventemitter when login and logout
  public onlogout: EventEmitter<void> = new EventEmitter();
  public onlogin: EventEmitter<void> = new EventEmitter();

  private apiUrlUsers = 'https://ecom-397716.uc.r.appspot.com/';

  constructor(private httpClient: HttpClient) { }

  registerUser(formData: any){
    return this.httpClient.post<Iuser>(`${this.apiUrlUsers}register`, formData);
  }

  loginUser(formData: any){
    return this.httpClient.post<Iuser>(`${this.apiUrlUsers}login`, formData);
}

  getUserData(){
    let data = localStorage.getItem('currentUser');
    return data ? JSON.parse(data) : null; //JSON.parse converts string to an object
  }

  isAuthenticated(){
    return (this.getUserData() !== null) ? true : false;
  }

  logout() {
    localStorage.removeItem("currentUser");  // Clear local storage
    this.onlogout.emit(); // Emit Logout
  }

}
