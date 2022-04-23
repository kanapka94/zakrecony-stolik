import { CartItem } from './CartContext';

interface CartListItemProps {
  item: CartItem;
  onRemove: (item: number) => void;
}

export const CartListItem = ({ item, onRemove }: CartListItemProps) => (
  <li className="py-4 flex justify-between">
    <span>
      {item.count} x {item.title}
    </span>
    <div className="flex">
      <span className="ml-2">{item.price}</span>
      <button
        onClick={() => onRemove(item.id)}
        className="ml-4 text-red-500 flex"
        aria-label="Usuń element"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  </li>
);
