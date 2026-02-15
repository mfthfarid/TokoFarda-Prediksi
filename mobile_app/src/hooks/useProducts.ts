// mobile/hooks/useProducts.ts
import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import { InventoryItem } from '../types/types';

export const useProducts = () => {
  const [products, setProducts] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        // Backend mengembalikan `name`, `price`, `stock`
        const mapped = res.data.map((p: any) => ({
          id: p.id,
          nama: p.name,
          harga: `Rp ${p.price}`,
          stok: p.stock,
          status: p.stock < 10 ? 'low' : 'normal', // Contoh logika status
        }));
        setProducts(mapped);
      } catch (err: any) {
        setError(err.message || 'Gagal mengambil data produk');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
