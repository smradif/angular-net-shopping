import { Injectable } from '@angular/core';
import { Product } from 'src/app/models';
import { ApiService, ConfigService, NetworkService } from 'src/app/services';
import { BreadcrumbStore } from 'src/app/store/breadcrumb.store';
import { ProductStore } from 'src/app/store/product.store';
import { ProductsStore } from 'src/app/store/products.store';

@Injectable()
export class ProductsService {

  public productKey: string = '';
  public defaultCurrency: string = '';

  constructor(
    private configService: ConfigService,
    private apiService: ApiService,
    private networkService: NetworkService,
    private store: ProductsStore,
    private productStore: ProductStore,
    private breadcrumbStore: BreadcrumbStore) {

    const { defaultCurrency } = this.configService.config;
    this.defaultCurrency = defaultCurrency!;
  }

  public getProducts(productKey: string) {
    this.store.setProducts([]);
    this.productKey = productKey;
    const url = this.apiService.getUrl('catalogue', 'getProducts', { productKey });
    this.networkService.get(url).subscribe(data => {
      this.store.setProductKey(productKey);
      const updatedProducts = data.map((product: Product) => {
         return this.updateProduct(product)
      });
      this.store.setProducts(updatedProducts);
    });
  }

  public getProduct(productKey: string, productId: string) {
    this.productStore.setIsLoading(true);
    const url = this.apiService.getUrl('catalogue', 'getProduct', { productKey, productId });
    this.networkService.get(url).subscribe((product: Product) => {
      this.productKey = productKey;
      const newProduct = this.updateProduct(product);
      const name = `${product.name} - ${product.description?.colour}`;
      // this.breadcrumbStore.setBreadcrumb(name);
      this.productStore.setProduct(newProduct);
    });
  }

  private getImagesPath(imageName: string) {
    return this.apiService.getUrl('catalogue', 'getImage', { productKey: this.productKey, imageName })
  }

  private updateProduct(product: Product) {
    const isOnSale = product.salePrice! > 0;
    const isSoldOut = product.quantity === 0;
    const imagesPath = this.getImagesPath(product.productPhoto?.name!);
    const newProduct = { ...product, isOnSale, isSoldOut, imagesPath, defaultCurrency: this.defaultCurrency };
    return newProduct;
  }
}
