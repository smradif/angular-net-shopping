export interface IApi {
  auth: IAuthApi;
  catalogue: ICatalogueApi;
  payment: IPaymentApi;
  logger: ILoggerApi;
}

interface IAuthApi {
  authenticate: string;
  refreshToken: string;
  verify: string;
  signOut: string;
}

interface ICatalogueApi {
  getMenu: string;
  getProducts: string;
  getProduct: string;
  getImage: string;
}

interface IPaymentApi {
  getMethods: string;
  getCost: string;
}

interface ILoggerApi {
  logError: string;
}
