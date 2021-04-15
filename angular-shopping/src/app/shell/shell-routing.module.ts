import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../models/routes';
import { AppPreloadingStrategy } from '../services/preloading-strategy.service';
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: AppPreloadingStrategy, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
