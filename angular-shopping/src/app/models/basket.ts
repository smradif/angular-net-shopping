import { Product } from ".";

export type BasketItem = {
  product?: Product;
  id: string;
  image: string;
  title: string;
  colour: string;
  size: string;
  price: number;
  quantity: number;
  total: number;
  productKey: string;
};

export type Basket = Map<string, BasketItem[]>; //{ [key: string]: BasketItem[] };
