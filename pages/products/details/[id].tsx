import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { ProductDetails } from '../../../components/Product';

const ProductDetailsIdPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) {
    return <div>Ups.. Coś poszło nie tak</div>;
  }

  return (
    <div>
      <ProductDetails
        data={{
          id: product.id,
          title: product.title,
          description: product.description,
          imageUrl: product.image,
          imageAlt: product.title,
          rating: product.rating.rate,
        }}
      />
    </div>
  );
};

// definiujemy zakres ścieżek dla Next'a. W przeciwnym przypadku skąd Next ma wiedzieć ile wygenerować ścieżek ?
export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data: StoreApiResponse[] = await response.json();

  return {
    paths: data.map((product) => ({ params: { id: product.id.toString() } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
  if (!params?.id) {
    return {
      props: {},
      notFound: true,
    };
  }

  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data: StoreApiResponse | null = await response.json();

  return {
    props: {
      product: data,
    },
  };
};

export default ProductDetailsIdPage;

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
