import { Route, PreloadingStrategy } from '@angular/router';
import { Observable, timer, of } from 'rxjs';
import { mergeMap  } from 'rxjs/operators';
import { LOAD_MODULES_AFTER } from '../models/constants';

export class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
      const loadRoute = (delay: number) => delay
          ? timer(LOAD_MODULES_AFTER).pipe(mergeMap (_ => load()))
          : load();
      return (route.data && route.data.preload)
          ? loadRoute(route.data.delay)
          : of(null);
    }
}