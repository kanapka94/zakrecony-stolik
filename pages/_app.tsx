import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from '../components/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { CartProvider } from '../components/Cart/CartContext';

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <DefaultSeo {...SEO} />
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
