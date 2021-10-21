import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SibarModule } from './sibar/sibar.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';
import { CategoryService } from './service/category.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SibarModule,
    HttpClientModule,
    
  ],
  providers: [ProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
