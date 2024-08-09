import { increase, decrease } from './productsSlice';
import { addToCart } from '../cart/cartSlice';
import { useDispatch } from 'react-redux';

export default function Product({ info }) {
  const { id, name, price, quantity } = info;

  const dispatch = useDispatch();

  return (
    <div className='product'>
      <h2>{id} - {name}</h2>
      <div>
        Price: ${price}
        <button onClick={() => {
          dispatch(addToCart({ id: id }));
          dispatch(decrease({ id: id }));
        }}>
          Add to cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(increase({ id: id }))}> + </button>
        Quantity: {quantity}
        <button onClick={() => dispatch(decrease({ id: id }))}> - </button>
      </div>
    </div>
  )
}
