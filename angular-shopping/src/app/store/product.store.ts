import { Injectable } from "@angular/core";
import { makeObservable } from "mobx";
import { computed, action, observable } from "mobx-angular";
import { Product } from "../models";

@Injectable()
export class ProductStore {

  constructor() {
    makeObservable(this);
  }

  @observable public prodKey: string = '';
  @observable public prod: Product | undefined = undefined;
  @observable public isLoading: boolean = false;

  @action public setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  @action public setProduct(product: Product) {
    this.prod = product;
    this.isLoading = false;
  }

  @action public selectImage(url: string) {
    const photos = this.prod?.productPhoto?.photos?.map(p => {
      return { ...p, isSelected: p.name === url };
    });
    this.prod = { ...this.prod, productPhoto: { ...this.prod?.productPhoto, photos } };
  }

  @computed public get productKey() {
    return this.prodKey;
  }

  @computed public get product() {
    return this.prod;
  }
}
