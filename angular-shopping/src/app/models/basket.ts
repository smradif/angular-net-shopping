import { Product } from ".";

export type BasketItem = {
  product: Product;
};

export type Basket = { [key: string]: BasketItem[] };
