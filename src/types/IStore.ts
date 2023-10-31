import { IProduct } from './IProduct';

export interface IStore {
  store: IProduct[];
  amount: number;
  addProduct: (title: string, body: string) => void;
  removeProduct: (title: string) => void;
  removeAllProducts: () => void;
}
