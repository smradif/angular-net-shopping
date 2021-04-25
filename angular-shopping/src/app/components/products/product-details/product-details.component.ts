import { Component, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/models';
import { BaseComponent } from '../../base.component';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailsComponent extends BaseComponent implements OnDestroy {

  @Input() product: Product = {};

  constructor(private productService: ProductsService) {
    super();
  }


  selectImage(name: string) {
    this.productService.selectImage(name);
  }

  addToCart() {
    this.productService.addToBasket();
  }
}
