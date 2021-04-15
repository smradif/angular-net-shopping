import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { IApi } from '../models/iapi';

@Injectable()
export class ApiService {
    private apis: IApi;
    constructor(configService: ConfigService) {
        this.apis = configService.config.apis;
    }

    public getUrl<
        P1 extends keyof NonNullable<IApi>,
        P2 extends keyof NonNullable<NonNullable<IApi>[P1]>>(
            prop1: P1, prop2: P2,
            values?: { [id: string ]: string | undefined },
            query?: { [id: string]: string | undefined }) {
        const props = [prop1, prop2];
        let uri = props.reduce(
            (result, prop) => result == null ? undefined : result[prop],
            this.apis as any
        );
        if (uri) {
            const matcher = /[^{}]*(?=\})/g;
            const matches = uri.match(matcher);
            (matches || []).filter(Boolean).forEach((m: any) => {
                const v = values![m];
                if (v !== undefined) {
                    uri = uri.replace(`{${m}}`, encodeURIComponent(v));
                } else {
                    throw Error(`Missing segment ${m}`);
                }
            });
            if (query) {
                let q = '';
                Object.keys(query)
                    .sort()
                    .forEach((k) => {
                        if (query[k] !== undefined) {
                            q = `${q}${q === '' ? '' : '&'}${k}=${query[k]}`;
                        }
                    });
                if (q !== '') {
                    uri = `${uri}?${q}`;
                }
            }
            return uri;
        }
        throw Error(`Unable to find route`);
    }
}

