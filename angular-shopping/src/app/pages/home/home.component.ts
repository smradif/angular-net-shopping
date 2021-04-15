import { Component } from '@angular/core';
import { MenuStore } from 'src/app/store/menu.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.componnt.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public productKey: string = 'featured';

  constructor(public store: MenuStore) {
  }


}
