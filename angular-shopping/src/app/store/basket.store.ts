import { Injectable } from "@angular/core";
import { makeObservable } from "mobx";
import { action, observable, computed } from "mobx-angular";
import { Product, Basket } from "../models";

@Injectable()
export class BasketStore {

  constructor() {
    makeObservable(this);
  }

  @observable private items: Basket = {};

  @action public add(product: Product, productKey: string) {
    const key = this.getKey(product.id!, productKey);
    if (this.items[key]) {
      this.items[key].push({ product });
    } else {
      this.items[key] = [{ product }];
    }
  }

  @action public remove(product: Product, productKey: string) {
    const key = this.getKey(product.id!, productKey);
    if (this.items[key]) {
      this.items[key].pop();
    }
  }

  @computed get shoppingCartItems() {
    return this.items;
  }

  @computed get itemsCount() {
    let count = 0;
    Object.values(this.items).forEach((val) => {
      count += val.length;
    });
    return count;
  }

  private getKey(id: string, productKey: string) {
    return `${id}_${productKey}`;
  }

}
