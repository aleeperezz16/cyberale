import { Button } from 'react-materialize';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartHeader = () => {
  const cartItems = useContext(CartContext);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBlock: '2em' }}>
      <h3 style={{ marginBlock: 0 }}>Tu carrito</h3>
      <Button className='waves-light waves-effect' onClick={() => cartItems.removeFromCart()}>Vaciar carrito</Button>
    </div>
  )
}


export default CartHeader;