import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasketRoutes } from './basket.router';
import { BasketComponent } from './basket.component';
import { BasketListComponent } from 'src/app/components/basket/basket-list/basket-list.component';
import { MobxAngularModule } from 'mobx-angular';
import { BasketEmptyComponent } from 'src/app/components/basket/basket-empty/basket-empty.component';

@NgModule({
  declarations: [
    BasketComponent,
    BasketEmptyComponent,
    BasketListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BasketRoutes),
    MobxAngularModule
  ],
  providers: [
  ]
})

export class BasketModule { }
