import Link from 'next/link';
import { CartBar } from './Cart/CartBar';
import logo from '../public/icons/logo.svg';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="max-w-7xl py-4 px-6  mx-auto w-full flex items-center justify-between border-b-2">
      <nav className="py-2">
        <Link href="/">
          <a className="mx-2">
            <Image
              src={logo}
              alt="Zakręcony stolik logo"
              width={30}
              height={30}
              className="-mb-2"
            />
          </a>
        </Link>
        <Link href="/products">
          <a className="mx-2">Produkty</a>
        </Link>
        <Link href="/about">
          <a className="mx-2">O nas</a>
        </Link>
      </nav>
      <CartBar />
    </header>
  );
};
