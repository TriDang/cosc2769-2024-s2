import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, getProductsStatus, getAllProducts } from '../features/productsSlice';
import Header from '../components/Header';
import { Link, Outlet } from 'react-router-dom';

export default function Products() {
  const dispatch = useDispatch();
  const productStatus = useSelector(getProductsStatus);
  const products = useSelector(getAllProducts);

  useEffect(() => {
    if (productStatus == 'new') {
      dispatch(fetchProducts());
    }
  }, [productStatus]);

  const data = products.map((p) =>
    <li key={p.id}><Link to={`${p.id}`}>{p.name}</Link></li>
  );

  return (
    <>
      <Header />
      <h1>Products</h1>
      {productStatus == 'loading' && <p>Loading...</p>}
      {productStatus == 'fulfilled' && <ul> { data } </ul>}
      <hr />
      <Outlet />
    </>
  )
}
