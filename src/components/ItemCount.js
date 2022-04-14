import {useState} from 'react';
import {Button} from 'react-materialize';
import {Link} from 'react-router-dom';

const ItemCount = ({stock, initial, onAdd, goToCart}) => {
  const [count, setCount] = useState(initial);

  return (
    <>
      {
        goToCart ?
          <Link to='/cart'><Button waves='light'>Ir al carrito</Button></Link> :
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button flat node='a' waves='red' onClick={() => setCount(count > 0 ? count - 1 : count)}><i
              className="material-icons">remove</i></Button>
            <span>{count}</span>
            <Button flat node='a' waves='green' onClick={() => setCount(count < stock ? count + 1 : count)}><i
              className="material-icons">add</i></Button>
            <Button disabled={!count} waves='light' onClick={() => onAdd(count)}>Agregar al carrito</Button>
          </div>
      }
    </>
  )
}

export default ItemCount;