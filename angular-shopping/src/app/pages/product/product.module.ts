import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './product.router';
import { ProductComponent } from './product.component';
import { AppCommonModule } from 'src/app/common/app-common.module';

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    AppCommonModule
  ],
  providers: [
  ]
})

export class ProductModule { }
