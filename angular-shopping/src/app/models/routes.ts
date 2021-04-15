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
    data: { title: 'Featured collection', tooltip: 'Featured collection' }
  },
  {
    path: 'products/:key',
    loadChildren: () => import('../pages/products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuardService],
    data: { title: 'Products', preload: true, tooltip: 'Products page' }
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  { path: '**', redirectTo: '/not-found' }
];
