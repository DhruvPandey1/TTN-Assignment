"use client";

import { useState } from "react";
import { useLoader } from "./context/LoaderContext";
import Loader from "./components/Loader";
import styles from './page.module.css'
export default function HomePage() {
  const [data, setData] = useState(null);
  const { loading, setLoading } = useLoader();

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://dummyjson.com/products/");
      const json = await res.json();
      setData(json.products);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.homepage}>
      <Loader />
      <h1>Products</h1>
      <button onClick={fetchData}>Load Products</button>

      {data?.map(product => (
        <div key={product.id} className={styles.product}>
          <strong>{product.title}</strong> - ${product.price}
        </div>
      ))}
    </div>
  );
}
