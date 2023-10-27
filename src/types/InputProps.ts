import { ChangeEvent } from 'react';

export interface InputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  className: string;
  required: boolean;
}

export interface InputActions {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
}
