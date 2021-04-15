import { Injectable } from '@angular/core';
import { IEnv, IConfig, IUser } from '../models';
import { NetworkService } from './network.service';

@Injectable()
export class ConfigService {

    private appConfig: IConfig;
    private appUser: IUser | undefined;

    constructor(
        private networkService: NetworkService) {
        const env = (window as any).__env;
        this.appConfig = { ...env };
    }

    public get config() {
        return this.appConfig;
    }

    public get user() {
        return this.appUser;
    }

    public init() {
        return new Promise((resolve, reject) => {
            this.networkService.get(`${this.appConfig.apiUrl}`)
                .subscribe(
                    (result: IConfig) => {
                        this.appConfig = { ...this.appConfig, ...result };
                        resolve(true);
                    }, error => {
                        console.error(`Config: ${error.message}`);
                        reject(error);
                    });
        });
    }

}
