import { Dispatch, SetStateAction } from 'react';

export interface ModalProps {
  closeModal: Dispatch<SetStateAction<boolean>>;
  title: string;
  body: string;
  weight: string;
  price: string;
}
