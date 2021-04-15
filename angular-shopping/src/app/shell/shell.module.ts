import { ApplicationRef, NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { imports, providers, declarations } from './module-config';

@NgModule({
  declarations: [...declarations],
  imports: [...imports, BrowserAnimationsModule],
  providers: [...providers],
  entryComponents: [],
})
export class ShellModule {
  ngDoBootstrap(ref: ApplicationRef) {
    ref.bootstrap(ShellComponent);
  }
}
