import useSWR from 'swr';
import { fetchProducts } from '../api/fetcher';
import { Product } from '../types/product';

interface UseProductsResult {
  products?: Product[];
  isLoading: boolean;
  isError?: Error;
}

export const useProducts = (): UseProductsResult => {
  const { data, error } = useSWR<Product[]>('/products', fetchProducts);

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
};
