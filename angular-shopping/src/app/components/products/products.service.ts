import { Injectable } from '@angular/core';
import { ApiService, ConfigService, NetworkService } from 'src/app/services';
import { ProductsStore } from 'src/app/store/products.store';

@Injectable()
export class ProductsService {

  public productKey: string = '';
  public defaultCurrency: string = '';

  constructor(
    private configService: ConfigService,
    private apiService: ApiService,
    private networkService: NetworkService,
    private store: ProductsStore) {
      
    const { defaultCurrency } = this.configService.config;
    this.defaultCurrency = defaultCurrency!;
  }

  public getProducts2(productKey: string) {
    this.productKey = productKey;
    const url = this.apiService.getUrl('catalogue', 'getProducts', { productKey });
    return this.networkService.get(url);
  }

  public getProducts(productKey: string) {
    this.productKey = productKey;
    const url = this.apiService.getUrl('catalogue', 'getProducts', { productKey });
    this.networkService.get(url).subscribe(data => {
      this.store.setProductKey(productKey);
      this.store.setProducts(data);
    });
  }

  public getProduct(productKey: string, productId: string) {
    this.productKey = productKey;
    const url = this.apiService.getUrl('catalogue', 'getProduct', { productKey, productId });
    return this.networkService.get(url);
  }

  public getImagesPath(imageName: string) {
    return this.apiService.getUrl('catalogue', 'getImage', { productKey: this.productKey, imageName })
  }
}
