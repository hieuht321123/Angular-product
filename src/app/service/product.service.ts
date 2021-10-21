import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../module/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API: string='http://localhost:3000/product';
  constructor(private httpService: HttpClient) { }

  getAllUser(): Observable<Product[]>{
      return this.httpService.get<Product[]>(this.API);
  }

  saveUser(product: Product):Observable<Product>{
    return this.httpService.post<Product>(this.API, product);

  }
}
