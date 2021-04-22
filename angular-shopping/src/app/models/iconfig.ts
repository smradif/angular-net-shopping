import { IApi } from "./iapi";
import { SocialItem } from "./socialItem";

export interface IConfig {
  apiUrl?: string;
  apis: IApi;
  genericErrorMessage?: string;
  copyright: string;
  siteName: string;
  defaultCurrency?: string;
  socialItems: SocialItem[];
}
