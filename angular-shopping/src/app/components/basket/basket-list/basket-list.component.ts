import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { BasketItem, Product } from 'src/app/models';
import { BasketStore } from 'src/app/store/basket.store';
import { BaseComponent } from '../../base.component';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BasketListComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(public store: BasketStore, private service: BasketService) {
    super();
  }

  ngOnInit() {
  }

  removeItem(item: BasketItem) {
    this.service.remove(item);
  }

  updateQuantity(e: any, item: BasketItem) {
    const value = e.target.value;

    if (value) {
      const quantity = Number(value);
      if (Number.isInteger(quantity)) {
        this.store.updateQuantity(item, value);
      }
    }

  }

  updateBasket() {

  }
}
