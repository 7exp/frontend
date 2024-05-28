import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Ganti dengan URL backend Anda

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (credentials: LoginCredentials): Promise<string> => {
  try {
    const response = await axios.post<{ token: string }>(
      `${baseURL}/login`,
      credentials,
    );
    const token = response.data.token;

    // Simpan token di localStorage atau sessionStorage
    localStorage.setItem('token', token);

    return token;
  } catch (error) {
    throw error;
  }
};

export const getToken = (): string | null => {
  // Ambil token dari localStorage atau sessionStorage
  return localStorage.getItem('token');
};
