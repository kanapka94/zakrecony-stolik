import { useQuery } from 'react-query';
import { ProductDetails } from '../components/Product';

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data: StoreApiResponse[] = await response.json();

  return data;
};

const ProductsCSRPage = () => {
  const { isLoading, isError, data } = useQuery('products', getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>Coś poszło nie tak</div>;
  }

  return (
    <div>
      <h1>Produkty</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((product) => (
          <li key={product.id} className="shadow border-0">
            <ProductDetails
              data={{
                title: product.title,
                description: product.description,
                imageUrl: product.image,
                imageAlt: product.title,
                rating: product.rating.rate,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsCSRPage;

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
