import Link from 'next/link';

interface PageNumberProps {
  page: number;
  isActive: boolean;
}
export const PageNumber = ({ page, isActive }: PageNumberProps) => {
  return (
    <li className="mr-2">
      <Link href={`/products/${page}`}>
        <a
          href="#"
          className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded ${
            isActive && 'text-blue-600'
          }`}
          {...(isActive && { 'aria-current': 'page' })}
        >
          {page}
        </a>
      </Link>
    </li>
  );
};
