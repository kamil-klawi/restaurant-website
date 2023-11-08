import { Dispatch, SetStateAction } from 'react';

export interface StoreCardProps {
  openModal: Dispatch<SetStateAction<boolean>>;
  title: string;
  price: string;
  imageURL: string;
  imageALT: string;
  setProduct: () => void;
}
