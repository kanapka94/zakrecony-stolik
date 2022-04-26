import { GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { ProductDetails } from '../../../components/Product';
import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from '../../../generated/graphql';
import { apolloClient } from '../../../graphql/apolloClient';

const ProductDetailsIdPage = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!product) {
    return <div>Ups.. Coś poszło nie tak</div>;
  }

  return (
    <div>
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0].url,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />
      <ProductDetails
        data={{
          id: product.slug,
          title: product.name,
          description: product.description,
          imageUrl: product.images[0].url,
          imageAlt: product.name,
          rating: 5,
          longDescription: product.longDescription,
        }}
      />
    </div>
  );
};

// definiujemy zakres ścieżek dla Next'a. W przeciwnym przypadku skąd Next ma wiedzieć ile wygenerować ścieżek ?
export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  return {
    paths: data.products.map((product) => ({ params: { id: product.slug.toString() } })),
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

  const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
  >({
    variables: {
      slug: params.id,
    },
    query: GetProductDetailsBySlugDocument,
  });

  if (!data || !data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  const compiledMarkdown = await serialize(data.product.description);

  return {
    props: {
      product: {
        ...data.product,
        longDescription: compiledMarkdown,
      },
    },
  };
};

export default ProductDetailsIdPage;
