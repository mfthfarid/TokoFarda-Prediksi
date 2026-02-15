// mobile/services/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://192.168.18.11:8080'; // Ganti dengan IP lokal Anda

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProducts = () => api.get('/products');
export const getProductById = (id: number) => api.get(`/products/${id}`);
export const addProduct = (data: {
  name: string;
  price: number;
  stock: number;
}) => api.post('/products', data);

export default api;
