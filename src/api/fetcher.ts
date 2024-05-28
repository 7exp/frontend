import { Product } from '../types/product';
import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Ganti dengan URL backend Anda

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<ProductResponse>(`${baseURL}/products`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IkpvaG4gRG9lIiwiYWRkcmVzcyI6bnVsbCwiaWF0IjoxNzE2OTAxMzUzLCJleHAiOjE3MTY5MDQ5NTN9.NqdYAWNdspSIaNPnWn0JtLF02jpmOH_nG_iyV-JwD_4',
    },
  });
  const data = response.data.data; // Assuming your API response has a `data` property
  return data;
};

interface ProductResponse {
  data: Product[];
}
