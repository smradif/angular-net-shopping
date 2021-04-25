export interface Product {
  id?: string;
  name?: string;
  description?: ProductDescription;
  price?: number;
  salePrice?: number;
  quantity?: number;
  productPhoto?: ProductPhoto;
  sizes?: ProductSize[];

  defaultCurrency?: string ;
  imagesPath?: string;
  isOnSale?: boolean;
  isSoldOut?: boolean;
}

export interface ProductDescription {
  colour: string;
  text: string;
}

export interface ProductPhoto {
  name?: string;
  extra?: number;
  photos?: ProductPhoto[];
  isSelected?: boolean;
}

export interface ProductSize {
  value: string;
  isSelected?: boolean;
}
