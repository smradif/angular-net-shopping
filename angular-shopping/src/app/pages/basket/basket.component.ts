import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from 'src/app/components/base.component';
import { BasketStore } from 'src/app/store/basket.store';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.componnt.html',
  styleUrls: ['./basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketComponent extends BaseComponent implements OnInit, OnDestroy {
  public isEmpty: boolean = true;

  constructor(public store: BasketStore) {
    super();
  }

  ngOnInit() {
    //this.breadcrumbStore.setBreadcrumb('Your Shopping Cart');
    //this.breadcrumbStore.setBreadcrumb();
  }
}
