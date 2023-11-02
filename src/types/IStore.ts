import { IProduct } from './IProduct';

export interface IStore {
  store: IProduct[];
  amount: number;
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
