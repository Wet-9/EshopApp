import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/interfaces/iuser';
import { UserService } from 'src/app/services/user.service';
import { Category } from 'src/app/interfaces/Category';
import { SubCategory } from './productmodel/products';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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

addCategory(category: Category): Observable<Category> {
  return this.http.post<Category>(`${this.apiUrl}/categories/add_category`, category, httpOptions);
}

addSubCategory(subCategory: SubCategory): Observable<SubCategory> {
  return this.http.post<SubCategory>(`${this.apiUrl}/subcategories/add_subcategory`, subCategory, httpOptions);
}

}