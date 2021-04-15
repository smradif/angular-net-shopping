import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { NavigationService } from 'src/app/services';
import { ChildActivationEnd, Router } from '@angular/router';
import { BaseComponent } from 'src/app/components/base.component';
import { MenuStore } from 'src/app/store/menu.store';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private navigationService: NavigationService,
    public store: MenuStore) {
    super();
  }

  public ngOnInit(): void {
    this.subs.sink = this.router.events.pipe(
      filter(event => event instanceof ChildActivationEnd),
      take(1),
    ).subscribe(({ snapshot }: any) => {
      const key = snapshot.params ? snapshot.params['key'] : '';
      this.navigationService.getMenuItems(key);
    });
  }

  public navigate(id: string) {
    this.navigationService.setMenu(id);
    this.router.navigate(['products', id]);
  }
}
