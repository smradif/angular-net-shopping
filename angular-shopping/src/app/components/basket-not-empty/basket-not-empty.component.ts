import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService, ConfigService } from 'src/app/services';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-basket-not-empty',
  templateUrl: './basket-not-empty.component.html',
  styleUrls: ['./basket-not-empty.component.scss']
})
export class BasketNotEmptyComponent extends BaseComponent implements OnInit, OnDestroy {
  public header: string = '';
  public content: string = '';
  public icon: string = '';
  public style: string = '';
  public isGenericError: boolean = false;

  constructor(
    private stateService: StateService,
    private configService: ConfigService) {
    super();
  }

  ngOnInit() {
  }
}
