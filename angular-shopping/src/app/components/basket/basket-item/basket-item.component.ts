import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { StateService, ConfigService } from 'src/app/services';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketItemComponent extends BaseComponent implements OnInit, OnDestroy {
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
