import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/interfaces/iuser';
import { UserService } from 'src/app/services/user.service';
import { Category } from 'src/app/interfaces/Category';
import { SubCategory, SubCategoryAPI, Product, ProductAPI } from './productmodel/products';

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

getProductById(productId: number): Observable<ProductAPI> {
  return this.http.get<ProductAPI>(`${this.apiUrl}/products/get_product/${productId}`);
}

getsubcategories(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/subcategories/get_subcategories`);
}

updateUserCart(cart: any[]): Observable<any[]> {
  console.log(JSON.stringify(cart, null, 2));
  const body = { cart: cart };
  return this.http.patch<any[]>(`${this.apiUrl}/users/update_cart/${this.user.id}`, body);
}

// Fetch from cart to fix reload problem: 
getUserCart(userId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/users/get_cart/${userId}`);
}

// Get user data instead of cart 
getUser(userId: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/users/get_user/${userId}`);
}


addCategory(category: Category): Observable<Category> {
  return this.http.post<Category>(`${this.apiUrl}/categories/add_category`, category, httpOptions);
}

addSubCategory(subCategory: SubCategory): Observable<SubCategory> {
  return this.http.post<SubCategory>(`${this.apiUrl}/subcategories/add_subcategory`, subCategory, httpOptions);
}

updateSubCategory(subCategory: SubCategoryAPI): Observable<SubCategoryAPI> {
  return this.http.patch<SubCategoryAPI>(`${this.apiUrl}/subcategories/update_subcategory/${subCategory.id}`, subCategory, httpOptions);
}

updateProduct(product: ProductAPI): Observable<ProductAPI> {
  return this.http.put<ProductAPI>(`${this.apiUrl}/products/update_product/${product.id}`, product, httpOptions);
}

deleteSubCategory(subCategory: SubCategoryAPI): Observable<SubCategoryAPI> {
  return this.http.delete<SubCategoryAPI>(`${this.apiUrl}/subcategories/delete_subcategory/${subCategory.id}`);

}

addProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(`${this.apiUrl}/products/add_product`, product, httpOptions);
}

deleteProduct(product: ProductAPI): Observable<ProductAPI> {
  return this.http.delete<ProductAPI>(`${this.apiUrl}/products/delete_product/${product.id}`);
}

completePurchase(user: Iuser): Observable<Iuser> {
  return this.http.patch<Iuser>(`${this.apiUrl}/users/complete_purchase/${user.id}`, httpOptions);
}

getOrders(userId: number) {
  return this.http.get<any[]>(`${this.apiUrl}/orders/get_orders/${userId}`);
}

getAllOrders() {
  return this.http.get<any[]>(`${this.apiUrl}/orders/get_orders`);
}


}
