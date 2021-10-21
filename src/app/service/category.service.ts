import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../module/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API: string='http://localhost:3000/category';
  constructor(private httpService: HttpClient) { }

  getAllCategory(): Observable<Category[]>{
      return this.httpService.get<Category[]>(this.API);
  }
}
