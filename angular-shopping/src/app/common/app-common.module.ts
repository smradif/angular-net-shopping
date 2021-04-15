import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from 'src/app/components/products/products-list.component';
import { ProductsService } from 'src/app/components/products/products.service';
import { ProductComponent } from '../components/products/product/product-item.component';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MobxAngularModule
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductListComponent,
    ProductComponent
  ]
})

export class AppCommonModule { }
