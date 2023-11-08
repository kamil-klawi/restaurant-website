import { Dispatch, SetStateAction } from 'react';

export interface ModalProps {
  closeModal: Dispatch<SetStateAction<boolean>>;
  title: string | undefined;
  body: string | undefined;
  weight: string | undefined;
  price: string | undefined;
  imageURL: string | undefined;
  imageALT: string | undefined;
}
