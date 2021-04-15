import { Injectable } from "@angular/core";
import { makeObservable } from "mobx";
import { action, observable, computed } from "mobx-angular";
import { NavigationItem } from "../models/inavigation-item";

@Injectable()
export class MenuStore {

  constructor() {
    makeObservable(this);
  }

  @observable private items: NavigationItem[] = [];
  @observable public selectedNavigationItem: NavigationItem = { id: '', name: '' };

  @action public setMenus(navigationItems: NavigationItem[]) {
    this.items = navigationItems;
  }

  @action public setMenu(id: string) {
    const navigationItem = this.navigationItems.find(ni => ni.id === id);
    this.selectedNavigationItem = { ...navigationItem! };
  }

  @computed public get pageTitle() {
    return this.selectedNavigationItem?.pageTitle || this.selectedNavigationItem?.name;
  }

  @computed public get current() {
    return this.selectedNavigationItem;
  }

  @computed get navigationItems() {
    return this.items;
  }
}
