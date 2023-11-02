export interface IProduct {
  title: string;
  body: string;
  price: string;
  weight: string;
}

export type TCart = Omit<IProduct, 'body'>;
