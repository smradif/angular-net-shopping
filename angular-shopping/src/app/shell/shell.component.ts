import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '../components/base.component';
import { BasketService } from '../components/basket/basket.service';
import { AppState } from '../models';
import { StateService } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent extends BaseComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  public hasLoaded: boolean = false;
  public hasError: boolean = false;
  public title: string = '';

  constructor(private stateService: StateService, private basketService: BasketService) {
      super();
  }

  private setState(state: AppState) {
    this.isLoading = false;
    this.hasError = false;
    this.hasLoaded = false;
    switch (state) {
      case AppState.NotLoaded:
      case AppState.Loading:
        this.isLoading = true;
        break;
      case AppState.Loaded:
        this.hasLoaded = true;
        break;
      case AppState.Error:
      case AppState.AuthorizationError:
        this.hasError = true;
        break;
      default:
        break;
    }
  }

  public ngOnInit(): void {
    this.subs.sink = this.stateService.appState$.subscribe((state: AppState) => {
      this.setState(state);
    });
    this.basketService.init();
  }
}


