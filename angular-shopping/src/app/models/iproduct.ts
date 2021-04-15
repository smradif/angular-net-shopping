export interface Product {
  name?: string;
  description?: ProductDescription;
  price?: number;
  salePrice?: number;
  quantity?: number;
  productPhoto?: ProductPhoto;
}

export interface ProductDescription {
  colour: string;
  text: string;
}

export interface ProductPhoto {
  name?: string;
  extra?: number;
}
