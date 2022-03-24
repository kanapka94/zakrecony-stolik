import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { ProductDetails } from '../../../components/Product';

const ProductDetailsIdPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) {
    return <div>Ups.. Coś poszło nie tak</div>;
  }

  return (
    <div>
      <NextSeo
        title={product.title}
        description={product.description}
        canonical={`https://naszsklep.vercel.app/products/${product.id}`}
        openGraph={{
          type: 'website',
          url: `https://naszsklep.vercel.app/products/${product.id}`,
          title: product.title,
          description: product.description,
          images: [
            {
              url: product.image,
              width: 800,
              height: 600,
              alt: product.title,
            },
          ],
        }}
      />
      <ProductDetails
        data={{
          id: product.id,
          title: product.title,
          description: product.description,
          imageUrl: product.image,
          imageAlt: product.title,
          rating: product.rating.rate,
          longDescription: product.longDescription,
        }}
      />
    </div>
  );
};

// definiujemy zakres ścieżek dla Next'a. W przeciwnym przypadku skąd Next ma wiedzieć ile wygenerować ścieżek ?
export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const response = await fetch('https://naszsklep-api.vercel.app/api/products');
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

  const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${params.id}`);
  const data: StoreApiResponse | null = await response.json();

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  const compiledMarkdown = await serialize(data.longDescription);

  return {
    props: {
      product: {
        ...data,
        longDescription: compiledMarkdown,
      },
    },
  };
};

export default ProductDetailsIdPage;

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
