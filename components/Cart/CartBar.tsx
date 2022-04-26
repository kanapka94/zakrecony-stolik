import Link from 'next/link';
import { useCart } from './CartContext';
import { Number } from './Number';

export const CartBar = () => {
  const cartState = useCart();

  return (
    <Link href="/cart">
      <a className="inline-flex relative">
        {cartState.items.length > 0 && <Number number={cartState.items.length}></Number>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </a>
    </Link>
  );
};
