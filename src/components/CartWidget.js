import {Icon} from 'react-materialize';
import {Link} from 'react-router-dom';

const CartWidget = ({count}) => {
  return (
    <Link to='/'>
      <Icon className='cart-widget' quantity={count}>shopping_cart</Icon>
    </Link>
  )
}

export default CartWidget;