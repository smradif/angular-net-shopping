import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from 'src/app/components/products/products-list.component';
import { ProductsService } from 'src/app/components/products/products.service';
import { ProductComponent } from '../components/products/product/product-item.component';
import { MobxAngularModule } from 'mobx-angular';
import { ProductDetailsComponent } from '../components/products/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { SocialComponent } from '../components/social/social.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    MobxAngularModule,
    RouterModule
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    SocialComponent
  ]
})

export class AppCommonModule { }
