import Image from 'next/image';
import Link from 'next/link';
import { Rating } from './Rating';
import { MarkdownResult } from '../types/utils';
import { Markdown } from './Markdown';
import { useCart } from './Cart/CartContext';

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  longDescription: MarkdownResult;
  imageUrl: string;
  imageAlt: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div className="p-4">
      <Image
        src={data.imageUrl}
        alt={data.imageAlt}
        layout="responsive"
        width={16}
        height={9}
        objectFit="contain"
      />
      <p className="font-bold mt-2 mb-2">{data.title}</p>
      <p className="text-sm">{data.description}</p>
      <article className="prose lg lg:prose-xl">
        <Markdown>{data.longDescription}</Markdown>
      </article>
      <Rating rating={data.rating} />
    </div>
  );
};

type ProductListItem = Pick<ProductDetails, 'id' | 'title' | 'imageUrl' | 'imageAlt'>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  const cartState = useCart();

  return (
    <div className="bg-white p-4">
      <Link href={`/products/details/${data.id}`}>
        <a>
          <Image
            src={data.imageUrl}
            alt={data.imageAlt}
            layout="responsive"
            width={16}
            height={9}
            objectFit="contain"
            quality={40}
          />
          <p className="font-bold text-xl mt-2 mb-2">{data.title}</p>
        </a>
      </Link>
      <button
        onClick={() =>
          cartState.addItemToCart({
            id: data.id,
            price: 21.37,
            title: data.title,
            count: 1,
          })
        }
        className="mt-4 ml-auto flex hover:text-emerald-400 focus:text-emerald-400 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-2">Dodaj do koszyka</span>
      </button>
    </div>
  );
};
