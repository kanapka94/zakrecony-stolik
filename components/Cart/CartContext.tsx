import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { getItemsFromLocalStorage, setCartItemsInLocalStorage } from './cartStorage';

export interface CartItem {
  id: number;
  price: number;
  title: string;
  count: number;
}

interface CartState {
  items: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem['id']) => void;
}

export const CartContext = createContext<CartState | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getItemsFromLocalStorage());
  }, []);

  useEffect(() => {
    setCartItemsInLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) => {
          setCartItems((prevState) => {
            const existingItem = prevState.find((existingItem) => existingItem.id === item.id);

            if (!existingItem) {
              return [...prevState, item];
            }

            const updatedItem = { ...existingItem, count: existingItem.count + 1 };

            return prevState.map((existingItem) =>
              existingItem.id === item.id ? updatedItem : existingItem
            );
          });
        },
        removeItemFromCart: (id) => {
          setCartItems((prevState) => {
            const itemToRemove = prevState.find((item) => item.id === id);

            if (itemToRemove && itemToRemove.count <= 1) {
              return prevState.filter((item) => item.id !== itemToRemove.id);
            }

            return prevState.map((existingItem) => {
              if (existingItem.id === id) {
                return { ...existingItem, count: existingItem.count - 1 };
              }

              return existingItem;
            });
          });
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
