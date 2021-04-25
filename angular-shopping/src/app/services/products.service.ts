import { Injectable } from '@angular/core';
import { Product, ProductPhoto, ProductSize } from 'src/app/models';
import { ApiService, ConfigService, NetworkService } from 'src/app/services';
import { ProductStore } from 'src/app/store/product.store';
import { ProductsStore } from 'src/app/store/products.store';
import { BasketService } from './basket.service';

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
    private basketService: BasketService) {

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
      this.productStore.setProduct(newProduct);
    });
  }

  public selectImage(url: string) {
    this.productStore.selectImage(url);
  }

  public addToBasket() {
    this.basketService.add(this.productStore.product!, this.productKey);
  }

  private getImagesPath(imageName: string) {
    return this.apiService.getUrl('catalogue', 'getImage', { productKey: this.productKey, imageName })
  }

  private updateProduct(product: Product) {
    const { productPhoto, price, salePrice, quantity, sizes } = product;
    const { name, extra } = productPhoto!;
    const imagesPath = this.getImagesPath(name!);
    let photos: ProductPhoto[] = [{ name: imagesPath, isSelected: true }];

    for (let i = 1; i <= extra!; i++) {
      photos.push({ name: this.getImagesPath(name! + '-' + i) });
    }

    const updatedSizes = sizes?.map((size: ProductSize, index: number) => {
      return (index === 0) ? { ...size, isSelected: true } : { ...size };
    });

    const newProduct = {
      ...product,
      price,
      productPhoto: { ...productPhoto, photos },
      isOnSale: salePrice! > 0,
      isSoldOut: quantity === 0,
      imagesPath,
      sizes: updatedSizes,
      defaultCurrency: this.defaultCurrency
    };
    return newProduct;
  }

  private format(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
