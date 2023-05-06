import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../models/IProduct";

export const useProducts = () => {
  useEffect(() => {
    fetchProducts()
  }, []);

  const [ products, setProducts ] = useState<IProduct[]>([]);
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ error, setError ] = useState<string>('');

  function addProduct(newProduct: IProduct) {
    setProducts([...products, newProduct]);
  }

  async function fetchProducts() {
    try {
      setLoading(true);
      
      const resp = await axios.get<IProduct[]>(process.env.REACT_APP_PRODUCTS_URL as string );
      setProducts(resp.data);
      
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  return { products, loading, error, addProduct }
}