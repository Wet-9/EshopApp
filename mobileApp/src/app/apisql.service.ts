import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApisqlService {
  
  //Import GOOGLE CLOUD API
  ///products/get_products
  private apiUrl = 'https://ecom-397716.uc.r.appspot.com';

  constructor(private http: HttpClient) { }

 getProducts(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/products/get_products`);
}

getsubcategories(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/subcategories/get_subcategories`);
}

}
