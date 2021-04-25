import { componentFactoryName } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { makeObservable } from "mobx";
import { action, observable, computed } from "mobx-angular";
import { BasketItem } from "../models";

@Injectable()
export class BasketStore {

  constructor() {
    makeObservable(this);
  }

  @observable private items: BasketItem[] = [];

  @action public update(items: BasketItem[]) {
    this.items = [...items];
  }

  @action updateQuantity(item: BasketItem, newQuantity: number) {
    const index = this.items.findIndex(i => i.id === item.id && i.productKey === item.productKey);
    if (newQuantity === 0) {
      this.items.splice(index);
    } else {
      this.items[index] = { ...this.items[index], quantity: newQuantity };
    }
  }

  @computed get basketItems() {
    return this.items;
  }

  @computed get total() {
    let total = 0;
    this.items.forEach(item => {
      total += item.quantity * item.price;
    });
    return total;
  }

  @computed get quantity() {
    let count = 0;
    this.items.forEach(item => {
      count += item.quantity;
    })
    return count;
  }

  @computed get hasItems() {
    return this.quantity > 0;
  }

}
