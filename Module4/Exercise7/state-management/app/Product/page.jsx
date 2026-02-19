"use client"
import { useReducer, useState } from "react";
import {
  productReducer,
  initialState,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SELECT_PRODUCT
} from "../reducers/productReducer";
import './page.css'
export default function ProductManager() {

  const [state, dispatch] = useReducer(productReducer, initialState);

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_PRODUCT,
      payload: {
        id: Date.now(),
        name: form.name,
        price: Number(form.price),
        description: form.description
      }
    });

    setForm({ name: "", price: "", description: "" });
  };

  return (
    <div className="product-manager">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>

      <hr />

      <h2>Product List</h2>

      {state.products.map(product => (
        <div key={product.id} className="product-item">
          <strong>{product.name}</strong> - ${product.price}
          <button
            onClick={() => dispatch({ type: SELECT_PRODUCT, payload: { id: product.id } })}
          >
            View
          </button>
          <button
            onClick={() => dispatch({ type: DELETE_PRODUCT, payload: { id: product.id } })}
          >
            Delete
          </button>
        </div>
      ))}

      <hr />

      <h2>Selected Product</h2>

      {state.selectedProduct ? (
        <div className="selected-product">
          <h3>{state.selectedProduct.name}</h3>
          <p>{state.selectedProduct.description}</p>
          <p>${state.selectedProduct.price}</p>
        </div>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );

}
