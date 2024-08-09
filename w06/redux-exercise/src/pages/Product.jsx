import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, saveProduct, getProductById } from '../features/productsSlice';

export default function Product() {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const product = useSelector((state) => getProductById(state, productID));

  return (
    <>
      <h1>Product #{product.id} Details</h1>
      <div>
        <h2>{product.name} - ${product.price}</h2>
        <p>{product.description}</p>
        <p>Weight: {product.weight}</p>
        <p><button onClick={() => dispatch(decreaseQuantity({ id: product.id }))}> - </button>
          Quantity: {product.quantity}
          <button onClick={() => dispatch(increaseQuantity({ id: product.id }))}> + </button></p>
        <p>
          <button onClick={() => dispatch(saveProduct(product))}> Save </button>
        </p>
      </div>
    </>
  )
}
