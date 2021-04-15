import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService, ConfigService } from 'src/app/services';
import { AppState } from 'src/app/models';
import { BaseComponent } from '../base.component';

type ErrorType = 'error' | 'warning';

interface ErrorMessage {
  header: string;
  content: string;
  type: ErrorType;
}

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent extends BaseComponent implements OnInit, OnDestroy {
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
    this.subs.sink = this.stateService.appState$
      .subscribe((state: AppState) => {
        const message = this.getErrorMessage(state);
        this.setMessage(message);
      });
  }

  setMessage(errorMessage: ErrorMessage) {
    const { header, content, type } = errorMessage;
    this.header = header;
    this.content = content;
    this.isGenericError = type !== 'error';
  }

  getErrorMessage(state: AppState): ErrorMessage {
    const { genericErrorMessage } = this.configService.config;
    let message: string;
    switch (state) {
      default:
        message = genericErrorMessage!;
        break;
    }
    return JSON.parse(message);
  }
}
