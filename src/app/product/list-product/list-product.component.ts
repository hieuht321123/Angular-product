import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/module/category';
import { Product } from 'src/app/module/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productList: Product[]= [];
  categoryList: Category[]= [];
  constructor(private productSerVice: ProductService,
    private categoryService: CategoryService
    ) { }

  ngOnInit(): void {
    this.productSerVice.getAllUser().subscribe(data =>{
        this.productList= data;
       
    });

    this.categoryService.getAllCategory().subscribe(data =>{
      this.categoryList= data;
      console.log(this.categoryList);
    })

  }

}
