import { MenuItemProps } from './MenuItemProps';

export interface CardProps {
  id?: string;
  title: string;
  description: string;
  package: MenuItemProps[];
  className?: string;
}
