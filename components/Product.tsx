import { Rating } from './Rating';

interface ProductProps {
  data: {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    rating: number;
  };
}

export const Product = ({ data }: ProductProps) => {
  return (
    <div className="p-4">
      <img src={data.imageUrl} alt={data.imageAlt} />
      <p className="font-bold mt-2 mb-2">{data.title}</p>
      <p className="text-sm">{data.description}</p>
      <Rating rating={data.rating} />
    </div>
  );
};
