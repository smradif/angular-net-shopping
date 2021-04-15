import { Injectable } from "@angular/core";
import { makeObservable } from "mobx";
import { computed, action, observable } from "mobx-angular";
import { Product } from "../models";

@Injectable()
export class ProductStore {

  constructor() {
    makeObservable(this);
  }

  @observable public product2: Product | undefined = undefined;

  @action public setProduct(product: Product) {
    this.product2 = product;
  }

  @computed public get product() {
    return this.product2;
  }
}
