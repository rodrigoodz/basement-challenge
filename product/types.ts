interface Option {
  label: string;
  values: string[];
}

export interface Product {
  id: string;
  image: string;
  price: number;
  name: string;
  options: Option[];
}

export interface CartProduct {
  image: string;
  name: string;
  price: number;
  quantity: number;
}
