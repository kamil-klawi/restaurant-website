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
          body: '180zł',
        },
        {
          title: 'Ser wiejski',
          body: '280zł',
        },
        {
          title: 'Syr',
          body: '320zł',
        },
      ],
      amount: 3,
      addProduct: (title: string, body: string) =>
        set((state: IStore) => ({
          store: [...state.store, { title: title, body: body }],
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
