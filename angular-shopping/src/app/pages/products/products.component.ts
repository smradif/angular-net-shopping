import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/components/base.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.componnt.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit, OnDestroy {
  public productKey: string = '';

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(){
    this.subs.sink = this.route.params.subscribe(params => {
      this.productKey = params['key'];
    });
  }
}
