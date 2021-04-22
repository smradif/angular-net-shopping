import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from 'src/app/components/base.component';
import { ProductsService } from 'src/app/components/products/products.service';
import { BreadcrumbStore } from 'src/app/store/breadcrumb.store';
import { BasketStore } from 'src/app/store/basket.store';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.componnt.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent extends BaseComponent implements OnInit, OnDestroy {
  public isEmpty: boolean = true;

  constructor(public store: BasketStore, private breadcrumbStore: BreadcrumbStore, private productsService: ProductsService) {
    super();
  }

  ngOnInit() {
    //this.breadcrumbStore.setBreadcrumb('Your Shopping Cart');
    //this.breadcrumbStore.setBreadcrumb();
  }
}
