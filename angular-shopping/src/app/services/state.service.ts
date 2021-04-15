import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppState } from '../models';

@Injectable()
export class StateService {
    public appState$: BehaviorSubject<AppState>;

    constructor() {
        this.appState$ = new BehaviorSubject(AppState.NotLoaded) as BehaviorSubject<AppState>;
    }

    public setState(state: AppState) {
        this.appState$.next(state);
    }

    public handleUnAuthorized(){
        this.appState$.next(AppState.AuthorizationError);
    }
}
