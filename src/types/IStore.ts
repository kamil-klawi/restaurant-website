import { IAlcohol } from './IAlcohol';
import { IProduct } from './IProduct';

export interface IStore {
  cheeses: IProduct[];
  coldCuts: IProduct[];
  deli: IProduct[];
  catering: IProduct[];
  alcohols: IAlcohol[];
  cartItems: IProduct[];
  addProduct: (
    title: string,
    body: string,
    price: string,
    weight: string,
    imageURL: string,
    imageALT: string,
  ) => void;
  removeProduct: (title: string) => void;
  removeAllProducts: () => void;
}
