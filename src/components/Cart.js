import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Button, Col, Container, Icon, Row } from 'react-materialize';
import CartHeader from './CartHeader';

const Cart = () => {
  const cartItems = useContext(CartContext);

  return (
    <Container>
      {
        cartItems.cartList.length > 0 ? <CartHeader /> : <h4 className='center-screen'><Icon medium style={{ paddingRight: '0.2em' }}>error</Icon>Tu carrito se encuentra vacío</h4>
      }
      {
        cartItems.cartList.map(item =>
          <Row key={item.id}>
            <div className='teal divider' style={{ marginBottom: '2em' }} />
            <Col s={4}>
              <img src={item.image} className='responsive-img' alt={item.title} />
            </Col>
            <Col push='s4' className='flow-text'>
              <div className='section'>
                {item.title}
              </div>
              <div className='teal divider' />
              <div className='section'>
                <span>Cantidad: {item.quantity} - <strong>${item.price}</strong> c/u</span>
              </div>
              <Button className='waves-light waves-effect'
                onClick={() => cartItems.removeFromCart(item)}>Eliminar</Button>
            </Col>
          </Row>
        )
      }
    </Container>
  )
}

export default Cart;