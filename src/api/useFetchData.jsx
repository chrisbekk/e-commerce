import { useState, useEffect } from 'react';

export default function useFetchData(url) {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const { data } = await response.json();

        setProducts(data);
        console.log(data);
        setError(null);
      } catch (error) {
        setError(`Could not fetch data: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { products, setProducts, error, loading };
}
