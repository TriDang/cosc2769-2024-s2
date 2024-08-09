import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './productsSlice';
import { useRef, useEffect } from 'react';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  let productList = products.map(p => <Product key={p.id} info={p} />);

  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      dispatch(fetchProducts());
      first.current = false;
    }
  }, []);

  if (products.length > 0) {
    return (
      <>
        <h1>Product List</h1>
        <div id="productList">
          {productList}
        </div>
      </>
    )
  }
  return (
    <h1>Loading...</h1>
  )
}
