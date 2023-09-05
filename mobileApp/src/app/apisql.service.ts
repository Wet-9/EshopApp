import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/interfaces/iuser';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ApisqlService {
  
  //Import GOOGLE CLOUD API
  ///products/get_products
  private apiUrl = 'https://ecom-397716.uc.r.appspot.com';
  user!:Iuser;

  constructor(private http: HttpClient, private userService: UserService) { 
    this.user = this.userService.getUserData();
  }

 getProducts(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/products/get_products`);
}

getsubcategories(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/subcategories/get_subcategories`);
}

updateUserCart(cart: any[]): Observable<any[]> {
  console.log(JSON.stringify(cart, null, 2));
  const body = { cart: cart };
  return this.http.put<any[]>(`${this.apiUrl}/users/update_cart/${this.user.id}`, body);

}

// Fetch from cart to fix reload problem: 
getUserCart(userId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/users/get_cart/${userId}`);
}

// Get user data instead of cart 
getUser(userId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/users/get_user/${userId}`);
}


}
