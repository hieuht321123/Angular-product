import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path:'',
    component: ListProductComponent,
    children:[
      {
        path:'',
        component: ListProductComponent
        
      }
      

    ]
  }

]

@NgModule({
  declarations: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
