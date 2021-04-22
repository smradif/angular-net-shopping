import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/app/material/materials.module";
import { HomeModule } from "src/app/pages/home/home.module";
import { ShellRoutingModule } from "../shell-routing.module";
import { MobxAngularModule } from 'mobx-angular';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppCommonModule } from "src/app/common/app-common.module";

export const imports = [
  BrowserModule,
  ShellRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  HttpClientModule,
  HomeModule,
  MobxAngularModule,
  FormsModule,
  RouterModule,
  AppCommonModule
];
