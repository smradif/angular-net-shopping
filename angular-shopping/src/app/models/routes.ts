import { Route } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AuthGuardService } from '../guards/auth.guard';
import { RouteData } from ".";
import { HomeComponent } from '../pages/home/home.component';

export interface ShoppingRoute extends Route {
  data?: RouteData;
}

export const routes: ShoppingRoute[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'products/:key',
    loadChildren: () => import('../pages/products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuardService],
    data: { preload: true }
  },
  {
    path: 'products/:key/:id',
    loadChildren: () => import('../pages/product/product.module').then(m => m.ProductModule),
    canActivate: [AuthGuardService],
    data: { preload: true }
  },
  {
    path: 'basket',
    loadChildren: () => import('../pages/basket/basket.module').then(m => m.BasketModule),
    canActivate: [AuthGuardService],
    data: { preload: true }
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  { path: '**', redirectTo: '/not-found' }
];
