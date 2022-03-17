import Link from 'next/link';
import { Rating } from './Rating';

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div>
      <Link href="/products">
        <a>Strona Główna</a>
      </Link>
      <div className="p-4">
        <img src={data.imageUrl} alt={data.imageAlt} />
        <p className="font-bold mt-2 mb-2">{data.title}</p>
        <p className="text-sm">{data.description}</p>
        <Rating rating={data.rating} />
      </div>
    </div>
  );
};

type ProductListItem = Pick<ProductDetails, 'id' | 'title' | 'imageUrl' | 'imageAlt'>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <div className="p-4">
      <img src={data.imageUrl} alt={data.imageAlt} />
      <Link href={`/products/${data.id}`}>
        <a href="">
          <p className="font-bold text-xl mt-2 mb-2">{data.title}</p>
        </a>
      </Link>
    </div>
  );
};
