import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IProduct } from '../types/IProduct';
import { IStore } from '../types/IStore';

export const useStore = create<IStore>()(
  persist(
    (set) => ({
      cheeses: [
        {
          title: 'Ser cambridge',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '180',
          weight: '100g',
        },
        {
          title: 'Ser wiejski',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '280',
          weight: '250g',
        },
        {
          title: 'Syr',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque.',
          price: '320',
          weight: '500g',
        },
      ],
      coldCuts: [
        {
          title: 'Rosette',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '12',
          weight: '100g',
        },
        {
          title: 'Pasztet',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '11',
          weight: '100g',
        },
      ],
      alcohols: [
        {
          title: 'Winko',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '180',
          volume: '30cl',
          percent: '19%',
        },
      ],
      cartItems: [],
      addProduct: (
        title: string,
        body: string,
        price: string,
        weight: string,
      ) =>
        set((state: IStore) => ({
          cartItems: [
            ...state.cartItems,
            { title: title, body: body, price: price, weight: weight },
          ],
        })),
      removeProduct: (title: string) =>
        set((state: IStore) => ({
          cartItems: state.cartItems.filter(
            (product: IProduct) => product.title !== title,
          ),
        })),
      removeAllProducts: () => set({ cartItems: [] }),
    }),
    {
      name: 'store-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
