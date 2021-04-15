import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './products.router';
import { ProductsComponent } from './products.component';
import { AppCommonModule } from 'src/app/common/app-common.module';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    AppCommonModule
  ],
  providers: [
  ]
})

export class ProductsModule { }
