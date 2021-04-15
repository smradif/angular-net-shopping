import { IApi } from "./iapi";

export interface IConfig {
    apiUrl?: string;
    apis: IApi;
    genericErrorMessage?: string;
    copyright: string;
    siteName: string;
    defaultCurrency?: string;
}
