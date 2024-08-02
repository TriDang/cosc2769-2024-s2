import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getProduct } from '../api/products';

export async function loadProduct({ params }) {
  const product = await getProduct(parseInt(params.productID));
  return product;
}

export default function Product() {
  const product = useLoaderData();

  if (product === null) {
    return (
      <h2 style={{ backgroundColor: `red` }}>The product you are looking for has been sold out</h2>
    );
  }

  return (
    <>
      <h1>Product #{product.id} Details</h1>
      <div>
        <h2>{product.name} - ${product.price}</h2>
        <p>{product.description}</p>
        <p>Weight: {product.weight}</p>
      </div>
    </>
  )
}
