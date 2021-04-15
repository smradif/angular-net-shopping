import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Product } from 'src/app/models';
import { BaseComponent } from '../../base.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductComponent extends BaseComponent implements OnInit, OnDestroy {

  @Input() product: Product = {};
  public defaultCurrency: string = '';
  public imagesPath: string = '';

  public isOnSale: boolean = false;
  public isSoldOut: boolean = false;

  constructor(
    private productsService: ProductsService) {
    super();
  }

  ngOnInit() {
    this.isOnSale = this.product?.salePrice! > 0;
    this.isSoldOut = this.product?.quantity === 0;
    const { defaultCurrency } = this.productsService;
    this.defaultCurrency = defaultCurrency;
    this.imagesPath = this.productsService.getImagesPath(this.product.productPhoto?.name!);
  }
}
