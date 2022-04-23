import { useCart } from './CartContext';
import { CartListItem } from './CartListItem';

export const CartContent = () => {
  const cartState = useCart();

  if (!cartState.items.length) {
    return <p className="font-bold col-span-2">Brak produktów w koszyku</p>;
  }

  return (
    <div className="col-span-2">
      <ul className="divide-y divide-gray-200">
        {cartState.items.map((item, index) => (
          <CartListItem
            key={`${item.title}_${index}`}
            item={item}
            onRemove={cartState.removeItemFromCart}
          ></CartListItem>
        ))}
      </ul>
    </div>
  );
};
