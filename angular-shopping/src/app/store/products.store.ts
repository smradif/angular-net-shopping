import { Injectable } from "@angular/core";
import { makeObservable } from "mobx";
import { computed, action, observable } from "mobx-angular";
import { Product } from "../models";

@Injectable()
export class ProductsStore {

  constructor() {
    makeObservable(this);
  }

  @observable public productKey: string = '';
  @observable private prods: Product[] = [];

  @action public setProductKey(productKey: string) {
    this.productKey = productKey;
  }

  @action public setProducts(products: Product[]) {
    this.prods = products;
  }

  @computed public get products() {
    return this.prods;
  }
}
