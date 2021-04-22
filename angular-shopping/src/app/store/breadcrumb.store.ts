import { Injectable } from "@angular/core";
import { makeObservable } from "mobx";
import { action, observable, computed } from "mobx-angular";
import { BreadcrumbItem } from "../models";

const defaultBreadcrumbs: { [key: string]: string } = {
  basket: 'Your Shopping Cart'
};

const homeBreadcrumb = { text: 'Home', url: '/' };

@Injectable()
export class BreadcrumbStore {

  constructor() {
    makeObservable(this);
  }

  @observable private items: BreadcrumbItem[] = [];

  @action
  public setBreadcrumb(url: string) {
    this.items = [];
    const data = url.split('/').filter(Boolean);
    if (data.length === 1) {
      this.setShortBreadcrumb(data);
    } else if (data.length > 1) {
      this.setLongBreadcrumb(data);
    }
  }

  @computed get breadcrumbItems() {
    return this.items;
  }

  private getBreadcrumbItems(id: string) {
    const breadcrumb = defaultBreadcrumbs[id];
    if (breadcrumb) {
      return [{ text: breadcrumb }];
    }
    return [];
  }

  private getHost(data: string[]) {
    return data.length > 0 ? data[0].replace(/-/g, '') : undefined;
  }

  private setShortBreadcrumb(data: string[]) {
    const id = this.getHost(data);
    this.items = [homeBreadcrumb, ...this.getBreadcrumbItems(id!)];
  }

  private setLongBreadcrumb(data: string[]) {
    const lastItem = data.pop();
    while (data.length > 1) {
      const url = [...data].join('/');
      const text = data.pop();
      this.items.push({ text, url });
    }
    this.items.push({ text: lastItem });
    this.items.unshift(homeBreadcrumb);
  }
}
