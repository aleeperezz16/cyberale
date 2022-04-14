import {Col, Row} from 'react-materialize';
import ItemCount from './ItemCount';
import {useContext, useState} from 'react';
import {CartContext} from './CartContext';

const ItemDetail = ({data}) => {
  const cart = useContext(CartContext);
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (count) => {
    alert(`Seleccionaste ${count} items`);
    setGoToCart(true);

    let index;
    if ((index = cart.cartList.indexOf(data)) !== -1)
      // Parar que no se me escape del stock máximo posible, lo limito al stock
      cart.cartList[index].quantity = Math.min(cart.cartList[index].stock, cart.cartList[index].quantity + count);
    else
      cart.addToCart(data, count);
  }

  return (
    <>
      <Row>
        <Col s={5}>
          <img className='responsive-img' src={data.image} alt={data.title}/>
        </Col>
        <Col s={4} push='s2'>
          <div className='section'>
            <h4>{data.title}</h4>
          </div>
          <div className='divider teal lighten-2'/>
          <div className='section flow-text'>
            <p className='detail-stock-info'>
              Stock disponible: {data.stock}
              <strong>${data.price}</strong>
            </p>
            <ItemCount stock={data.stock} initial={0} onAdd={onAdd} goToCart={goToCart} />
          </div>
        </Col>
      </Row>
      <Row>
        <div className='divider teal lighten-2'/>
        <div className='section'>
          <h5>Descripción del producto</h5>
          <p>{data.description}</p>
        </div>
      </Row>
    </>
  )
}

export default ItemDetail;