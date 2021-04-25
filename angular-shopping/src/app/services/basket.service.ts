import { Injectable } from '@angular/core';
import { BasketItem, Product } from 'src/app/models';
import { ApiService, NetworkService, StorageService } from 'src/app/services';
import { BasketStore } from 'src/app/store/basket.store';

@Injectable()
export class BasketService {

  private key = 'basket_key';
  private items: BasketItem[] = [];

  constructor(
    private storageService: StorageService,
    private basketStore: BasketStore,
    private networkServie: NetworkService,
    private apiService: ApiService) {
  }

  public init() {
    const items = this.storageService.getItem(this.key);
    if (items) {
      this.items = JSON.parse(items);
      this.getProducts()
        .subscribe((products: Product[]) => {
          const basketItems: BasketItem[] = [];
          this.items.forEach((b: BasketItem) => {
            const product = products.find(p => p.id === b.id);
            basketItems.push(this.createBasketItem({...product!, quantity: b.quantity}, b.productKey, b.quantity))
          });
          this.items = basketItems;
          this.basketStore.update(basketItems);
        });
      }
  }

  public add(product: Product, productKey: string) {
    let basketItem: BasketItem;
    const index = this.getItemIndex(product.id!, productKey);
    if (index === -1) {
      basketItem = this.createBasketItem(product, productKey, 1);
      this.items.push(basketItem);
    } else {
      basketItem = this.items[index];
      this.items[index] = this.createBasketItem(product, productKey, basketItem.quantity + 1);
    }
    this.update(productKey);
  }

  public remove(item: BasketItem) {
    const { id, productKey } = item;
    const index = this.getItemIndex(id, productKey);
    if (index > -1) {
      this.items.splice(index, 1);
      this.update(productKey);
    }
  }

  public removeOne(item: BasketItem) {
    const { id, productKey } = item;
    const index = this.getItemIndex(id, productKey);
    if (index > -1) {
      const basketItem = this.items[index];
      const { quantity, price } = basketItem;
      if (quantity === 1) {
        this.items.splice(index, 1);
      } else {
        this.items[index] = { ...basketItem, quantity: quantity - 1 };
      }
      this.update(productKey);
    }
  }

  private update(productKey: string) {
    const storageItems = this.items.map(item => ({ id: item.id, productKey, quantity: item.quantity }));
    if (storageItems.length > 0) {
      this.storageService.setItem(this.key, JSON.stringify(storageItems));
    } else {
      this.storageService.clear([this.key]);
    }
    this.basketStore.update(this.items);
  }

  private createBasketItem(product: Product, productKey: string, quantity: number) {
    const { id, imagesPath, name, description, sizes, price, productPhoto } = product;
    const { colour } = description!;

    const basketItem: BasketItem = {
      id: id!,
      image: imagesPath || this.getImagesPath(productKey, productPhoto?.name!),
      title: name + ' - ' + colour,
      colour: colour!,
      size: sizes?.find(s => s.isSelected)?.value!,
      price: price!,
      quantity,
      total: quantity * price!,
      productKey
    };
    return basketItem;
  }

  private getItemIndex(id: string, productKey: string) {
    return this.items.findIndex(item => item.id === id && item.productKey === productKey);
  }

  private getImagesPath(productKey: string, imageName: string) {
    return this.apiService.getUrl('catalogue', 'getImage', { productKey, imageName })
  }

  private getProducts() {
    const url = this.apiService.getUrl('catalogue', 'getBasketItems');
    return this.networkServie.post(url, this.items);
  }
}
