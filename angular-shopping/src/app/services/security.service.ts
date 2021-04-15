import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NetworkService } from './network.service';
import { StateService } from './state.service';
import { ApiService } from './api.service';

@Injectable()
export class SecurityService {
    public authenticated: boolean = false;
    public isAuthenticated$ = new BehaviorSubject<boolean>(false);
    public authenticated$ = new BehaviorSubject<string>('');

    isIframe = false;
    loggedIn = false;

    constructor(
        private networkService: NetworkService,
        private stateService: StateService,
        private apiService: ApiService,
    ) {
    }

    login() {
    }

    logout() {
    }

    handleUnAuthorized() {
        this.stateService.handleUnAuthorized();
    }
}
