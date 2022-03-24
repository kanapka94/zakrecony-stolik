import Link from 'next/link';
import { CartBar } from './Cart/CartBar';

export const Header = () => {
  return (
    <header className="max-w-7xl px-4 mx-auto w-full flex bg-gray-300 items-center justify-between">
      <nav className="py-2">
        <Link href="/">
          <a className="mx-2">🏠</a>
        </Link>
        <Link href="/about">
          <a className="mx-2">About</a>
        </Link>
        <Link href="/products">
          <a className="mx-2">Products</a>
        </Link>
      </nav>
      <CartBar />
    </header>
  );
};
