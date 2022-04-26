import { InferGetStaticPropsType } from 'next';
import { ProductListItem } from '../../components/Product';
import { GetProductsListDocument, GetProductsListQuery } from '../../generated/graphql';
import { apolloClient } from '../../graphql/apolloClient';

const ProductsPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!products) {
    return <div>Ups... Coś poszło nie tak :|</div>;
  }

  return (
    <div className="col-span-2">
      <h1 className="mb-4">Produkty</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <li key={product.id} className="shadow hover:shadow-md transition-shadow border-0">
            <ProductListItem
              data={{
                id: product.slug,
                title: product.name,
                imageUrl: product.images[0].url,
                imageAlt: product.name,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: GetProductsListDocument,
  });

  return {
    props: {
      products: data.products,
    },
  };
};

export default ProductsPage;
