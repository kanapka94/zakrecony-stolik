export interface StoreApiResponse {
  id: string;
  title: string;
  price: number;
  slug: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const getProducts = async (page: number = 1) => {
  const PRODUCTS_NUMBER = 15;
  const offset = page * PRODUCTS_NUMBER - PRODUCTS_NUMBER;

  const response = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_NUMBER}&offset=${offset}`
  );
  const data: StoreApiResponse[] = await response.json();

  return data;
};
