import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IProduct } from '../types/IProduct';
import { IStore } from '../types/IStore';

import Image_001 from '../assets/images/5-SER_kawalek_200g_le-Cuse-Nantay.png';
import Image_002 from '../assets/images/8-SER_waga_marcel-pettit.png';
import Image_003 from '../assets/images/9-SER_kawalek_450g_Le-Regain.png';
import Image_004 from '../assets/images/16-WEDLINA_rosette.png';
import Image_005 from '../assets/images/17-DELIKATESY_pasztet.png';
import Image_006 from '../assets/images/15-DELIKATESY_konfitura-z-cebuli.png';
import Image_007 from '../assets/images/13-DELIKATESY_smalec-z-gesii.png';
import Image_008 from '../assets/images/30-CATERING_skrzynka.png';
import Image_009 from '../assets/images/32-CATERING_placek.png';
import Image_010 from '../assets/images/27-ALKOHOLE_cydr-brut.png';

export const useStore = create<IStore>()(
  persist(
    (set) => ({
      cheeses: [
        {
          title: 'Ser cambridge',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '180',
          weight: '100g',
          imageURL: Image_001,
          imageALT: 'Ser cambridge',
        },
        {
          title: 'Ser wiejski',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '280',
          weight: '250g',
          imageURL: Image_002,
          imageALT: 'Ser wiejski',
        },
        {
          title: 'Syr',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque.',
          price: '320',
          weight: '500g',
          imageURL: Image_003,
          imageALT: 'Syr',
        },
      ],
      coldCuts: [
        {
          title: 'Rosette',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '12',
          weight: '100g',
          imageURL: Image_004,
          imageALT: 'Rosette',
        },
        {
          title: 'Pasztet',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '11',
          weight: '100g',
          imageURL: Image_005,
          imageALT: 'Pasztet',
        },
      ],
      deli: [
        {
          title: 'Konfitura z cebuli',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '19',
          weight: '200g',
          imageURL: Image_006,
          imageALT: 'Konfitura z cebuli',
        },
        {
          title: 'Smalec z gęsi',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '30',
          weight: '250g',
          imageURL: Image_007,
          imageALT: 'Smalec z gęsi',
        },
      ],
      catering: [
        {
          title: 'Deska degustacyjna',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '55',
          weight: '500g',
          imageURL: Image_008,
          imageALT: 'Deska degustacyjna',
        },
        {
          title: 'Quiche',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '95',
          weight: '500g',
          imageURL: Image_009,
          imageALT: 'Quiche',
        },
      ],
      alcohols: [
        {
          title: 'Winko',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue pharetra convallis. Proin rhoncus consequat purus eget congue. Sed vehicula enim consequat eros congue lacinia. Fusce placerat vel sem vel scelerisque. Waga produktu: 300g',
          price: '180',
          volume: '30cl',
          percent: '19%',
          imageURL: Image_010,
          imageALT: 'Winko',
        },
      ],
      cartItems: [],
      addProduct: (
        title: string,
        body: string,
        price: string,
        weight: string,
        imageURL: string,
        imageALT: string,
      ) =>
        set((state: IStore) => ({
          cartItems: [
            ...state.cartItems,
            {
              title: title,
              body: body,
              price: price,
              weight: weight,
              imageURL: imageURL,
              imageALT: imageALT,
            },
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
