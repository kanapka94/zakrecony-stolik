import { InferGetStaticPropsType } from 'next';
import { ProductListItem } from '../components/Product';

const ProductsPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>Produkty</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <li key={product.id} className="shadow border-0">
            <ProductListItem
              data={{
                id: product.id,
                title: product.title,
                imageUrl: product.image,
                imageAlt: product.title,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;

// kod wykonuje się w Node.js
export const getStaticProps = async () => {
  // nie możesz użyć window ani document!
  const response = await fetch('https://fakestoreapi.com/products');
  const data: StoreApiResponse[] = await response.json();

  return {
    props: {
      products: data,
    },
  };
};

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
