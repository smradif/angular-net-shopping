import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationItem } from '../models/inavigation-item';
import { MenuStore } from '../store/menu.store';
import { ConfigService } from './config.service';
import { NetworkService } from './network.service';

@Injectable()
export class NavigationService {
  constructor(
    private configService: ConfigService,
    private networkService: NetworkService,
    private menuStore: MenuStore,
    private titleService: Title) {
  }

  public getMenuItems(id?: string) {
      const url = this.configService.config.apis.catalogue.getMenu;
      this.networkService.get(url).subscribe((results: NavigationItem[]) => {
        this.menuStore.setMenus(results);
        this.setMenu(id || results[0].id);
      });
  }

  public setMenu(id: string){
    this.menuStore.setMenu(id);
    this.titleService.setTitle(this.menuStore.pageTitle);
  }
}
