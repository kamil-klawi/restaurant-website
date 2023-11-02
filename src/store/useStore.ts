import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IProduct } from '../types/IProduct';
import { IStore } from '../types/IStore';

export const useStore = create<IStore>()(
  persist(
    (set) => ({
      store: [
        {
          title: 'Ser cambridge',
          body: 'Jakiś tekst',
          price: '180',
          weight: '100g',
        },
        {
          title: 'Ser wiejski',
          body: 'Jakiś tekst',
          price: '280',
          weight: '250g',
        },
        {
          title: 'Syr',
          body: 'Jakiś tekst',
          price: '320',
          weight: '500g',
        },
      ],
      amount: 3,
      cartItems: [],
      addProduct: (
        title: string,
        body: string,
        price: string,
        weight: string,
      ) =>
        set((state: IStore) => ({
          store: [
            ...state.store,
            { title: title, body: body, price: price, weight: weight },
          ],
          // cartItems: [
          //   ...state.cartItems,
          //   { title: title, body: body, price: price, weight: weight },
          // ],
        })),
      removeProduct: (title: string) =>
        set((state: IStore) => ({
          store: state.store.filter(
            (product: IProduct) => product.title !== title,
          ),
        })),
      removeAllProducts: () => set({ store: [] }),
    }),
    {
      name: 'store-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
