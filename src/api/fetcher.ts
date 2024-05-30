import { Product } from '../types/product';
import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Ganti dengan URL backend Anda

export const fetchProducts = async (): Promise<Product[]> => {
  // Mengambil nilai token dari cookie dengan nama 'token'
  const token = getCookie('token');

  const response = await axios.get<ProductResponse>(`${baseURL}/products`, {
    headers: {
      Authorization: `Bearer ${token}`, // Menggunakan nilai token dari cookie
    },
  });
  const data = response.data.data; // Assuming your API response has a `data` property
  return data;
};

interface ProductResponse {
  data: Product[];
}

// Fungsi untuk mendapatkan nilai cookie berdasarkan nama
function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}
