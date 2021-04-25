import { Component, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/models';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductComponent extends BaseComponent implements OnDestroy {
  @Input() product: Product = {};
}
