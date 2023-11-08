export interface IProduct {
  title: string;
  body: string;
  price: string;
  weight: string;
  imageURL: string;
  imageALT: string;
}

export type TCart = Omit<IProduct, 'body'>;
