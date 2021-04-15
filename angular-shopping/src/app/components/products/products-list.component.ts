import { Component, OnDestroy, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductsStore } from 'src/app/store/products.store';
import { BaseComponent } from '../base.component';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListComponent extends BaseComponent implements OnChanges, OnDestroy {

  @Input() productKey: string = '';
  public products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    public store: ProductsStore) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { previousValue, currentValue } = changes.productKey;
    if (previousValue !== currentValue) {
      this.productKey = currentValue;
      if (this.productKey) {
        this.getProducts();
      }
    }
  }

  private getProducts() {
    this.productsService.getProducts(this.productKey);
  }
}
