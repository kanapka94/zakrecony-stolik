import { useCart } from './CartContext';

export const CartSummary = () => {
  const cartState = useCart();

  return (
    <div>
      Podsumowanie koszyka
      <p className="font-bold">Liczba elementów: {cartState.items.length}</p>
    </div>
  );
};
