import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  getProduct(){
    return this.http.get<any[]>(this.apiUrl);
  }
}
