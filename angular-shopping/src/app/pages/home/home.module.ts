import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.router';
import { HomeComponent } from './home.component';
import { AppCommonModule } from 'src/app/common/app-common.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    AppCommonModule
  ],
  providers: [
  ]
})

export class HomeModule { }
