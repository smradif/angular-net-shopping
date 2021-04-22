import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BasketRoutes } from './basket.router';
import { BasketComponent } from './basket.component';
import { AppCommonModule } from 'src/app/common/app-common.module';
import { BasketEmptyComponent } from 'src/app/components/basket-empty/basket-empty.component';
import { BasketNotEmptyComponent } from 'src/app/components/basket-not-empty/basket-not-empty.component';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [
    BasketComponent,
    BasketEmptyComponent,
    BasketNotEmptyComponent
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
