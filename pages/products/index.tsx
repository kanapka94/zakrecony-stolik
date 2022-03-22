import { InferGetStaticPropsType } from 'next';
import { Pagination } from '../../components/Pagination/Pagination';
import { ProductListItem } from '../../components/Product';
import { getProducts } from './[pageId]';

const ProductsPage = ({ products, pageId }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!products || !pageId) {
    return <div>Ups... Coś poszło nie tak</div>;
  }

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
      <Pagination activePage={+pageId} pages={10} />
    </div>
  );
};

export const getStaticProps = async () => {
  const DEFAULT_PAGE = 1;
  const data = await getProducts(DEFAULT_PAGE);

  return {
    props: {
      products: data,
      pageId: DEFAULT_PAGE,
    },
  };
};

export default ProductsPage;
