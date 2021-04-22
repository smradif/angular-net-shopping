import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/components/base.component';
import { ProductsService } from 'src/app/components/products/products.service';
import { ProductStore } from 'src/app/store/product.store';

@Component({
  selector: 'app-product',
  templateUrl: './product.componnt.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends BaseComponent implements OnInit, OnDestroy {
  public productKey: string = '';
  public productId: string = '';
  
  constructor(public store: ProductStore, private route: ActivatedRoute, private productsService: ProductsService) {
    super();
  }

  ngOnInit() {
    this.subs.sink = this.route.params.subscribe(params => {
      this.productKey = params['key'];
      this.productId = params['id'];
      this.productsService.getProduct(this.productKey, this.productId);
    });
  }
}
