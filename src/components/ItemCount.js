import {useState} from 'react';
import {Button} from 'react-materialize';

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Button flat node='a' waves='red' onClick={() => setCount(count > 1 ? count - 1 : count)}><i
        className="material-icons">remove</i></Button>
      <span>{count}</span>
      <Button flat node='a' waves='green' onClick={() => setCount(count < stock ? count + 1 : count)}><i
        className="material-icons">add</i></Button>
      <Button waves='light' onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </div>
  );
}

export default ItemCount;