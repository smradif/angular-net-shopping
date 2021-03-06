import { APP_INITIALIZER } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AuthGuardService } from "src/app/guards/auth.guard";
import { AppState } from "src/app/models";
import { NetworkService, StateService, ConfigService, AppPreloadingStrategy, ApiService, StyleManagerService, ThemeManagerService, NavigationService, StorageService } from "src/app/services";
import { MenuStore } from "src/app/store/menu.store";
import { ProductsStore } from "src/app/store/products.store";
import { ProductStore } from "src/app/store/product.store";
import { BreadcrumbStore } from "src/app/store/breadcrumb.store";
import { BasketStore } from "src/app/store/basket.store";
import { BasketService } from "src/app/services/basket.service";
import { ProductsService } from "src/app/services/products.service";

export function init(stateService: StateService, configService: ConfigService) {
  const promise = new Promise((resolve) => {
    stateService.setState(AppState.Loading);
    configService.init().then(() => {
      stateService.setState(AppState.Loaded);
      resolve(true);
    }, () => {
      stateService.setState(AppState.Error);
      resolve(false);
    });
  });
  return () => promise;
}

export const providers = [
  ApiService,
  NetworkService,
  StateService,
  ConfigService,
  BasketService,
  StorageService,
  AuthGuardService,
  AppPreloadingStrategy,
  ThemeManagerService,
  StyleManagerService,
  NavigationService,
  MenuStore,
  ProductsStore,
  ProductStore,
  BreadcrumbStore,
  BasketStore,
  ProductsService,
  Title,
  {
    provide: APP_INITIALIZER,
    useFactory: init,
    deps: [StateService, ConfigService],
    multi: true
  }
];
