import { addToCart, removeFromCart } from './cartSlice';
import { increase, decrease } from '../products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {

  const cart = useSelector(state => state.cart);
  const products = useSelector(state => state.products);

  // cart item list
  const items = cart.map(item => {
    const id = item.product_id;
    const product = products.find(p => p.id == id);
    if (product) {
      const { name, price } = product;
      const quantity = item.quantity;  // the item quantity, not product available quantity
      const amount = price * quantity;
      return <CartItem
        key={id}
        id={id}
        name={name}
        price={price}
        quantity={quantity}
        amount={amount} />
    }
    return <h3>Item loading...</h3>
  });

  return (
    <div className='shopping-cart'>
      {items}
    </div>
  )
}

function CartItem({ id, name, price, quantity, amount }) {
  const dispatch = useDispatch();

  return (
    <div className='cart-item'>
      <ul>
        <li>Name: {name}</li>
        <li>Price: ${price}</li>
        <li>Quantity: {quantity}</li>
        <li>Amount: ${amount}</li>
      </ul>
      <div>
        <button onClick={() => {
          dispatch(addToCart({ id: id }));
          dispatch(decrease({ id: id }));
        }}>
          Add one
        </button>
        <button onClick={() => {
          dispatch(removeFromCart({ id: id }));
          dispatch(increase({ id: id }));
        }}>
          Remove one
        </button>
      </div>
    </div>
  );
}
