export interface IProduct {
  tag: string;
  title: string;
  body: string;
  price: string;
  weight: string;
  imageURL: string;
  imageALT: string;
}

export type TCart = Omit<IProduct, 'body'>;
