import { useState } from 'react';
import { useQuery } from 'react-query';
import { Pagination } from '../components/Pagination/Pagination';
import { ProductListItem } from '../components/Product';

const getProducts = async (page = 0) => {
  const PRODUCTS_NUMBER = 25;
  const offset = page * PRODUCTS_NUMBER;

  const response = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_NUMBER}&offset=${offset}`
  );
  const data: StoreApiResponse[] = await response.json();

  return data;
};

const PAGINATION_OFFSET = 1;

const ProductsCSRPage = () => {
  const [page, setPage] = useState(0);
  const { isLoading, isError, data, isFetching } = useQuery(
    ['products', page],
    () => getProducts(page),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>Coś poszło nie tak</div>;
  }

  const handleChange = (page: number) => {
    setPage(page - PAGINATION_OFFSET);
  };

  return (
    <div>
      <h1 className="text-teal-300 text-lg">Produkty</h1>
      <p>Strona: {page + PAGINATION_OFFSET}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((product) => (
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
      <Pagination activePage={page + PAGINATION_OFFSET} onChange={handleChange} pages={10} />
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
