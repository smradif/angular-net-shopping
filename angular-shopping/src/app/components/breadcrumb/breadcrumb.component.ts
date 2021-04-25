import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { BreadcrumbStore } from 'src/app/store/breadcrumb.store';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent extends BaseComponent implements OnInit, OnDestroy {
  constructor(public store: BreadcrumbStore, private router: Router, private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.subs.sink = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data))
      .subscribe(() => {
        const url = decodeURIComponent(this.router.url);
        this.store.setBreadcrumb(url);
      });
  }
}
