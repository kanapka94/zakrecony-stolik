import Image from 'next/image';
import Link from 'next/link';
import { Rating } from './Rating';
import ReactMarkdown from 'react-markdown';

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  longDescription: string;
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
        <ReactMarkdown>{data.longDescription}</ReactMarkdown>
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
  return (
    <div className="bg-white p-4">
      <Image
        src={data.imageUrl}
        alt={data.imageAlt}
        layout="responsive"
        width={16}
        height={9}
        objectFit="contain"
        quality={40}
      />
      <Link href={`/products/details/${data.id}`}>
        <a>
          <p className="font-bold text-xl mt-2 mb-2">{data.title}</p>
        </a>
      </Link>
    </div>
  );
};
