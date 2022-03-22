import Link from 'next/link';

export const Header = () => {
  return (
    <header className="max-w-7xl mx-auto w-full">
      <nav className="bg-gray-300 px-4 py-2">
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
    </header>
  );
};
