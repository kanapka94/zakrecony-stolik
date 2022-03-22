import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { Pagination } from '../../components/Pagination/Pagination';
import { ProductListItem } from '../../components/Product';

export const getProducts = async (page: number = 1) => {
  const PRODUCTS_NUMBER = 25;
  const offset = page * PRODUCTS_NUMBER - PRODUCTS_NUMBER;

  const response = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_NUMBER}&offset=${offset}`
  );
  const data: StoreApiResponse[] = await response.json();

  return data;
};

const ProductsPageIdPage = ({
  products,
  pageId,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export default ProductsPageIdPage;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Array.from({ length: 10 }, (_, i) => ({
    params: {
      pageId: (i + 1).toString(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

// kod wykonuje się w Node.js
export const getStaticProps = async ({ params }: GetStaticPropsContext<{ pageId: string }>) => {
  // nie możesz użyć window ani document!
  if (!params?.pageId || isNaN(Number(params?.pageId))) {
    return {
      props: {},
      notFound: true,
    };
  }

  const data = await getProducts(+params.pageId);

  return {
    props: {
      products: data,
      pageId: params.pageId,
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
