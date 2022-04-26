import { CartItem } from './CartContext';

export const LOCAL_STORAGE_KEY = 'ZAKRECONY_STOLIK_CART';

export const getItemsFromLocalStorage = (): CartItem[] => {
  const itemsFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!itemsFromLocalStorage) {
    return [];
  }

  try {
    const items = JSON.parse(itemsFromLocalStorage);
    // !!! zakładamy, że items jest poprawne
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};
export const setCartItemsInLocalStorage = (items: CartItem[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
};
