"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }


`;

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
    <Container>
      <h2>Products</h2>
      <Table>
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
      </Table>
    </Container>
  );
}
