import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { MenuStore } from 'src/app/store/menu.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.componnt.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public productKey: string = 'featured';

  constructor(public store: MenuStore, private productsService: ProductsService) {
  }
  ngOnInit(): void {
    this.store.setMenu(this.productKey);
    this.productsService.getProducts(this.productKey);
  }
}
