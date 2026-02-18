import { useState, useEffect } from "react";



export default function ProductCSR() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }

    fetchProduct();
  }, []);

  return (
    <>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.slice(0, 10).map(
            ({ id, title, category, description, price }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{category}</td>
                <td>{description}</td>
                <td>${price}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}
