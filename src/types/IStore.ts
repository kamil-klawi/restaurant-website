import { IAlcohol } from './IAlcohol';
import { IProduct } from './IProduct';

export interface IStore {
  store: IProduct[];
  alcohols: IAlcohol[];
  cartItems: IProduct[];
  addProduct: (
    title: string,
    body: string,
    price: string,
    weight: string,
  ) => void;
  removeProduct: (title: string) => void;
  removeAllProducts: () => void;
}
